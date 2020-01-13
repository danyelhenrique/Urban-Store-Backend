import { gql } from 'apollo-server-express'
import Product from '../js/product'

const typeInput = gql`
	input ProductInput {
		${ Product }
	}
`
export default typeInput
