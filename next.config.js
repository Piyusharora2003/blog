const { default: mongoose } = require('mongoose')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{serverComponentsExternalPackages:["mongoose"]},
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    }
}

  

module.exports = nextConfig
