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
            Pasto Pizza with Extra Cheesy flavour Cheese Toppings addings
          </span>
          <ul className="good-food-list">
            <li>
              <span>
                <img src="images/burger-icon.png" alt="icon" />
              </span>
              <a href="/">Nam ornare arcu turpis, nec congue nibh tempores</a>
            </li>
            <li>
              <span>
                <img src="images/grapes-icon.png" alt="icon" />
              </span>
              <a href="/">Quis euismod mauris. Nulla porttitor orcirisk</a>
            </li>
            <li>
              <span>
                <img src="images/salt-pot-icon.png" alt="icon" />
              </span>
              <a href="/">We are hugeseget semper vulputate. </a>
            </li>
          </ul>
          <a
            className="button-default theme-filled video-button swipebox"
            href="https://vimeo.com/15306847"
          >
            Watch our Video
          </a>
          <a className="button-default hollow-button" href="/">
            Know more About Us
          </a>
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