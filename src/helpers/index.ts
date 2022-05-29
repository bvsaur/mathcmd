import fs from 'fs'
import colors from 'colors'

export const generateTable = (
  base: number,
  to: number,
  list: boolean
): string => {
  let output = ''

  for (let i = 1; i <= to; i++) {
    output += `${base} x ${i} = ${base * i}\n`
  }

  if (list) {
    console.log(colors.green('==================='))
    console.log(colors.blue(`Table # ${base}`))
    console.log(colors.green('===================\n'))
    console.log(output.split('x').join('x'.green).split('=').join('='.green))
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
