import {collection } from 'firebase/firestore '
import { db } from './firebaseConfig'

export const CollectionRef = collection(db, 'projectList')