module.exports = {
  future: { webpack5: true },
  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true
    }
    return config
  }
}
