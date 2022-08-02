import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginRegister from "../AuthButtons/LoginRegister";
import { auth } from "../../firebase";
import LogOut from "../AuthButtons/LogOut";

const Header = () => {

	const [user] = useAuthState(auth);

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
									{!user ? <LoginRegister/> : <LogOut/>}																		
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
												<Link to="/recipe-listing">Recent Recipes</Link>
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
												<Link to="/blog">Blog</Link>
												<ul>
													<li>
														<Link to="single.html">Single post</Link>
													</li>
												</ul>
											</li>
											<li>
												<Link to="/contacts">contacts</Link>
											</li>
											{user ? <><li>
													<Link to="/profile">Profile</Link>
												</li>
													<li>
														<Link className="submit-recipe" to="/submit-recipe">
															Submit recipe
														</Link>
													</li>
												</>
													:
													<li>
														<Link className="submit-recipe" to="/login">
															If you want to submit your recipe, login
														</Link>
													</li>
												}
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