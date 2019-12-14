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
                type: Sequelize.INTEGER,
                allowNull: false
            },
            data_articleNumber: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_productDisplayName: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_catalogAddDate: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            data_brandName: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_ageGroup: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_gender: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_baseColour: {
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
            data_fashionType: {
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
            data_displayCategories: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_landingPageUrl: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_articleAttributes_Pattern: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_articleAttributes_Body_or_Garment_Size: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data_size_representation: {
                type: Sequelize.TEXT
            },
            data_back_imageURL: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_1080X1440Xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_1080X1440: {
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
            data_back_resolutions_360X480Xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_180X240Xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_150X200Xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_48X64Xmini: {
                type: Sequelize.TEXT
            },
            data_back_resolutions_125X161: {
                type: Sequelize.TEXT
            },
            data_front_imageURL: {
                type: Sequelize.TEXT
            },

            data_front_resolutions_1080X1440Xmini: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_1080X1440: {
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
            data_front_resolutions_360X480Xmini: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_180X240Xmini: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_150X200Xmini: {
                type: Sequelize.TEXT
            },
            data_front_resolutions_48X64Xmini: {
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
