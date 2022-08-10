import {
	getDocs,
	collection,
	addDoc,
	QuerySnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

const userRef = collection(db, 'users');


export function GetUserById() {

	return getDocs(userRef)
        .then((snapshot) => {
            let users = [];
            snapshot.docs.forEach((doc) => {
                users.push({ ...doc.data(), id: doc.id })
            })
            return users.filter(x=>x.admin==true);
        })	
}

