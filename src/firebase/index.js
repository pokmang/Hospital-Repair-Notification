import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import config from './config';

try {
    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}

export const uploadFile = async (file) => {
    return new Promise((resolve, reject) => {
        const arrName = file.name.split('.')
        const ext = arrName.pop();
        const name = arrName.join('.');
        const filename = name + "_" + new Date().toISOString() + "." + ext
        const task = firebase.storage().ref(filename).put(file)
        task.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
            
        }, (error) => {
            reject(error)
        }, async () => {
            const url = await task.snapshot.ref.getDownloadURL();
            resolve(url);
        })
    })
}

export const deleteFile = (ref) => {
    return firebase.storage().ref(ref).delete();
}

export default firebase;