const fs = require('node:fs')
const dist = require('./utils/dist.cjs')
const flatConfig = require('./utils/flatConfig.cjs')

fs.writeFileSync(
  `${dist}sass-color-variables.scss`,
  Object.entries(flatConfig)
    .map(([key, value]) => `$${key}: var(--color-${key}, ${value});`)
    .join('\n'),
  (err) => {
    if (err)
      throw err
  },
)
