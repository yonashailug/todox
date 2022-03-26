import {
  apiKey,
  appId,
  authDomain,
  projectId,
  storageBucket,
  measurementId,
  messagingSenderId,
  databaseURL,
} from '../environment/environment'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
  databaseURL
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function getTasks() {
  const tasksCol = collection(db, 'tasks')
  const snapshot = await getDocs(tasksCol)
  const taskList = snapshot.docs.map((doc) => {
    //   console.log(doc)
      return { id: doc.id, ...doc.data() }
    })

  return taskList
}

export {
    getTasks
}
