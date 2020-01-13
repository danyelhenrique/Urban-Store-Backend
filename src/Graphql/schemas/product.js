import { gql } from 'apollo-server-express'
import Product from '../js/product'
const typeDefs = gql`
	type Product {
		${ Product }
	}
`

export default typeDefs
