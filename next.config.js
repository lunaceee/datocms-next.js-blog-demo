require('dotenv').config()

module.exports = {
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
   i18n: {
    locales: ['en-US', 'zh-TW', 'es-ES'],
    defaultLocale: 'en-US'
  },
}
