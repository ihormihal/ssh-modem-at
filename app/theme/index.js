import v from './variables'


fontSize = {}
fontColor = {}
color = {}

for(let s in v.fontSize){
    fontSize[s] = { fontSize: v.fontSize[s] }
}

for(let c in v.colors){
    fontColor[c] = { color: v.colors[c] }
    color[c] = { backgroundColor: v.colors[c] }
}

export default {
    container: {
        flex: 1
    },
    grid: {
        row: { flexDirection: 'row' },
        column: { flexDirection: 'column' },
        default: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        },
        center: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
    color,
    fontColor,
    fontSize,
    align: {
        center: {
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
    textAlign: {
        left: { textAlign: 'left' },
        center: { textAlign: 'center' },
        right: { textAlign: 'right' }
    },
    button: {
        md: {
            padding: 8
        }
    }
}