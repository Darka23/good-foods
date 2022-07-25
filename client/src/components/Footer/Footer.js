const Footer = () => {
    return ( 
        <>
  {/*footer*/}
  <div className=" footer footer-variant-one footer-boxed animate-footer">
    <div className="container">
      <div className="footer-inner">
        <div className="text-center">
          <a className="logo-footer wow animated zoomIn" href="index.html">
            <img src="images/logo2.png" alt="Logo" />
          </a>
          <p className="wow animated flipInX">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
            <br />
            magna aliquyam erat, with an extra ordinary design and quality
            development features in low
          </p>
        </div>
        <div className="subs-social-options">
          <div className="row custom-row-footer">
            <div className="col-md-6 custom-col-options">
              <div className="left-side">
                <div className="widget widget-footer news-letter-signup">
                  <h2>Newsletter Signup</h2>
                  <form className="subs-form" action="#" method="post">
                    <div className="email-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter you email address"
                      />
                      <button>
                        <i className="fa fa-paper-plane-o" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-side">
                <div className="widget widget-footer social-icons">
                  <h2>Get Social with Us</h2>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-flickr" />
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
            © Copyright 2015 All Rights Reserved by{" "}
            <a href="#">Majestic Themes</a>
          </p>
        </div>
        <div className="corner-image wow animated fadeInRight">
          <img src="images/footer-corner-image.jpg" alt="image" />
        </div>
      </div>
    </div>
  </div>
  {/*footer ends*/}
</>

     );
}
 
export default Footer;