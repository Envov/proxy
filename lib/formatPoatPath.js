const colors = require("colors");
const formatPoatPath = portPath => {
    const reg = /^\:(\d{1,5})(\/\S+$|$)/
    const reg2 = /\/$/
    const matched = portPath.match(reg)
    if (!reg2.test(portPath) && matched && matched[1] && parseInt(matched[1]) > 0 && parseInt(matched[1]) < 65535) {
        return [
            parseInt(matched[1]),
            matched[2]
        ]
    } else {
        throw new Error(`
            [${colors.red(portPath)}] 👈 ${colors.red('Error')}

                ${colors.cyan('1、start with :port(0-65535)')}
                ${colors.cyan('2、not end with /')}

                ${colors.gray('#explame:')}

                ${colors.blue(`[:80/typicode]`)}
                ${colors.magenta(`target`)}${colors.gray(` = `)}${colors.green.underline(`https://jsonplaceholder.typicode.com`)}
        `)
    }
}
module.exports = formatPoatPath