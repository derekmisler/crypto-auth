const { parsed } = require('dotenv').config()

export default function(config, env, helpers) {
  delete config.node
  // dotenv injection
  const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0]
  plugin.definitions = {
    ...plugin.definitions,
    ...Object.keys(parsed || {}).reduce((env, key) => ({
      ...env,
      [`process.env.${key}`]: JSON.stringify(parsed[key])
    }), {})
  }
  config.resolve.extensions.push('.jsx')
  return config
}