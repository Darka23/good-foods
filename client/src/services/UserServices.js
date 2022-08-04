import {
	getDocs,
	collection,
	addDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const userRef = collection(db, 'users');

// export function GetUserById() {

// 	 return getDocs(userRef)
// 		.then((snapshot) => {
// 			return snapshot.docs[0]._document.data.value.mapValue.fields.uid.stringValue;
// 			// return snapshot.docs.find(user => user.uid == userId)
// 		})
// }