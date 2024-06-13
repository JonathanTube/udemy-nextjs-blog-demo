const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phrase) => {
  const config = {
    reactStrictMode: true
  }
  if (phrase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...config,
      env: {
        title: "DEV"
      }
    }
  }
  return {
    ...config,
    env: {
      title: "PROD"
    }
  }
}
