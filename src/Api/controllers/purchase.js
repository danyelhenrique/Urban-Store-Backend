/* eslint-disable no-undef */
import User from '../models/User'
import Product from '../models/Product'

import IndexConnect from '../../Utils/controllers/indexConect'

class Purchase {
    async index({ offset, limit, items }) {
        const attributes = [...items]

        try {
            const users = await User.findAll()
            const IdQnt = users.map(user => user.dataValues.id)

            const data = { users, attributes, IdQnt }
            const end = IndexConnect(data).formatPurchaseData()

            return end
        } catch (err) {
            return new Error('Internal server error <Fail to get Purchases>')
        }
    }

    async show({ id, items }) {
        const attributes = [...items]

        const clearInput = attributes.findIndex(prod => prod.includes('user'))
        if (clearInput >= 0) attributes.splice(clearInput, 1)

        try {
            const products = await User.findByPk(id)

            const [productJoin] = await products.getProducts({
                include: [
                    {
                        required: false,
                        all: true,
                        attributes: ['name', 'email', 'id']
                    }
                ],
                attributes
            })
            const [user] = productJoin.users

            const dataTransform = { ...productJoin.dataValues, user }

            return dataTransform
        } catch (err) {
            return new Error('Internal server error <Fail to get Purchases>')
        }
    }

    async store({ userId, productIds }) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['id', 'name', 'email']
            }).then(user => {
                productIds.map(({ id }) => {
                    user.addProduct(id)
                })
                return user
            })

            productIds.map(({ id, qnt }) =>
                Product.findByPk(id, {
                    attributes: ['id']
                }).then(prod => {
                    const subQnt = prod.id - qnt >= 0 ? prod.id - qnt : 0
                    return prod.update({ subQnt })
                })
            )

            return user
        } catch (err) {
            return new Error('Internal server error <Fail to store Purchases>')
        }
    }

    async update({ userId, prodId, oldProdId, purchaseId, items }) {
        const attributes = [...items]
        // MODIFY TO USE TRANSECTION

        try {
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
            })
            await product.removeProduct(oldProdId)
            await product.addProduct(prodId)

            return product
        } catch (err) {
            return new Error('Internal server error <Fail to update Purchase>')
        }
    }

    async destroy({ userId }) {
        // remove -> remove  all rows with user_id
        try {
            const [destroyPurchase] = await User.findAll({
                required: false,
                where: { id: userId },
                attributes: ['name', 'id'],
                include: [{ all: true }]
            })

            await destroyPurchase.destroy()

            return true
        } catch (err) {
            return new Error('Internal server error <Fail to destroy Purchase>')
        }
    }

    async remove({ userId, oldProdId }) {
        // remove -> rows using  and user_id and prod_id
        try {
            const [destroyPurchase] = await User.findAll({
                required: false,
                where: { id: userId },
                attributes: ['name', 'id'],
                include: [
                    {
                        association: 'products',
                        attributes: ['name', 'id']
                    }
                ]
            })
            await destroyPurchase.removeProduct(oldProdId)

            return true
        } catch (err) {
            return new Error('Internal server error <Fail to remove Purchase>')
        }
    }
}

export default new Purchase()
