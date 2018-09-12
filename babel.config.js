module.exports = {
  presets: [
    '@babel/env',
    '@babel/react'
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-export-namespace-from',
    '@babel/proposal-function-sent',
    '@babel/proposal-json-strings',
    '@babel/proposal-numeric-separator',
    '@babel/proposal-throw-expressions',
    '@babel/syntax-dynamic-import',
    '@babel/syntax-import-meta',
  ],
  env: {
    'styled-components': {
      plugins: [
        [ 'transform-rename-import', {
          replacements: [
            { original: 'react-emotion', replacement: 'styled-components' },
            { original: 'emotion', replacement: 'styled-components' },
            { original: 'emotion-theming', replacement: 'styled-components' },
          ]
        } ]
      ]
    }
  }
}