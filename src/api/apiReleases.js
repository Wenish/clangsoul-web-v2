  
import firebase from 'firebase'
const firestore = firebase.firestore()

export default {
    getReleases() {
        return new Promise((resolve, reject) => {
            let obj = {}
            firestore.collection("releases").get().then((querySnapshot) => {
                console.log(querySnapshot)
                querySnapshot.forEach((doc) => {
                    var releaseId = doc.id
                    var release = doc.data()
                    obj[releaseId] = release
                });
                console.log(obj)
                resolve(obj);
            });
        })
    }
}