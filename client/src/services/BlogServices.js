
import {
	getDocs,
	collection,
	addDoc,
	deleteDoc,
	doc,
	updateDoc
} from "firebase/firestore";

import { db } from "../firebase";

const blogRef = collection(db, 'blogPosts');

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

export function CreateBlogPost(title, description, imageUrl, userId, username, date, photoURL) {

	addDoc(blogRef, {
		title,
		description,
		imageUrl,
		userId,
		username,
		date,
		photoURL,
		comments: [],
	});
}

export function DeleteBlogPost(postId) {

	deleteDoc(doc(db, "blogPosts", postId));
}

export function EditBlogPost(blogPostId, newTitle, newDescription, newImageUrl) {

	const postRef = doc(db, "blogPosts", blogPostId);

	updateDoc(postRef, {
		title: newTitle,
		description: newDescription,
		imageUrl: newImageUrl,
	});
}
