import firebase from "firebase/app";
import "firebase/firestore"

export const firebaseConfig = {
    apiKey: "AIzaSyCySTRryhBCESWdhqXOYye3jD9JGhemyMo",
    authDomain: "notes-react-b4692.firebaseapp.com",
    projectId: "notes-react-b4692",
    storageBucket: "notes-react-b4692.appspot.com",
    messagingSenderId: "984090101847",
    appId: "1:984090101847:web:22e9687454c3a41f4cbb12",
    measurementId: "G-L8BQ572DZN"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
