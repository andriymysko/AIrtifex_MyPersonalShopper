// 1. Importem des de les URL web (CDN) perquè funcioni al navegador
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, update, onValue, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 2. La teva configuració (He deixat les teves dades)
const firebaseConfig = {
  apiKey: "AIzaSyDdoMkKklx7xDoxuPtu2v32SUXkSUuYupM",
  authDomain: "mypersonalshopper-mvp.firebaseapp.com",
  databaseURL: "https://mypersonalshopper-mvp-default-rtdb.firebaseio.com",
  projectId: "mypersonalshopper-mvp",
  storageBucket: "mypersonalshopper-mvp.firebasestorage.app",
  messagingSenderId: "570193891904",
  appId: "1:570193891904:web:d1298cccd5fc659bcfc5a5",
  measurementId: "G-B261YX38TX"
};

// 3. Inicialitzem Firebase
const app = initializeApp(firebaseConfig);

// 4. IMPORTANT: Inicialitzem la Base de Dades (això faltava)
const db = getDatabase(app);

// 5. Exportem la 'db' i les funcions perquè els altres fitxers les trobin
export { db, ref, set, get, update, onValue, child };