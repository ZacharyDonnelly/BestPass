'use strict'

module.exports = {
  '**/view/**/*.{js,ts,tsx}': ['yarn lint:prettier', 'yarn lint:eslint'],
  '**/*.{css,scss}': ['yarn lint:stylelint']
}
