import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDw8hPiO_rtRYJrdRn9CMfV84zKaCtTK2o",
  authDomain: "story-af552.firebaseapp.com",
  databaseURL: "https://story-af552.firebaseio.com",
  projectId: "story-af552",
  storageBucket: "story-af552.appspot.com",
  messagingSenderId: "868188287847",
  appId: "1:868188287847:web:3cbedaee4aafbc9ce835c2"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   