// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import data from '../../data/data_products.json' assert {type: 'json'}


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4aoG39vZF5x5NktdcCYcIGscRX79k0sU",
  authDomain: "mcdonallds-app.firebaseapp.com",
  projectId: "mcdonallds-app",
  storageBucket: "mcdonallds-app.appspot.com",
  messagingSenderId: "244415454410",
  appId: "1:244415454410:web:4f8a60cf2d764b9f436833"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );

export const db = getFirestore( app )

/* const productoRef = collection(db, 'productos')

data.forEach(item => {

    delete item.id

    addDoc(productoRef, item) 
}) */