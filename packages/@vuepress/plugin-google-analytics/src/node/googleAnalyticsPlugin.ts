import type { Plugin, PluginObject } from '@vuepress/core'
import { logger, path } from '@vuepress/utils'

export interface GoogleAnalyticsPluginOptions {
  id: string
}

export const googleAnalyticsPlugin: Plugin<GoogleAnalyticsPluginOptions> = ({
  id,
}) => {
  const plugin: PluginObject = {
    name: '@vuepress/plugin-google-analytics',
  }

  if (!id) {
    logger.warn(`[${plugin.name}] 'id' is required`)
    return plugin
  }

  return {
    ...plugin,

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      '../client/clientAppEnhance.js'
    ),

    define: {
      __GA_ID__: id,
    },
  }
}
