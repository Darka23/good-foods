
const Footer = () => {
	return (
		<>
			{/*footer*/}
			<div className=" footer footer-variant-one footer-boxed animate-footer">
				<div className="container">
					<div className="footer-inner">
						<div className="text-center">
							<a className="logo-footer wow animated zoomIn" to="/">
								<img src="images/logo.png" alt="Logo" />
							</a>
							<div className="subs-social-options">
							<div className="row custom-row-footer">
								<div className="col-md-6 custom-col-options">
								
								</div>
								<div className="col-md-6">
									<div className="right-side">
										<div className="widget widget-footer social-icons">
											<h2>Get Social with Us</h2>
											<ul>
												<li>
													<a href="https://www.facebook.com/darian.minkov/">
														<i className="fa fa-facebook" />
													</a>
												</li>
												<li>
													<a href="https://www.linkedin.com/in/darian-minkov-552069242/">
														<i className="fa fa-linkedin" />
													</a>
												</li>
												<li>
													<a href="https://www.instagram.com/darizmo23/">
														<i className="fa fa-instagram" />
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="footer-copyright text-center wow animated flipInX">
							<p>
								© Copyright 2015 All Rights Reserved by Darian Minkov
							</p>
						</div>
						<div className="corner-image wow animated fadeInRight">
							<img src="images/footer-corner-image.jpg" alt="image" />
						</div>
						</div>
						
					</div>
				</div>
			</div>
			{/*footer ends*/}
		</>

	);
}

export default Footer;