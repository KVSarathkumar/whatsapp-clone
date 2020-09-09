import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC8R5nL1TS3bYfqDbB1fhlOz5rD4GMvUXk",
    authDomain: "whats-app-clone-9e85c.firebaseapp.com",
    databaseURL: "https://whats-app-clone-9e85c.firebaseio.com",
    projectId: "whats-app-clone-9e85c",
    storageBucket: "whats-app-clone-9e85c.appspot.com",
    messagingSenderId: "265430111870",
    appId: "1:265430111870:web:aee60579564ee20d83ea2f",
    measurementId: "G-V04ZP2GH7L"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;