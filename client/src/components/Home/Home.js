import HotRecipes from '../../components/HotRecipes/HotRecipes';
import MainSlider from '../../components/MainSlider/MainSlider';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeSubmitBanner from '../../components/RecipeSubmitBanner/RecipeSubmitBanner';
import Post from '../../components/Post/Post';
import HomeHeader from '../../components/Header/HomeHeader'

const Home = () => {
    return (
        <>
            <HomeHeader/>
            {/* <MainSlider/> */}
            <SearchBar />
            <HotRecipes />
            <Post />
            <RecipeSubmitBanner />
        </>
    );
}

export default Home;