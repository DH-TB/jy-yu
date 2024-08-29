const color = [
    ['rgb(170 65 67)', 'rgb(248 218 201)'],
    ['#e98245', '#eaa875'],
    ['#045f32', '#5d8756'],
    ['#4380bd', '#a3bfe0'],
    ['rgb(102 141 148)', 'rgb(198 219 216)'],
    ['#a194af', '#825882'],
    ['rgb(24 37 28)', 'rgb(112 129 118)',]
]

const degs = [
    '45deg', '60deg', '80deg', '120deg', '150deg', '180deg', '220deg', '260deg', '300deg', '320deg'
]

export const randomColor = () => {
    const current = color[new Date().getDay() - 1]
    const getColor = () => current[Math.floor(Math.random() * 2)]
    const deg = degs[Math.floor(Math.random() * (degs.length))]
    return `linear-gradient(${deg}, ${getColor()} 0%, ${getColor()} 10%, ${getColor()} 100%)`
}

// 绛色
// const buttonColor = ['#d4a09b', '#d09a95', '#edcfcd', '#eabebd', '#ce9a97']
//现在的背景色
// const buttonColor = ['#db93a6', '#d37885', '#e9d7d4']

const colors = [
    '#a2b6df',
    '#6b8cce',
    '#fad0c4',
    '#ffd1ff',
    '#a18cd1',
    '#fbc2eb',
    '#ff9a9e',
    '#fecfef',
    '#a6c1ee',
    '#fdcbf1',
    '#e6dee9',
    '#a6c0fe',
    '#f68084',
    '#fccb90',
    '#d57eeb',
    '#a8edea',
    '#fed6e3',
    '#d299c2',
    '#fef9d7',
    '#ebc0fd',
    '#d9ded8',
    '#fddb92',
    '#d1fdff',
    '#ebbba7',
    '#cfc7f8',
    '#feada6',
    '#f5efef',
    '#9795f0',
    '#fbc8d4',
    '#abecd6',
    '#fbed96',
    '#d5dee7',
    '#ffafbd',
    '#c9ffbf',
    '#fff7f3',
    '#bedc40',
    '#c69df6'
]

const darkColor = [
    'rgba(221,221,221,1)',
    '#d4d4b1',
    '#DFFFCD',
    '#ffcdaa',
    '#ee897f',
    '#ff5555',
    '#e03838',
    '#c1c161',
    '#c1c161',
    '#9be15d',
    '#90F9C4',
    '#39F3BB',
    '#35eb93',
    '#00e3ae',
    '#2b76b9',
    '#2cacd1',
    '#0c3483',
    '#3D4E81',
    '#5753C9',
    '#6E7FF3',
    '#3d3393',
    'rgba(110,136,161,1)',
    'rgba(74,77,103,1)',
    'rgba(119,125,165,1)',
]
