const fs = require('node:fs')
const dist = require('./utils/dist.cjs')
const flatConfig = require('./utils/flatConfig.cjs')
const hexToRgb = require('./utils/hexToRgb.cjs')

fs.writeFileSync(
  `${dist}css-color-variables.css`,
  `:root {\n${Object.entries(flatConfig)
      .map(([key, value]) => `  --color-${key}: ${value};\n  --color-${key}-rgb: ${hexToRgb(value)};`)
      .join('\n')}\n}\n`,
  (err) => {
    if (err)
      throw err
  },
)
