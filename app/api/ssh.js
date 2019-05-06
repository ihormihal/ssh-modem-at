import SSHClient from 'react-native-ssh-sftp'

let sshClient
const sshConnect = () => {
    // alert('aa')
    
    return new Promise((resolve, reject) => {
        sshClient = new SSHClient('192.168.2.73', 22, 'user', '!Qwerty', (error) => {
            if(error){ 
                reject(error)
            }
            resolve('Connected')
        });
    })
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
        // setTimeout(() => {
        //     resolve('sdadf')
        // }, 2000 )
        //'echo "AT^MONSC" > /dev/ttyUSB0'
        sshClient.execute('ls', (error, output) => {
            if(error){ 
                reject(error)
            }
            resolve(output)
          });
    })
}

export default {
    sshConnect,
    connectModem,
    getInfo
}