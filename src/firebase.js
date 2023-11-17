// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc,collection,getDocs,
  onSnapshot,query,where
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRt4QcohrRIdlU6EsuZULihN5XD6BiW48",
  authDomain: "ntuaflix-35034.firebaseapp.com",
  projectId: "ntuaflix-35034",
  storageBucket: "ntuaflix-35034.appspot.com",
  messagingSenderId: "729664281092",
  appId: "1:729664281092:web:7f13c8313972249c107351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firestore is the DB variable
const firestore = getFirestore(app);
// collection ref
const colRef = collection (firestore,'Basics'); // set the table you want
//queries 
//OrderBy();
const q = query(colRef, where("genres", "==", "Comedy"))
//Real time collection data
// Can add/delete/update data in real time
onSnapshot(q,(snapshot)=>{ // if whole table is needed just pass in colRef
let basics = []
snapshot.docs.forEach((doc)=>{
  basics.push({...doc.data(),id: doc.id})
})
//console.log(basics)
})
//Gycio testai

//Gycio testai ^

//one time running data base
// //Get Data from colRef
// getDocs(colRef)
// .then((snapshot) =>{
// let basics = []
// snapshot.docs.forEach((doc)=>{
//   basics.push({...doc.data(),id: doc.id})
// })
// console.log(basics) //[x]._document.data.value.mapValue.fields
// })
// .catch(err=>{
//   console.log(err.message)
// })






// chat GPT stuff :
const fetchData = async (documentId) => {
  try {
    // Reference to the 'basics' collection and the specific document
    const basicsDocumentRef = doc(collection(firestore, 'Basics'), documentId);

    // Get the document data
    const documentSnapshot = await getDoc(basicsDocumentRef);

    // Check if the document exists
    if (documentSnapshot.exists()) {
      // Access the data of the document
      const documentData = documentSnapshot.data();

      // Log the collection name and document ID
     // console.log('Collection:', 'basics');
      //console.log('Document ID:', documentId);
      
      // Access the value of the 'yourFirstColumnName' field
      const firstColumnData = documentData;

      // Log or use the data as needed
      //console.log('Table:', firstColumnData);
      return firstColumnData;
    } else {
      console.log(`Document with ID ${documentId} does not exist in the "basics" collection.`);
    }
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
  }
};
export { firestore, fetchData , colRef};

// Call the fetchData function with the specific document ID
//fetchData('tt0000929');



