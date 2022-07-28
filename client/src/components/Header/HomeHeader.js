import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
				<div className="header header-main fadeIn">
					<div className="container">
						<div className="row">
							<div className="col-lg-2">
								<div className="logo-wrapper">
									<Link to="/">
										<img src="images/logo.png" alt="logo" />
									</Link>
								</div>
							</div>
							<div className="col-lg-10">
								<div className="outer-nav">
									<div className="wrapper-links">
										<span className="sign-in-buttons">
											<Link className="login" to="#">
												Login
											</Link>
											<Link className="register" to="#">
												Register
											</Link>
										</span>
									</div>
									<div className="wrapper-main-nav ">
										<nav className="nav-collapse responsive-menu">
											<ul className="main-menu">
												<li>
													<Link to="/">Home</Link>
													<ul>
														<li>
															<Link to="variation1.html">variation one</Link>
														</li>
														<li>
															<Link to="variation2.html">variation two</Link>
														</li>
														<li>
															<Link to="variation3.html">variation three</Link>
														</li>
														<li>
															<Link to="variation4.html">variation four</Link>
														</li>
														<li>
															<Link to="variation5.html">variation five</Link>
														</li>
														<li>
															<Link to="variation6.html">variation six</Link>
														</li>
													</ul>
												</li>
												<li>
													<Link to="recipe-listing.html">Recent Recipes</Link>
													<ul>
														<li>
															<Link to="recipe-listing.html">
																recipe listing list view
															</Link>
														</li>
														<li>
															<Link to="recipe-listing-grid.html">
																recipe listing grid view
															</Link>
														</li>
													</ul>
												</li>
												<li>
													<Link to="/recipe-detail.html">Recipe Detail</Link>
													<ul>
														<li>
															<Link to="/recipe-detail.html">recipe detail version 1</Link>
														</li>
														<li>
															<Link to="recipe-detail2.html">
																recipe detail version 2
															</Link>
														</li>
													</ul>
												</li>
												<li>
													<Link to="our-chefs.html">Chefs</Link>
												</li>
												<li>
													<Link to="/blog.html">Blog</Link>
													<ul>
														<li>
															<Link to="single.html">Single post</Link>
														</li>
													</ul>
												</li>
												<li>
													<Link to="elements.html">elements</Link>
												</li>
												<li>
													<Link to="/contacts.html">contacts</Link>
												</li>
												<li>
													<Link className="submit-recipe" to="/submit-recipe.html">
														Submit recipe
													</Link>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
     );
}
 
export default Header;