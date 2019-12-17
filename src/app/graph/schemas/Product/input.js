const { gql } = require('apollo-server-express')

const typeInput = gql`
	input ProductInput {
		id: ID
		data_price: Int
		data_article_number: String
		data_product_display_name: String
		data_brand_name: String
		data_age_group: String
		data_gender: String
		data_base_colour: String
		data_colour1: String
		data_colour2: String
		data_colour3: String
		data_colour4: String
		data_fashion_type: String
		data_season: String
		data_year: String
		data_usage: String
		data_display_categories: String
		data_landing_page_url: String
		data_article_attributes_pattern: String
		data_article_attributes_body_or_garment_size: String
		data_size_representation: String
		data_back_image_url: String
		data_back_resolutions1080_x1440_xmini: String
		data_back_resolutions1080X1440: String
		data_back_resolutions_150X200: String
		data_back_resolutions_360X480: String
		data_back_resolutions_180X240: String
		data_back_resolutions_360X480_xmini: String
		data_back_resolutions_180X240_xmini: String
		data_back_resolutions_150X200_xmini: String
		data_back_resolutions_48X64_xmini: String
		data_back_resolutions_125X161: String
		data_front_imageURL: String
		data_front_resolutions1080_x1440_xmini: String
		data_front_resolutions1080X1440: String
		data_front_resolutions_150X200: String
		data_front_resolutions_360X480: String
		data_front_resolutions_180X240: String
		data_front_resolutions_360X480_xmini: String
		data_front_resolutions_180X240_xmini: String
		data_front_resolutions_150X200_xmini: String
		data_front_resolutions_48X64_xmini: String
		data_front_resolutions_125X161: String
		productDescriptors_description_descriptorType: String
		productDescriptors_description_value: String
	}
`
module.exports = typeInput
