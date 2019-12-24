import { parseResolveInfo } from 'graphql-parse-resolve-info';
import Auth from '../../Auth/auth';

const resolvers = {
	Query: {
		indexProduct(_, args, { helpers: { ProductController } }) {
			const product = ProductController.index(args);
			return product;
		},
		showProduct(_, args, { helpers: { ProductController } }) {
			const product = ProductController.show(args);
			return product;
		},
		indexUser(_, args, { helpers: { UserController } }) {
			const User = UserController.index(args);
			return User;
		},
		showUser(_, args, { helpers: { UserController } }) {
			const User = UserController.show(args);
			return User;
		},
		indexPurchase(_, args, { helpers: { PurchaseController } }, info) {
			const parseInfo = parseResolveInfo(info);
			const parseItems = parseInfo.fieldsByTypeName.User;
			const parsefildProd = parseItems.products.fieldsByTypeName.Product;
			args.items = Object.keys(parsefildProd);

			const purchase = PurchaseController.index(args);
			return purchase;
		},
		showPurchase(_, args, { helpers: { PurchaseController } }, info) {
			const parseInfo = parseResolveInfo(info);

			const parseItems = parseInfo.fieldsByTypeName.Product;
			args.items = Object.keys(parseItems);

			const purchase = PurchaseController.show(args);
			return purchase;
		}
	},

	Mutation: {
		storeProduct(_, args, { helpers: { ProductController } }) {
			const product = ProductController.store(args);

			return product;
		},
		destroyProduct(_, args, { helpers: { ProductController } }) {
			const product = ProductController.destroy(args);
			return product;
		},

		updateProduct(_, args, { helpers: { ProductController } }) {
			const product = ProductController.update(args);

			return product;
		},
		loginUser(_, args) {
			const user = Auth.signIn(args);

			return user;
		},
		storeUser(_, args, { helpers: { UserController } }) {
			const user = UserController.store(args);

			return user;
		},
		destroyUser(_, args, { helpers: { UserController } }) {
			const user = UserController.destroy(args);

			return user;
		},
		updateUser(_, args, { helpers: { UserController, token } }) {
			// eslint-disable-next-line no-unused-vars
			const user = UserController.update(args);

			return user;
		},

		storePurchase(_, args, { helpers: { PurchaseController } }) {
			const purchase = PurchaseController.store(args);

			return purchase;
		},
		destroyPurchase(_, args, { helpers: { PurchaseController } }) {
			const purchase = PurchaseController.destroy(args);

			return purchase;
		},
		updatePurchase(_, args, { helpers: { PurchaseController } }, info) {
			const parseInfo = parseResolveInfo(info);

			const parseItems = parseInfo.fieldsByTypeName.User.products;
			const finalPaser = parseItems.fieldsByTypeName.Product;
			console.log(Object.keys(finalPaser));
			args.items = Object.keys(finalPaser);
			const purchase = PurchaseController.update(args);

			return purchase;
		}
	}
};

export default resolvers;
