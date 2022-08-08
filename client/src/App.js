import { Routes, Route, Router, Redirect, Navigate } from 'react-router-dom'
import { useState } from 'react';
import { auth, useAuth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import './App.css';

import Header from './components/Header/HomeHeader';
import Preloader from './components/Preloader';
import Footer from './components/Footer/Footer';

import SubmitRecipe from './components/SubmitRecipe/SubmitRecipe';
import Home from './components/Home/Home';
import RecipeListGrid from './components/RecipeList/RecipeListGrid';
import RecipeList from './components/RecipeList/RecipeList';
import Contacts from './components/Contacts/Contacts';
import Blog from './components/Blog/Blog';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import BlogPostDetails from './components/BlogPostDetails/BlogPostDetails';
import { useEffect } from 'react'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';
import Profile from './components/Profile/Profile';
import SubmitToBlog from './components/SubmitToBlog/SubmitToBlog';
import BlogPost from './components/BlogPost/BlogPost';
import Header2 from './components/Header/Header2';
import BlogPostEdit from './components/BlogPostEdit/BlogPostEdit';
import AdminPanel from './components/AdminPanel/AdminPanel';


function App() {
	
	const [user] = useAuthState(auth);

	return (
		<>	
		<Header2/>
			<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/reset" element={<Reset />} />

				<Route path="/submit-recipe" element={<SubmitRecipe />} />
				<Route path="/recipe-listing" element={<RecipeListGrid />} />
				<Route path="/recipe-listing-grid" element={<RecipeList />} />
				<Route path="/recipe-detail/:recipeId" element={<RecipeDetails />} />

				<Route path="/blog" element={<Blog/>} />
				<Route path="/submit-to-blog" element={<SubmitToBlog/>}/>
				<Route path="/blog-post-details/:blogPostId" element={<BlogPostDetails />} />
				<Route path="/blog-post-edit/:blogPostId" element={<BlogPostEdit />} />

				<Route path="/contacts" element={<Contacts />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/admin-panel" element={<AdminPanel/>}/>
			</Routes>
		<Footer />
		</>
	);
}

export default App;
