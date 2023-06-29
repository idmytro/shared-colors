const fs = require('node:fs')
const dist = require('./utils/dist.cjs')
const flatConfig = require('./utils/flatConfig.cjs')

const result = Object.keys(flatConfig).reduce((acc, key) => {
  acc[key] = `rgba(var(--color-${key}-rgb), var(--tw-bg-opacity, 1))`

  return acc
}, {})

fs.writeFileSync(
  `${dist}windicss-colors.ts`,
  `export const windiColors = {\n${Object.entries(result).map(([key, value]) => `  ${key}: '${value}',`).join('\n')}\n}\n`,
  (err) => {
    if (err)
      throw err
  },
)
