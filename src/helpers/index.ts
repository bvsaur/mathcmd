import fs from 'fs'
import colors from 'colors'

export const generateTable = (base: number, list: boolean): string => {
  let output = ''

  for (let i = 1; i <= 12; i++) {
    output += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
  }

  if (list) {
    console.log(colors.green('==================='))
    console.log(colors.blue(`Table # ${base}`))
    console.log(colors.green('==================='))
    console.log(output)
  }

  return output
}

export const createFile = (base: number, table: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(`files/table-${base}.txt`, table)
      resolve(`File table-${base}.txt created!`)
    } catch (error) {
      reject(error)
    }
  })
}
