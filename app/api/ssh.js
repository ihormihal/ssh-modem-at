
const connectModem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000 )
    })
}

const getInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sdadf')
        }, 2000 )
    })
}

export default {
    connectModem,
    getInfo
}