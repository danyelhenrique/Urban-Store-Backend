import { gql } from 'apollo-server-express'

const typeQuery = gql`

	extend type Query {
        indexProduct(page: Int, limit: Int): [Product]
        showProduct(where: ProductInput): Product
	}
`
export default typeQuery
