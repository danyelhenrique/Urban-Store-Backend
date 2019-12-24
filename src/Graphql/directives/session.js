import { SchemaDirectiveVisitor } from 'apollo-server-express';

import { defaultFieldResolver } from 'graphql';
import auth from '../../Auth/auth';

class AuthDirective extends SchemaDirectiveVisitor {
	visitFieldDefinition(field) {
		const { resolve = defaultFieldResolver } = field;
		field.resolve = async function(...args) {
			const [ , , tokenIndex ] = args;
			await auth.authenticate(tokenIndex.token);

			const result = await resolve.apply(this, args);

			return result;
		};
	}
}

export default AuthDirective;
