const User = require('../../models/User');
// eslint-disable-next-line no-unused-vars
const Purchases = require('../../models/Purchase');

const IndexConnect = require('../../../utils/conects/indexConect');

class Purchase {
	async store({ userId, productId }) {
		const [ product ] = await User.findOrCreate({
			where: { id: userId },
			attributes: [ 'id', 'name', 'email' ]
		});
		const [ purchases ] = await product.addProduct(productId);

		const dataTransformation = { ...purchases.dataValues, user: { ...product.dataValues } };
		return dataTransformation;
	}

	async remove({ userId, oldProdId }) {
		// remove -> rows using  and user_id and prod_id
		const [ destroyPurchase ] = await User.findAll({
			required: false,
			where: { id: userId },
			attributes: [ 'name', 'id' ],
			include: [
				{
					association: 'products',
					attributes: [ 'name', 'id' ]
				}
			]
		});

		// const product = await destroyPurchase.destroy()
		const product = await destroyPurchase.removeProduct(oldProdId);

		return !product.dataValues;
	}

	async update({ userId, prodId, oldProdId, purchaseId, items }) {
		const attributes = [ ...items ];

		const product = await User.findByPk(userId, {
			required: false,
			include: [
				{
					association: 'products',
					attributes,
					where: { id: prodId },
					through: {
						where: { id: purchaseId }
					}
				}
			]
		});
		await product.removeProduct(oldProdId);
		await product.addProduct(prodId);

		return product;
	}

	async index({ offset, limit, items }) {
		const attributes = [ ...items ];

		const users = await User.findAll();
		const IdQnt = users.map((user) => user.dataValues.id);

		const data = { users, attributes, IdQnt };
		const end = IndexConnect(data).formatPurchaseData();

		return end;
	}

	async show({ id, items }) {
		const attributes = [ ...items ];

		const clearInput = attributes.findIndex((prod) => prod.includes('user'));
		if (clearInput >= 0) attributes.splice(clearInput, 1);

		const products = await User.findByPk(id);

		const [ productJoin ] = await products.getProducts({
			include: [
				{
					required: false,
					all: true,
					attributes: [ 'name', 'email', 'id' ]
				}
			],
			attributes
		});
		const [ user ] = productJoin.users;

		const dataTransform = { ...productJoin.dataValues, user };

		return dataTransform;
		// const product = await User.findByPk(id, {
		// 	attributes: [ 'id', 'name', 'email' ],
		// 	include: [
		// 		{
		// 			all: true,
		// 			through: {
		// 				where: { user_id: id }
		// 			}
		// 		}
		// 	]
		// });
		// const qq = product.dataValues.products.map((ele) => {
		// 	// eslint-disable-next-line no-unused-vars
		// 	const a = { ...ele.dataValues };
		// 	// console.log(ele.dataValues);
		// 	return a;
		// });
		// console.log(qq);

		// return qq;
	}

	async destroy({ userId }) {
		// remove -> remove  all rows with user_id
		const [ destroyPurchase ] = await User.findAll({
			required: false,
			where: { id: userId },
			attributes: [ 'name', 'id' ],
			include: [ { all: true } ]
		});

		const product = await destroyPurchase.destroy();
		// const product = await destroyPurchase.removeProduct(product_id)

		return !product.dataValues;
	}
}

module.exports = new Purchase();
