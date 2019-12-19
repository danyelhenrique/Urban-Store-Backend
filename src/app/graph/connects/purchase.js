/* eslint-disable camelcase */
const User = require('../../models/User');
class Purchase {
	async store({ user_id, product_id }) {
		const [ product ] = await User.findOrCreate({
			where: { id: user_id },
			attributes: [ 'id', 'name', 'email' ]
		});
		const [ purchases ] = await product.addProduct(product_id);

		const dataTransformation = { ...purchases.dataValues, user: { ...product.dataValues } };
		return dataTransformation;
	}

	async index({ offset, limit }) {
		const a = await User.findAll({
			include: [ { all: true, nested: true } ]
		});

		console.log(a);

		console.log('-------');
		return a;
	}

	async show({ id }) {
		const products = await User.findByPk(id);

		const productJoin = await products.getProducts({
			include: [
				{
					required: false,
					association: 'users'
				}
			]
		});

		return productJoin;
	}

	async remove({ user_id, product_id }) {
		// remove -> rows using  and user_id and prod_id
		const [ destroyPurchase ] = await User.findAll({
			required: false,
			where: { id: user_id },
			attributes: [ 'name', 'id' ],
			include: [
				{
					association: 'products',
					attributes: [ 'name', 'id' ]
				}
			]
		});

		// const product = await destroyPurchase.destroy()
		const product = await destroyPurchase.removeProduct(product_id);

		return !product.dataValues;
	}

	async destroy({ user_id }) {
		// remove -> remove  all rows with user_id
		const [ destroyPurchase ] = await User.findAll({
			required: false,
			where: { id: user_id },
			attributes: [ 'name', 'id' ],
			include: [
				{
					association: 'products',
					attributes: [ 'name', 'id' ]
				}
			]
		});

		const product = await destroyPurchase.destroy();
		// const product = await destroyPurchase.removeProduct(product_id)

		return !product.dataValues;
	}
}

module.exports = new Purchase();
