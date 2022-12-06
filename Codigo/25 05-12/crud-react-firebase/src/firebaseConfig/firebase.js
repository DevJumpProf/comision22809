import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
apiKey: "AIzaSyDO9H8Nv7tF6DLHQBZ1y49zsMfcaCaSDMk",
authDomain: "crud-809-gaby.firebaseapp.com",
projectId: "crud-809-gaby",
storageBucket: "crud-809-gaby.appspot.com",
messagingSenderId: "671577094882",
appId: "1:671577094882:web:f84b675db3ef100459fcbb"
};

const app = initializeApp(firebaseConfig); 

export const db =getFirestore(app)

