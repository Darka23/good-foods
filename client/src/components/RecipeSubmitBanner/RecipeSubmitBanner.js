const RecipeSubmitBanner = () => {
	return (
		<div className="recipe-submit-banner">
			<div className="container">
				<div className="recipe-banner">
					<div className="row">
						<div className="col-md-9">
							<div className="banner-text">
								<h2>Are you a Chef or just a food lover? We encourage you to submit your recipe...</h2>
							</div>
						</div>
						<div className="col-md-3">
							<div className="recipe-button">
								<a className="submit-recipe" href="/submit-recipe.html">
									submit recipe
								</a>
							</div>
						</div>
					</div>
				</div>
<br/>
			</div>
		</div>
	);
}

export default RecipeSubmitBanner;