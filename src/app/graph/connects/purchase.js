const PurchaseModel = require('../../models/Purchase')
const User = require('../../models/User')
const Product = require('../../models/Product')

const Purchase = {
	async store({ user_id, product_id }) {
		const [ product ] = await User.findOrCreate({
			where: { id: user_id }
		})

		const prod = await product.addProduct(product_id)

		return prod
	},

	async index({ offset, limit }) {
		const product = await User.findAll({
			required: false,
			include: [
				{
					association: 'products'
				}
			]
		})

		return product
	},
	async show({ id }) {
		const products = await User.findByPk(id)

		const productJoin = await products.getProducts({
			include: [
				{
					required: false,
					association: 'users'
				}
			]
		})
		const product = await productJoin.map((ele) => {
			const imageUrl = ele.dataValues.image_url
			return { ...ele.dataValues, imageUrl }
		})

		return product
	},
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
		})

		// const product = await destroyPurchase.destroy()
		const product = await destroyPurchase.removeProduct(product_id)

		return !product.dataValues
	},
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
		})

		const product = await destroyPurchase.destroy()
		// const product = await destroyPurchase.removeProduct(product_id)

		return !product.dataValues
	}
}

module.exports = Purchase
