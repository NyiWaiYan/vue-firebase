import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAxsdxz7U3pK7lVmMixetbBuMxPVjnjIoo",
  authDomain: "vue-vlog-d0f21.firebaseapp.com",
  projectId: "vue-vlog-d0f21",
  storageBucket: "vue-vlog-d0f21.appspot.com",
  messagingSenderId: "223254354767",
  appId: "1:223254354767:web:28a3547f96743a8e3fc33a",
  measurementId: "G-KKW8GPYYY6"
};


firebase.initializeApp(firebaseConfig);

let db=firebase.firestore();

export {db};




