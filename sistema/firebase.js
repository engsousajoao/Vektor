import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
    getAuth 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {

  apiKey: "AIzaSyDqWEqGcJN0GLW40048tIRqrN5Xb8KyS8Q",

  authDomain: "vektor-erp.firebaseapp.com",

  projectId: "vektor-erp",

  storageBucket: "vektor-erp.firebasestorage.app",

  messagingSenderId: "789561244129",

  appId: "1:789561244129:web:4f447018ed23f5f179faa0"

};


// Inicializa Firebase

const app = initializeApp(firebaseConfig);


// Inicializa autenticação

export const auth = getAuth(app);
