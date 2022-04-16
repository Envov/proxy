#!/usr/bin/env node
const express = require('express');
const color = require('colors')
const path = require('path')
const fs = require('fs')
const { createProxyMiddleware } = require('http-proxy-middleware');
const getFormatConfig = require('../lib/getFormatConfig')
const getProxyConfigByPath = require('../lib/getProxyConfigByPath');
const defaultConfigPath = require('../lib/defaultConfigPath')()

const absoluteConfigPath = getAbsoluteConfigPath(defaultConfigPath)
console.log(`
    ${color.gray.underline(absoluteConfigPath)}

    ${color.gray('# explame:')}
    ${color.gray(`[:80/typicode]`)}
    ${color.magenta(`target`)}${color.gray(` = `)}${color.green.underline(`https://jsonplaceholder.typicode.com`)}
`)
const proxyConfigByPath = getProxyConfigByPath(absoluteConfigPath)
const formatConfig = getFormatConfig(proxyConfigByPath)

function getAbsoluteConfigPath(defaultConfigPath) {
    if (process.argv[2]) {
        return path.resolve(process.cwd(), process.argv[2])
    }
    if (fs.existsSync(path.resolve(process.cwd(), './proxy.ini'))) {
        return path.resolve(process.cwd(), './proxy.ini')
    }
    return defaultConfigPath
}
function __main__(formatConfig) {
    formatConfig.forEach(config => {
        const { proxy, port } = config
        const app = express();
        proxy.forEach(proxy => {
            const path = proxy.path.replace(/\/$/, '')
            app.use(path, createProxyMiddleware(proxy))
            console.log(`
            ${color.cyan.underline('http://127.0.0.1:' + port)}${color.cyan.underline(path)} ${color.yellow('==>')} ${color.green.underline(proxy.target)}`)
        })

        app.listen(port)
    })
}
__main__(formatConfig)