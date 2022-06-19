'use strict'

module.exports = {
  'view/**/*.{js,ts,tsx}': ['yarn lint:prettier', 'yarn lint:eslint'],
  './*.{js,ts,tsx}': ['yarn lint:prettier', 'yarn lint:eslint']
}
