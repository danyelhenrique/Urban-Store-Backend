const { SchemaDirectiveVisitor } = require('apollo-server-express');

const { defaultFieldResolver } = require('graphql');
const auth = require('../../Auth/auth');

class AuthDirective extends SchemaDirectiveVisitor {
	visitFieldDefinition(field) {
		const { resolve = defaultFieldResolver } = field;
		field.resolve = async function(...args) {
			const [ , , tokenIndex ] = args;
			console.log(tokenIndex);
			await auth.authenticate(tokenIndex.token);

			const result = await resolve.apply(this, args);

			return result;
		};
	}
}

module.exports = AuthDirective;
