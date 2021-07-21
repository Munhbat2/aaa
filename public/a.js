const upload = () => {
    let user = firebase.auth().currentUser;
    if (user) {
        let inp = document.getElementById("file");
        let file = inp.files[0];
        let storageRef = storage.ref();
        // console.log(fiel)
        let fileRef = storageRef.child(userPhotos/${file.name});
        fileRef.put(file).then((snapshot) => {
            console.log("Uploaded a blob or file!");
            
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                db.collection(users/${user.uid}/photos).add({
                    photoUrl: downloadURL
                })
            });
        });
    }
};