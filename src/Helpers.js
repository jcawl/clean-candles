export const highLow = (data) => {
  if (data[0] > data[3]) {
    return data[0]
  } else {
    return data[3]
  }
}

export const barHeightHelper = (data) => {
  if (data[0] > data[3]) {
    return data[0] - data[3]
  } else {
    return data[3] - data[0]
  }
}

export const bodyHeight = (change, height, currentZoom, low, high) => {
  if (currentZoom) {
    return (height / (high - low)) * change * currentZoom.k
  } else {
    return (height / (high - low)) * change
  }
}

export const bodyWidth = (currentZoom, width, totalNumber) => {
  if (currentZoom) {
    return (width / (totalNumber * 2)) * currentZoom.k
  } else {
    return width / (totalNumber * 2)
  }
}

export const wickWidth = (currentZoom, width, totalNumber) => {
  if (currentZoom) {
    return (width / (totalNumber * 10)) * currentZoom.k
  } else {
    return width / (totalNumber * 10)
  }
}

export const bodyColor = (o, c, width, num, currentZoom) => {
  let translate = width / (num * 4)

  if (currentZoom) {
    translate = translate * currentZoom.k
  }
  if (o < c) {
    return (
      'outline: thin solid #B3ED93; transform: translateX(-' + translate + 'px)'
    )
  } else {
    return (
      'outline: thin solid #ED9393; transform: translateX(-' + translate + 'px)'
    )
  }
}

export const wickColor = (o, c) => {
  if (o < c) {
    return '#B3ED93'
  } else {
    return '#ED9393'
  }
}
