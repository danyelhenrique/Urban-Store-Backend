'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            data_price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            data_article_number: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_product_display_name: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_add_date: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            data_brand_name: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_age_group: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_gender: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_base_colour: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_colour1: {
                type: Sequelize.TEXT
            },
            data_colour2: {
                type: Sequelize.TEXT
            },
            data_colour3: {
                type: Sequelize.TEXT
            },
            data_colour4: {
                type: Sequelize.TEXT
            },
            data_fashion_type: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_season: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_year: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            data_usage: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_display_categories: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_landing_page_url: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_article_attributes_pattern: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_article_attributes_body_or_garment_size: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_size_representation: {
                type: Sequelize.TEXT
            },
            data_back_image_url: {
                type: Sequelize.TEXT
            },
            data_back_resolutions1080_x1440_xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions1080X1440: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_150X200: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_360X480: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_180X240: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_360X480_xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_180X240_xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_150X200_xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_48X64_xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_125X161: {
                type: Sequelize.TEXT
            },
            data_front_imageURL: {
                type: Sequelize.TEXT
            },

            data_front_resolutions1080_x1440_xmini: {
                type: Sequelize.TEXT
            },
            data_front_resolutions1080X1440: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_150X200: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_360X480: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_180X240: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_360X480_xmini: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_180X240_xmini: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_150X200_xmini: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_48X64_xmini: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_125X161: {
                type: Sequelize.TEXT
            },
            productDescriptors_description_descriptorType: {
                type: Sequelize.TEXT
            },
            productDescriptors_description_value: {
                type: Sequelize.TEXT
            },
            updated_at: {
                allowNull: false,
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            created_at: {
                allowNull: false,
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('products')
    }
}
