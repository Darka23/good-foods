const RecipeSubmitBanner = () => {
    return ( 
        <div className="recipe-submit-banner">
  <div className="container">
    <div className="recipe-banner">
      
      <div className="row">
        <div className="col-md-9">
          <div className="banner-text">
            <h2>Are you a Chef or just a food lover? We encourage you to submit your recipe...</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod invidunt ut labore et dolore
            </p> */}
          </div>
        </div>
        <div className="col-md-3">
          <div className="recipe-button">
            <a className="submit-recipe" href="/">
              submit recipe
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

     );
}
 
export default RecipeSubmitBanner;