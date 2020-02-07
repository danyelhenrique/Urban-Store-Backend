import { Model, DataTypes } from 'sequelize'

class Product extends Model {
	static init(sequelize) {
		super.init(
			{
				data_price: {
					type: DataTypes.FLOAT,
					allowNull: false
				},
				data_article_number: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_product_display_name: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_add_date: {
					type: DataTypes.INTEGER,
					allowNull: false
				},
				data_brand_name: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_age_group: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_gender: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_base_colour: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_colour1: {
					type: DataTypes.TEXT
				},
				data_colour2: {
					type: DataTypes.TEXT
				},
				data_colour3: {
					type: DataTypes.TEXT
				},
				data_colour4: {
					type: DataTypes.TEXT
				},
				data_fashion_type: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_season: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_year: {
					type: DataTypes.INTEGER,
					allowNull: false
				},
				data_usage: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_display_categories: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_landing_page_url: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_article_attributes_pattern: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_article_attributes_body_or_garment_size: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				data_size_representation: {
					type: DataTypes.TEXT
				},
				data_back_image_url: {
					type: DataTypes.TEXT
				},
				data_back_resolutions1080_x1440_xmini: {
					type: DataTypes.TEXT
				},
				data_back_resolutions1080X1440: {
					type: DataTypes.TEXT
				},
				data_back_resolutions_150X200: {
					type: DataTypes.TEXT
				},
				data_back_resolutions_360X480: {
					type: DataTypes.TEXT
				},
				data_back_resolutions_180X240: {
					type: DataTypes.TEXT
				},
				data_back_resolutions_360X480_xmini: {
					type: DataTypes.TEXT
				},
				data_back_resolutions_180X240_xmini: {
					type: DataTypes.TEXT
				},
				data_back_resolutions_150X200_xmini: {
					type: DataTypes.TEXT
				},
				data_back_resolutions_48X64_xmini: {
					type: DataTypes.TEXT
				},
				data_back_resolutions_125X161: {
					type: DataTypes.TEXT
				},
				data_front_imageURL: {
					type: DataTypes.TEXT
				},

				data_front_resolutions1080_x1440_xmini: {
					type: DataTypes.TEXT
				},
				data_front_resolutions1080X1440: {
					type: DataTypes.TEXT
				},
				data_front_resolutions_150X200: {
					type: DataTypes.TEXT
				},
				data_front_resolutions_360X480: {
					type: DataTypes.TEXT
				},
				data_front_resolutions_180X240: {
					type: DataTypes.TEXT
				},
				data_front_resolutions_360X480_xmini: {
					type: DataTypes.TEXT
				},
				data_front_resolutions_180X240_xmini: {
					type: DataTypes.TEXT
				},
				data_front_resolutions_150X200_xmini: {
					type: DataTypes.TEXT
				},
				data_front_resolutions_48X64_xmini: {
					type: DataTypes.TEXT
				},
				data_front_resolutions_125X161: {
					type: DataTypes.TEXT
				},
				productDescriptors_description_descriptorType: {
					type: DataTypes.TEXT
				},
				productDescriptors_description_value: {
					type: DataTypes.TEXT
				},
				qnt: {
					type: DataTypes.VIRTUAL,
					defaultValue: 0
				}
			},
			{
				sequelize,
				tableName: 'products',
				freezeTableName: true
			}
		)
	}

	static associate(models) {
		this.belongsToMany(models.User, {
			through: 'purchases',
			as: 'users',
			foreignKey: 'product_id'
		})
	}
}

export default Product
