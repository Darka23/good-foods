
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from 'uuid';

export async function AddCommentToPost(name, email, subject, message, postId,userPhotoURL,userId) {

    let date = new Date().toLocaleDateString("en-GB");
    const id = uuidv4();
    
    const postRef = doc(db,"blogPosts", postId)
    
    let comment = {
        name,
        email,
        subject,
        message,
        id,
        date,
        userPhotoURL,
        userId
    }

    await updateDoc(postRef,{
        comments: arrayUnion(comment),
    });

    return comment;
}

export async function DeleteComment({...comment},postId){

    const postRef = doc(db,"blogPosts", postId);

    await updateDoc(postRef,{
        comments: arrayRemove(comment)
    });

    console.log(comment.id);
    document.getElementById(comment.id).style.display = "none";

}

export async function AddCommentToRecipe(name, email, message, recipeId, userPhotoURL, userId){

    let date = new Date().toLocaleDateString("en-GB");
    const id = uuidv4();
    
    const recipeRef = doc(db,"recipes", recipeId)
    
    let comment = {
        name,
        email,
        message,
        id,
        date,
        userPhotoURL,
        userId
    }

    await updateDoc(recipeRef,{
        comments: arrayUnion(comment),
    });

    return comment;
}

export async function DeleteRecipeComment({...comment},recipeId){

    const recipeRef = doc(db,"recipes", recipeId);

    await updateDoc(recipeRef,{
        comments: arrayRemove(comment)
    });

    document.getElementById(comment.id).style.display = "none";

}