const modules = require('require-all')(__dirname)
delete modules.index

const files = Object.values(modules)

module.exports = files
