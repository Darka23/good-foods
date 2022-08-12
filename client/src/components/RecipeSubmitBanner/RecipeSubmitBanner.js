import { Link } from "react-router-dom";

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
								<Link className="submit-recipe" to="/submit-recipe">
									submit recipe
								</Link>
							</div>
						</div>
					</div>
				</div>
				<br />
			</div>
		</div>
	);
}

export default RecipeSubmitBanner;