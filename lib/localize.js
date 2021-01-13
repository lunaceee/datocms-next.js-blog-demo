export default function localize(val, locale, allLocaleValues) {
  let localeMap = {}

  allLocaleValues.map(x => {
    localeMap[x.locale] = x.value
  })

  const mylocale = locale.substring(0, 2)
  
  return localeMap[mylocale] ? localeMap[mylocale] : val;
}