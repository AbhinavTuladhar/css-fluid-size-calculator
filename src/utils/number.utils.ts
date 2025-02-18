export const formatNumber = (num: number) => {
  if (Number.isInteger(num)) {
    return num.toString()
  } else {
    return num.toFixed(2)
  }
}
