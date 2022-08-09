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
        comments: [],
    })
}

export function GetAllRecipes() {

    return getDocs(recipeRef)
        .then((snapshot) => {
            let recipes = [];
            snapshot.docs.forEach((doc) => {
                recipes.push({ ...doc.data(), id: doc.id })
            })
            return recipes;
        })
}

export function DeleteRecipe(recipeId) {
    deleteDoc(doc(db, "recipes", recipeId));
}

export function EditRecipe(recipeId, newTitle, newDescription, newContents, newPreparation, newImageUrl, newPreparationTime, newCookTime, newDishType) {

    const recipeRef = doc(db, "recipes", recipeId);

    updateDoc(recipeRef, {
        title: newTitle,
        description: newDescription,
        imageUrl: newImageUrl,
        contents: newContents,
        preparation: newPreparation,
        preparationTime: newPreparationTime,
        cookTime: newCookTime,
        dishType: newDishType
    });
}
