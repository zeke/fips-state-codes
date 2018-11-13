const fs = require('fs')
const path = require('path')
const infile = path.join(__dirname, 'national_county.txt')
const outfile = path.join(__dirname, 'index.json')

const codes = fs.readFileSync(infile, 'utf8')
  .split('\n')
  .reduce((acc, line) => {
    const [state, code] = line.split(',')
    if (code && state) acc[code] = state
    return acc
  }, {})

fs.writeFileSync(outfile, JSON.stringify(codes, null, 2))