const path = require('path')
const Jasmine = require('jasmine')

const jasmine = new Jasmine({ projectBaseDir: path.resolve(), color: false })
jasmine.exitOnCompletion = false
jasmine.loadConfigFile(path.join(path.resolve(), 'spec', 'support', 'jasmine.json'))

process.stdout.write = function (output) {
  console.log(output)
}

jasmine.execute()
