// eslint-disable-next-line no-unused-vars
const { parseResolveInfo, simplifyParsedResolveInfoFragmentWithType } = require('graphql-parse-resolve-info');

const resolvers = {
	Query: {
		indexProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.index(args);
			return product;
		},
		showProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.show(args);
			return product;
		},
		indexUser(_, args, { helpers: { UserConnect } }) {
			const User = UserConnect.index(args);
			return User;
		},
		showUser(_, args, { helpers: { UserConnect } }) {
			const User = UserConnect.show(args);
			return User;
		},
		indexPurchase(_, args, { helpers: { PurchaseConnect } }, info) {
			const parseInfo = parseResolveInfo(info);
			const parseItems = parseInfo.fieldsByTypeName.User;
			const parsefildProd = parseItems.products.fieldsByTypeName.Product;
			args.items = Object.keys(parsefildProd);

			const purchase = PurchaseConnect.index(args);
			return purchase;
		},
		showPurchase(_, args, { helpers: { PurchaseConnect } }, info) {
			const parseInfo = parseResolveInfo(info);

			const parseItems = parseInfo.fieldsByTypeName.Product;
			args.items = Object.keys(parseItems);

			const purchase = PurchaseConnect.show(args);
			return purchase;
		}
	},

	Mutation: {
		storeProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.store(args);

			return product;
		},
		destroyProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.destroy(args);
			return product;
		},

		updateProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.update(args);

			return product;
		},

		storeUser(_, args, { helpers: { UserConnect } }) {
			const user = UserConnect.store(args);

			return user;
		},
		destroyUser(_, args, { helpers: { UserConnect } }) {
			const user = UserConnect.destroy(args);

			return user;
		},
		updateUser(_, args, { helpers: { UserConnect } }) {
			const user = UserConnect.update(args);

			return user;
		},

		storePurchase(_, args, { helpers: { PurchaseConnect } }) {
			const purchase = PurchaseConnect.store(args);

			return purchase;
		},
		destroyPurchase(_, args, { helpers: { PurchaseConnect } }) {
			const purchase = PurchaseConnect.destroy(args);

			return purchase;
		},
		updatePurchase(_, args, { helpers: { PurchaseConnect } }, info) {
			const parseInfo = parseResolveInfo(info);

			const parseItems = parseInfo.fieldsByTypeName.User.products;
			const finalPaser = parseItems.fieldsByTypeName.Product;
			console.log(Object.keys(finalPaser));
			args.items = Object.keys(finalPaser);
			const purchase = PurchaseConnect.update(args);

			return purchase;
		}
	}
};

module.exports = resolvers;
