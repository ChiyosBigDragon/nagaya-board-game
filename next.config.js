module.exports = {
  future: { webpack5: true },
  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true
    }
    config.output.webassemblyModuleFilename =
      (isServer ? '../' : '') + 'static/wasm/webassembly.wasm'
    return config
  }
}
