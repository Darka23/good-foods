import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import LoginRegister from "../AuthButtons/LoginRegister";
import LogOut from "../AuthButtons/LogOut"
import { useEffect, useState } from "react";
import Preloader from "../Preloader";
import { GetAdminUser } from "../../services/UserServices";

const Header2 = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [admin, setAdmin] = useState({});
	const [user] = useAuthState(auth);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			GetAdminUser()
				.then(data => setAdmin(data[0]));
		}, 750);
	}, [])


	if (isLoading) {
		return <Preloader />
	}

	return (
		<>
			{/*header*/}
			<header>
				<div className="header header-var1 fade-load-down">
					<div className="responsive-menu" />
					<div className="nav-var1">
						<div className="container">
							<div className="row">
								<div className="col-md-5">
									<div className="left-nav">
										<nav className="nav-collapse">
											<ul className="main-menu left">
												<li>
													<Link to="/">Home</Link>
													<ul>
														<li>
															<Link to="/variation1.html">variation one</Link>
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
															<Link to="/recipe-listing">
																recipe listing list view
															</Link>
														</li>
														<li>
															<Link to="/recipe-listing-grid">
																recipe listing grid view
															</Link>
														</li>
													</ul>
												</li>
												<li>
													<Link to="/blog">blog</Link>
													<ul>
														<li>
															<Link to="single.html">Single post</Link>
														</li>
													</ul>
												</li>
											</ul>
										</nav>
									</div>
								</div>
								<div className="col-md-2">
									<div className="logo-wrapper">
										<Link to="/">
											<img src="./images/logo.png" alt="logo" />
										</Link>
									</div>
								</div>
								<div className="col-md-5">
									<div className="right-nav">
										<div className="wrapper-links">

											{!user ? <LoginRegister /> : <LogOut />}
											{admin?.uid == user?.uid
												?
												<span className="sign-in-buttons">
													<Link to="/admin-panel">AdminPanel</Link>
												</span>
												: <></>
											}
										</div>
										<nav className="nav-collapse">
											<ul className="main-menu right">
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
			{/*header ends*/}
		</>

	);
}

export default Header2;