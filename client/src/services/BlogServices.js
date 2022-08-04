import { Navigate } from "react-router-dom";

import {
	getDocs,
	collection,
	addDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const blogRef = collection(db, 'blogPosts');
const userRef = collection(db, 'users');


export function GetBlogPosts() {

	return getDocs(blogRef)
		.then((snapshot) => {
			let posts = [];
			snapshot.docs.forEach((doc) => {
				posts.push({ ...doc.data(), id: doc.id })
			})
			return posts;
		})

}

export function CreateBlogPost(title, description, imageUrl, userId,username,date) {

	addDoc(blogRef, {
		title,
		description,
		imageUrl,
		userId,
		username,
		date,
		comments: [],
	});
}
