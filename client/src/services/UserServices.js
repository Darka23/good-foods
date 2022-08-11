import {
	getDocs,
	collection,
    deleteDoc,
    doc
} from "firebase/firestore";

import { db } from "../firebase";

const userRef = collection(db, 'users');

export function GetAdminUser() {

	return getDocs(userRef)
        .then((snapshot) => {
            let users = [];
            snapshot.docs.forEach((doc) => {
                users.push({ ...doc.data(), id: doc.id })
            })
            return users.filter(x=>x.admin==true);
        })	
}

export function GetAllUsers() {

	return getDocs(userRef)
        .then((snapshot) => {
            let users = [];
            snapshot.docs.forEach((doc) => {
                users.push({ ...doc.data(), id: doc.id })
            })
            return users;
        })	
}

export function DeleteUser(userId) {
    deleteDoc(doc(db, "users", userId));
}