console.error('start of module')
const branchSwitch = process.env.BRANCH_SWITCH
export const x = () => {
  console.error('start of function')
  let x: number = 0
  if (branchSwitch !== undefined) {
    console.error('branch 1')
    x = Number(branchSwitch)
  } else {
    console.error('branch 2')
  }
  console.error('end of function')
  return x
}
console.error('end of module')
