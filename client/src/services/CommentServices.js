
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from 'uuid';

export async function AddCommentToPost(name, email, subject, message, postId) {

    let date = new Date().toLocaleDateString("en-GB");
    const id = uuidv4();
    
    const postRef = doc(db,"blogPosts", postId)
    
    let comment = {
        name,
        email,
        subject,
        message,
        id,
        date
    }

    await updateDoc(postRef,{
        comments: arrayUnion(comment),
    });

    return comment;
}