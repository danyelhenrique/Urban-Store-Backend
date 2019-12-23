'use strict'

const data = require('../../../seedersFIles')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', data, {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('products', null, {})
    }
}
