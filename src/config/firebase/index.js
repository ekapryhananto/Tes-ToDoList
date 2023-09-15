import {initializeApp} from '@react-native-firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
} from '@react-native-firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBJAHP1t6Le6W6APILFtLTTCGIC_mkM3jU',
  authDomain: 'tes-iptpls.firebaseapp.com',
  projectId: 'tes-iptpls',
  storageBucket: 'tes-iptpls.appspot.com',
  messagingSenderId: '112323043915',
  appId: '1:112323043915:web:002d62f71f1a1e9e4a63ce',
};

initializeApp(firebaseConfig);

const db = getFirestore();
