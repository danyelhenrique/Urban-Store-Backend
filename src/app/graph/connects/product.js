const ProductModel = require('../../models/Product')

const Product = {
	async store({ name, price, imageUrl, description }) {
		const product = await ProductModel.create({
			name,
			price,
			image_url: imageUrl,
			description
		})
		return product.dataValues
	},

	async index({ offset, limit }) {
		const products = await ProductModel.findAll({})
		return products.map((product) => {
			console.table(product)
			return product.dataValues
		})
	},
	async show({ id }) {
		const product = await ProductModel.findByPk(id)
		return product.dataValues
	},
	async update({ id, ...data }) {
		const updateProduct = await ProductModel.findByPk(id)
		const dataCheck = data.imageUrl ? { ...data, image_url: data.imageUrl } : { ...data }

		const product = await updateProduct.update(dataCheck)

		return { ...product.dataValues, imageUrl: product.dataValues.image_url }
	},
	async destroy({ id }) {
		const destroyProduct = await ProductModel.findByPk(id)

		const product = await destroyProduct.destroy()
		return !product.dataValues
	}
}

module.exports = Product
