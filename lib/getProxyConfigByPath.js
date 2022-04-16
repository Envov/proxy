const ini = require('ini')
const fs = require('fs')
const getProxyConfigByPath = filePath => ini.parse(fs.readFileSync(filePath, 'utf-8'))
module.exports = getProxyConfigByPath