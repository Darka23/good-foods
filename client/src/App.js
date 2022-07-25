import {Routes, Route} from 'react-router-dom'

import './App.css';

import Header from './components/Header/HomeHeader';
import Preloader from './components/Preloader';
import Footer from './components/Footer/Footer';

import SubmitRecipe from './components/SubmitRecipe/SubmitRecipe';
import Home from './components/Home/Home';
import RecipeListGrid from './components/RecipeList/RecipeListGrid';
import RecipeList from './components/RecipeList/RecipeList';

function App() {
	return (
		<>
			{/* <Preloader/>	 */}
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/submit-recipe.html" element={<SubmitRecipe/>}/>
				<Route path="/recipe-listing.html" element={<RecipeListGrid/>}/>
				<Route path="/recipe-listing-grid.html" element={<RecipeList/>}/>
			</Routes>	

			<Footer/>		
		</>
	);
}

export default App;
