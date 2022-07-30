const Post = () => {
	return (
		<section className="good-food">
			<div className="container">
				<div className="good-food-box">
					<div className="text-side">
						<div className="good-food-intro">
							<span className="heading-small">Its all about</span>
							<h2>Good Food &amp; Taste</h2>
							<span className="emphasis">
								People who love to eat are always the best people
							</span>
							<ul className="good-food-list">
								<li>
									<span>
										<img src="images/burger-icon.png" alt="icon" />
									</span>
									<p>Find new recipes</p>
								</li>
								<li>
									<span>
										<img src="images/grapes-icon.png" alt="icon" />
									</span>
									<p>Read news from the food world</p>
								</li>
								<li>
									<span>
										<img src="images/salt-pot-icon.png" alt="icon" />
									</span>
									<p>Communicate with other food lovers</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="image-side animated wow zoomIn">
						<div className="good-food-image">
							<img src="images/temp-images/good-food.jpg" alt="image" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Post;