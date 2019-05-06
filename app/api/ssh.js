import SSHClient from 'react-native-ssh-sftp'

const sshConnect = () => {
    let client = new SSHClient('192.168.2.73', 22, 'wildfly', 'wildfly', (error) => {
        if(error){ 
            return alert('Not connected!')
        }
        alert('Connected')
    });
}


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
    sshConnect,
    connectModem,
    getInfo
}