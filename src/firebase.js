import firebase from 'firebase'

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyBucBl_AvPUXUN93y3GGY9uw9zLNa9LAFg",
    authDomain: "spacesharep2p.firebaseapp.com",
    databaseURL: "https://spacesharep2p.firebaseio.com",
    projectId: "spacesharep2p",
    storageBucket: "spacesharep2p.appspot.com",
    messagingSenderId: "47142673163",
    appId: "1:47142673163:web:9232512798e6ff95a2600e",
    measurementId: "G-MFJ0XTYS28"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  //  firebase.analytics();

  export default firebase;