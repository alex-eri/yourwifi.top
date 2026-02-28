// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'nuxt/nuxt-config-keys-order': 'off' // Turn the rule off
    }
  }
)
