import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const argv = yargs(hideBin(process.argv))
  .options({
    b: {
      alias: 'base',
      type: 'number',
      default: 5,
      describe: 'This is the base of the generated table.',
    },
    l: {
      alias: 'list',
      type: 'boolean',
      default: false,
      describe: 'Use this flag to print the table in console.',
    },
    t: {
      alias: 'to',
      type: 'number',
      default: 10,
      describe: 'The table will be generated up to this point.',
    },
  })
  .check((argv) => {
    if (!Number.isInteger(argv.b)) throw 'Base must be an integer number.'
    if (!Number.isInteger(argv.t)) throw 'To must be an integer number.'
    return true
  }).argv
