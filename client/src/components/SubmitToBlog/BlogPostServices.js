import { Navigate } from "react-router-dom";

import {
	getDocs,
	collection,
	addDoc,
} from "firebase/firestore";

import { db } from "../../firebase";

const blogRef = collection(db, 'blogPosts');

export function getBlogPosts() {
    getDocs(blogRef)
	.then((snapshot) => {
        let posts = [];
		snapshot.docs.forEach((doc) => {
            posts.push({ ...doc.data(), id: doc.id })
		})
	})
}

export function CreateBlogPost(title, description, userId) {

	addDoc(blogRef, {
		title,
		description,
		userId,
		comments: [],
	});
}