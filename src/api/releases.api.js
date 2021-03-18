  
import firebase from 'firebase'
const firestore = firebase.firestore()

export default {
    get() {
        return new Promise((resolve, reject) => {
            let obj = {}
            firestore.collection("releases").get().then((querySnapshot) => {
                console.log(querySnapshot)
                querySnapshot.forEach((doc) => {
                    const releaseId = doc.id
                    const release = doc.data()
                    obj[releaseId] = release
                });
                resolve(obj);
            });
        })
    }
}