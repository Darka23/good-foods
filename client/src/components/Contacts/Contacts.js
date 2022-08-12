import Header2 from '../Header/Header2'

const Contacts = () => {
    return (
        <>
            <div className="banner banner-blog">
                <div className="container ">
                    <div className="main-heading">
                        <h1>Contact us</h1>
                    </div>
                </div>
            </div>

            <section className="recipes-home-body inner-page">
                <div className="container">
                    <div className="recipe-set">
                        <h2>Our Locations</h2>
                        <div className="contact-container">
                            <div className="row">
                                <div className="col-md-4">
                                    <section className="contact-option-single">
                                        <h3>Our Restaurant</h3>
                                        <p>
                                            Bulgaria, Veliko Tarnovo
                                        </p>
                                        <ul className="contact-options">
                                            <li className="phone">
                                                <span>Phone: </span>+359 884 965 846
                                            </li>
                                            <li className="email">
                                                <span>Email: </span>
                                                <a href="">darka.2004@abv.bg</a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col-md-4">
                                    <section className="contact-option-single">
                                        <h3>Other Office</h3>
                                        <p>
                                            Bulgaria, Veliko Tarnovo
                                        </p>
                                        <ul className="contact-options">
                                            <li className="phone">
                                                <span>Phone: </span>+359 884 965 846
                                            </li>
                                            <li className="email">
                                                <span>Email: </span>
                                                <a href="">darka.2004@abv.bg</a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <div className="separator-post" />
                        </div>
                    </div>
                </div>
            </section>
            {/*main content area*/}

        </>

    );
}

export default Contacts;