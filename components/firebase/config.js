import firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCMthFXnRYDujHBxLFVTNUtZmt8OPLXn_w',
  authDomain: 'groaning-yogurt.firebaseapp.com',
  projectId: 'groaning-yogurt',
  storageBucket: 'groaning-yogurt.appspot.com',
  messagingSenderId: '444684741896',
  appId: '1:444684741896:web:22bf8aa5c409c913d7d0bd',
  measurementId: 'G-198851TR06',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export { firebase };
