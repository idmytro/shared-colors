const fs = require('node:fs')
const dist = require('./utils/dist.cjs')
const flatConfig = require('./utils/flatConfig.cjs')

fs.writeFileSync(
  `${dist}colors.json`,
  `${JSON.stringify(flatConfig, null, 2)}\n`,
  (err) => {
    if (err)
      throw err
  },
)
