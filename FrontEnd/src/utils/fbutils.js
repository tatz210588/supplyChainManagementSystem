import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes,getDownloadURL} from "firebase/storage";
import { db } from "../config/fbconfig";
import { v4 as uuidv4 } from "uuid";
export const getData = async () => {
  const docRef = doc(db, "Vendor", "C0Uv0fnFq9ERcRLkzH9p");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
// save vendor data to firestore
export const saveData = async (data, collectionName) => {
  // console.log(data);
  const docRef = doc(db, collectionName, uuidv4());
  await setDoc(docRef, data);
  console.log("Document written with ID: ", docRef.id);
};
// save pdf to firebase storage
// export const savePdf = async (file, collectionName) => {
//   const storage = getStorage();
//   const storageRef = ref(storage, `${collectionName}/${file.name}`);
//   await setDoc(storageRef, file);
//   console.log("Document written with ID: ", storageRef.id);
//   return storageRef;
// }
export const savePdf = async (file, collectionName) => {
  const storage = getStorage();
  // unique file name
  const uniqueFileName = uuidv4();
  // const storageRef = ref(storage, `${collectionName}/${uniqueFileName}`);
  const storageRef = ref(storage, `${collectionName}/${uniqueFileName}`);

  try {
    await uploadBytes(storageRef, file);
    console.log("PDF uploaded successfully!");
    
    const downloadURL = await getDownloadURL(storageRef);
    console.log("PDF download URL:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading PDF: ", error);
    return null;
  }
};
export const getFileDownloadURL = async (storagePath) => {
  const storage = getStorage();
  const fileRef = ref(storage, storagePath);

  try {
    const downloadURL = await getDownloadURL(fileRef);
    console.log("PDF download URL:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error retrieving download URL: ", error);
    return null;
  }
};
// get collection data
export const getCollectionData = async (collectionName) => {
  // console.log("here", collectionName);
  const querySnapshot = await getDocs(collection(db, collectionName));
  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data());
    // console.log(doc.id, " => ", doc.data());
  });
  return data;
};
// get collection Data along with id
export const getCollectionDataWithId = async (collectionName) => {
  // console.log("here", collectionName);
  const querySnapshot = await getDocs(collection(db, collectionName));
  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push({ ...doc.data(), id: doc.id });
    // console.log(doc.id, " => ", doc.data());
  });
  return data;
}
// update collection data
export const updateCollectionData = async (collectionName, id, data) => {
  const docRef = doc(db, collectionName, id);
  await setDoc(docRef, data);
  console.log("Document written with ID: ", docRef.id);
}

export const formatBigNumber = (bigNumber) => {
  return (Number(bigNumber) / Math.pow(10, 18)) * 10 ** 18
}
