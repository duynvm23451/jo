const nextElementInList = (list: string[], value: string) => {
  const currentActionIndex = list.indexOf(value)
  const nextActionIndex = (currentActionIndex + 1) % list.length
  return list[nextActionIndex]
}

export default nextElementInList
