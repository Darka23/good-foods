import { Routes, Route, Router, Redirect, Navigate } from 'react-router-dom'
import { useState } from 'react';

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
import { auth, useAuth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SubmitToBlog from './components/SubmitToBlog/SubmitToBlog';

function App() {

	return (
		<>
		<Preloader/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/reset" element={<Reset />} />
				<Route path="/submit-recipe" element={<SubmitRecipe />} />
				<Route path="/recipe-listing" element={<RecipeListGrid />} />
				<Route path="/recipe-listing-grid" element={<RecipeList />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/recipe-detail" element={<RecipeDetails />} />
				<Route path="/blog-post-details" element={<BlogPostDetails />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/submit-to-blog" element={<SubmitToBlog/>}/>
			</Routes>

			<Footer />
		</>
	);
}

export default App;
