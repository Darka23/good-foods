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
                                        <h3>Registered office</h3>
                                        <p>
                                            Recipe north street, opp secure garden. Hotel View, City State
                                            Office, Melbournebr <br />
                                            Australia. 123456
                                        </p>
                                        <ul className="contact-options">
                                            <li className="phone">
                                                <span>Phone: </span>+123 4567 890
                                            </li>
                                            <li className="fax">
                                                <span>Fax: </span>+123 4567 890
                                            </li>
                                            <li className="email">
                                                <span>Email: </span>
                                                <a href="/">info@foodandtaste.com</a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col-md-4">
                                    <section className="contact-option-single">
                                        <h3>Our Restaurant</h3>
                                        <p>
                                            Recipe north street, opp secure garden. Hotel View, City State
                                            Office, Melbourne <br />
                                            Australia. 123456
                                        </p>
                                        <ul className="contact-options">
                                            <li className="phone">
                                                <span>Phone: </span>+123 4567 890
                                            </li>
                                            <li className="fax">
                                                <span>Fax: </span>+123 4567 890
                                            </li>
                                            <li className="email">
                                                <span>Email: </span>
                                                <a href="/">info@foodandtaste.com</a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col-md-4">
                                    <section className="contact-option-single">
                                        <h3>Other Office</h3>
                                        <p>
                                            Recipe north street, opp secure garden. Hotel View, City State
                                            Office, Melbourne <br />
                                            Australia. 123456
                                        </p>
                                        <ul className="contact-options">
                                            <li className="phone">
                                                <span>Phone: </span>+123 4567 890
                                            </li>
                                            <li className="fax">
                                                <span>Fax: </span>+123 4567 890
                                            </li>
                                            <li className="email">
                                                <span>Email: </span>
                                                <a href="/">info@foodandtaste.com</a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <div className="separator-post" />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-option-single">
                                        <h3>Quick Contact</h3>
                                        <fieldset>
                                            <form
                                                action="contact_form_handler.php"
                                                id="contact-form"
                                                method="post"
                                                noValidate="novalidate"
                                            >
                                                <input
                                                    className="required"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    title="*Enter Your Name"
                                                />
                                                <input
                                                    className="required"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    title="*enter valid email address"
                                                />
                                                <input
                                                    type="number"
                                                    className="number"
                                                    name="number"
                                                    placeholder="Phone Number"
                                                />
                                                <textarea
                                                    className="required"
                                                    name="message"
                                                    id="message"
                                                    cols={30}
                                                    rows={10}
                                                    placeholder="Message"
                                                    title="*type your message"
                                                    defaultValue={""}
                                                />
                                                <button type="submit">submit message</button>
                                                <img
                                                    src="images/loader2.gif"
                                                    id="contact-loader"
                                                    alt="Loading..."
                                                />
                                            </form>
                                        </fieldset>
                                        <div className="error-container" />
                                        <div id="message-sent" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/*google map*/}
                                    <div className="contact-option-single">
                                        <h3>Find Location on Map</h3>
                                        <div className="map-wrapper">
                                            <div id="map_canvas" />
                                        </div>
                                    </div>
                                    {/*google map ends*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*main content area*/}

        </>

    );
}

export default Contacts;