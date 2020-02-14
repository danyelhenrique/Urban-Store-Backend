import ProductModel from '../models/Product'

class Product {
    async index(args) {
        const { page, limit, filds } = args

        const attributes = [...filds]
        const offset = (page - 1) * limit + 1
        try {
            const products = await ProductModel.findAll({
                limit,
                offset,
                attributes
            })
            return products
        } catch (error) {
            return new Error('Internal server error <Fail to get Products>')
        }
    }

    async show(args) {
        const { where, filds } = args

        const attributes = [...filds]

        try {
            const product = await ProductModel.findOne({
                where: where,
                attributes
            })
            return product.dataValues
        } catch (error) {
            return new Error('Internal server error <Fail to get Product>')
        }
    }

    async store({ input }) {
        try {
            const product = await ProductModel.create({
                input
            })
            return product.dataValues
        } catch (error) {
            return new Error('Internal server error <Fail to store Product>')
        }
    }

    async update({ id, input }) {
        try {
            const updateProduct = await ProductModel.findByPk(id)

            const product = await updateProduct.update(input)

            return product
        } catch (error) {
            return new Error('Internal server error <Fail to update Product>')
        }
    }

    async destroy({ id }) {
        try {
            const destroyProduct = await ProductModel.findByPk(id)
            await destroyProduct.destroy()
            return true
        } catch (error) {
            return new Error('Internal server error <Fail to destroy Product>')
        }
    }
}

export default new Product()
