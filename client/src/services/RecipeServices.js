import {
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore";

import { db } from "../firebase";

const recipeRef = collection(db, 'recipes');

export function CreateRecipe(
    title,
    description,
    contents,
    preparation,
    imageUrl,
    preparationTime,
    cookTime,
    dishType,
    userId,
    userDisplayName,
    userPhotoUrl,
    date) {


    addDoc(recipeRef, {
        title,
        description,
        contents,
        preparation,
        imageUrl,
        preparationTime,
        cookTime,
        dishType,
        userId,
        userDisplayName,
        userPhotoUrl,
        date,
        comments:[],
    })
}

export function GetAllRecipes(){

    return getDocs(recipeRef)
		.then((snapshot) => {
			let recipes = [];
			snapshot.docs.forEach((doc) => {
				recipes.push({ ...doc.data(), id: doc.id })
			})
			return recipes;
		})
}

