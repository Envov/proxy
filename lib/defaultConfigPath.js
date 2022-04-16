const path = require('path')
const os = require('os')
function defaultConfigPath() {
    return path.join(os.homedir(), "proxy.ini");
}
module.exports = defaultConfigPath