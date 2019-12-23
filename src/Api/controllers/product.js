const ProductModel = require('../models/Product');

class Product {
	async index({ offset, limit }) {
		const products = await ProductModel.findAll({});
		return products.map((product) => {
			return product.dataValues;
		});
	}

	async show({ id }) {
		const product = await ProductModel.findByPk(id);
		return product.dataValues;
	}

	async store({ input }) {
		const product = await ProductModel.create({
			input
		});
		return product.dataValues;
	}

	async update({ id, input }) {
		const updateProduct = await ProductModel.findByPk(id);

		const product = await updateProduct.update(input);

		return product;
	}

	async destroy({ id }) {
		const destroyProduct = await ProductModel.findByPk(id);

		const product = await destroyProduct.destroy();
		return !product.dataValues;
	}
}

module.exports = new Product();
