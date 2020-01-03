import ProductModel from '../models/Product';

class Product {
	async index({ page, limit }) {
		const checkPage = page >= 0 ? 1 : page;
		const offset = (checkPage - 1) * limit;
		const products = await ProductModel.findAll({
			limit,
			offset
		});
		//return products.map((product) => {
		//	console.log({...product.dataValues});
			//return [{...product.dataValues}]
		//});
		 return  products ;
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

export default new Product();
