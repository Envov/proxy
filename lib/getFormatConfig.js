
const formatPoatPath = require("./formatPoatPath")

const getFormatConfig = proxyConfig => Object.keys(proxyConfig).reduce(
    (formatConfig, portPath) => {
        const [port, path] = formatPoatPath(portPath)
        const target = proxyConfig[portPath].target.replace(/\/$/, '')
        if (!formatConfig.find(i => i.port === port)) {
            return [
                ...formatConfig,
                {
                    port,
                    proxy: [
                        {
                            logLevel: 'silent',
                            path,
                            changeOrigin: true,
                            ws: true,
                            target,
                            pathRewrite: path ? {
                                [`^${path}`]: ''
                            } : undefined
                        }
                    ]

                }
            ]
        } else {
            formatConfig.find(i => i.port === port).proxy.push({
                path,
                logLevel: 'silent',
                changeOrigin: true,
                ws: true,
                target,
                pathRewrite: path ? {
                    [`^${path}`]: ''
                } : undefined
            })
            return formatConfig
        }
    },
    []
)

module.exports = getFormatConfig