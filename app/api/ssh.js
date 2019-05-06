import SSHClient from 'react-native-ssh-sftp'
import SSH from 'react-native-ssh'


let config = {user: 'root', host: '192.168.1.1', password: '1989'}
let command = 'ls -l ~'

let sshClient
const sshConnect = () => {
    // alert('aa')

    

    

    

    return new Promise((resolve, reject) => {
        resolve('Connected')
        
    })
    
    // return new Promise((resolve, reject) => {
    //     sshClient = new SSHClient('192.168.1.1', 22, 'root', '1989', (error) => {
    //         if(error){ 
    //             reject(error)
    //         }
    //         resolve('Connected')
    //     });
    // })
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
        // let monsc = "chat -V -t 5 'ABORT' 'ERROR' 'ABORT' 'NO CARRIER' '' 'AT\\^MONSC' 'OK' > /dev/ttyUSB0 < /dev/ttyUSB0"
        // monsc = 'ls'
        // sshClient.execute('ls', (error, output) => {
        //     alert(JSON.stringify(output));
        //     if(error){ 
        //         reject(error)
        //     }
        //     resolve(output)
        // });
        // client.on('Shell', (event) => {
        //     alert(event);
        // });
        SSH.execute(config, command).then(
            result => {
                alert(result)
                resolve(result)
            },
            error => {
                reject(error)
            }
        );
    })
}

export default {
    sshConnect,
    connectModem,
    getInfo
}