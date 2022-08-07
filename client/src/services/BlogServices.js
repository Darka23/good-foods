
import {
	getDocs,
	collection,
	addDoc,
	deleteDoc,
	doc
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

export function DeleteBlogPost(postId){

	deleteDoc(doc(db,"blogPosts",postId));
}

export function EditBlogPost(){
	
}
