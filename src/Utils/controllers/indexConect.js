class IndexConnect {
	constructor({ users, attributes, IdQnt }) {
		this.users = users
		this.attributes = attributes
		this.IdQnt = IdQnt
	}

	async formatPurchaseData() {
		const state = {}
		state.usersData = await this.getAllproductsUser(this.users, this.attributes, this.IdQnt)

		state.usersData.map((item) => {
			const prod = { ...item.dataValues }
			state.data = item.dataValues.users.map((user) => {
				const users = user.dataValues
				return { ...users, products: [ prod ] }
			})
		})

		return state.data
	}

	getAllproductsUser(users, attributes, IdQnt) {
		let getProdcs
		return new Promise((resolve, reject) => {
			for (const index in IdQnt) {
				getProdcs = users[index].getProducts({
					include: [
						{
							required: false,
							all: true,
							attributes: [ 'name', 'email', 'id' ]
						}
					],
					attributes
				})
			}
			return resolve(getProdcs)
		})
	}
}

module.exports = (data) => new IndexConnect(data)
