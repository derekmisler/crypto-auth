const { parsed } = require('dotenv').config()

export default function(config, env, helpers) {
  delete config.node
  // dotenv injection
  const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0]
  Object.assign(
    plugin.definitions,
    Object.keys(parsed || {}).reduce((env, key) => ({
      ...env,
      [key]: JSON.stringify(parsed[key])
    }), {})
  )
}