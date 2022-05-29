import { createFile, generateTable } from './helpers'
import { argv } from './libs'

const main = async () => {
  console.clear()
  const { b, l } = await argv

  const tableString = generateTable(b, l)
  const response = await createFile(b, tableString)
  console.log(response.rainbow)
}

main()
