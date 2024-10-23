// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfTJxRHNitrt4NDa-8gyqMPN0bCZnDG0U",
  authDomain: "basedatos-prueba-fd1ea.firebaseapp.com",
  projectId: "basedatos-prueba-fd1ea",
  storageBucket: "basedatos-prueba-fd1ea.appspot.com",
  messagingSenderId: "810566598790",
  appId: "1:810566598790:web:90b3cef74f702e854f1107",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//obtener un producto
export async function getSingleProduct(id) {
  const documentRef = doc(db, "Inventario", id);

  try {
    const snapshot = await getDoc(documentRef);
    console.log(snapshot);
    console.log(id);
    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      console.log("El documento no existe!");
    }
  } catch (error) {
    console.error("Error al obtener el documento: ", error);
  }
}

//obtener toda una coleccion
export async function getInventario() {
  try {
    const querySnapshot = await getDocs(collection(db, "Inventario"));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          // Transformacion para que este correcto con la base de datos, minusculas con mayusculas
          nombre: docu.data().Nombre,
          precio: docu.data().Precio,
          color: docu.data().Color,
          imagen: docu.data().Foto,
        };
      });
      return productsList;
    } else {
      console.log("Coleccion vacía !");
    }
  } catch (error) {
    console.error("Error al obtener la coleccion: ", error);
  }
}
