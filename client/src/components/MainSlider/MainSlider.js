const MainSlider = () => {
    return (
        <>
            {/*main slider*/}
            <section className="wrapper-home-slider slider-main">
                <div className="container">
                    <div className="home-slider">
                        <div className="slider-box">
                            {/*left slider*/}
                            <div className="slider-left">
                                <div className="custom-margin" id="sync1">
                                    <div>
                                        <a href="/"><img src="./images/temp-images/slide1.jpg" alt="slide" /></a>
                                    </div>
                                    <div>
                                        <a href="/"><img src="./images/temp-images/slide2.jpg" alt="slide" /></a>
                                    </div>
                                </div>
                                <span className="custom-arrows">
                                    <span className="left-arrow"><i className="fa fa-arrow-left" /></span>
                                    <span className="right-arrow"><i className="fa fa-arrow-right" /></span>
                                </span>
                            </div>
                            {/*left slider ends*/}
                            {/*right slider*/}
                            <div className="slider-right">
                                <div className="custom-margin" id="sync2">
                                    <div>
                                        <div className="slide-detail fbox">
                                            <div className="box1 box">
                                                <h2><a href="/">Pasto Pizza with Extra Cheese &amp; Toppings</a></h2>
                                                <a className="food-category" href="/">asian food</a>
                                                <ul className="post-meta slider-rating">
                                                    <li className="author"><a href="/">Johan Doe</a></li>
                                                    <li className="type"><a href="/">Easy</a></li>
                                                    <li className="time">2 Hours</li>
                                                </ul>
                                                <p>
                                                    Nam ornare arcu turpis, nec congue nibh tempor at.
                                                    Curabitur quis euismod mauris. Nulla porttitor orci
                                                    eget semper vulputate. Nam ornare arcu turpis, nec
                                                    congue nibh tempor at. Curabitur quis euismod
                                                    mauris. Nulla porttitor orci eget.
                                                </p>
                                            </div>
                                            <div className="rating-slider box2 box">
                                                <div className="rating-box">
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-figure">(4.1 / 5)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="slide-detail fbox">
                                            <div className="box1 box">
                                                <h2><a href="/">Supreame Pizza with Extra Toppings</a></h2>
                                                <a className="food-category" href="/">asian food</a>
                                                <ul className="post-meta slider-rating">
                                                    <li className="author"><a href="/">Johan Doe</a></li>
                                                    <li className="type"><a href="/">Easy</a></li>
                                                    <li className="time">2 Hours</li>
                                                </ul>
                                                <p>
                                                    Nam ornare arcu turpis, nec congue nibh tempor at.
                                                    Curabitur quis euismod mauris. Nulla porttitor orci
                                                    eget semper vulputate. Nam ornare arcu turpis, nec
                                                    congue nibh tempor at. Nulla porttitor orci eget.
                                                </p>
                                            </div>
                                            <div className="rating-slider box2 box">
                                                <div className="rating-box">
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-icons"><svg className="icon-container" width={25} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19">
                                                        <g>
                                                            <title>background</title>
                                                            <rect fill="none" height={21} width={27} y={-1} x={-1} />
                                                        </g>
                                                        <g>
                                                            <title>Layer 1</title>
                                                            <path className="icon-svg" d="m24.671816,17.625433c0,0.438 -0.286999,0.801001 -0.681,0.935001c-0.095001,0.036999 -0.198002,0.064999 -0.318001,0.064999l-16.000998,0c-0.553,0 -1,-0.448 -1,-1c0,-0.553999 0.447,-1 1,-1l14.950999,0c-0.500999,-5.053999 -4.764997,-9 -9.950999,-9c-5.523,0 -10,4.477001 -10,10c0,0 0.063,1 -1,1c-1.062,0 -1,-1 -1,-1c0,-5.769999 4.071,-10.581999 9.495001,-11.734999c-0.306002,-0.52 -0.495001,-1.117001 -0.495001,-1.765001c0,-1.933999 1.566999,-3.499999 3.5,-3.499999c1.931999,0 3.499,1.567 3.499,3.499999c0,0.739 -0.232998,1.423 -0.624998,1.989c4.984999,1.459 8.625998,6.056 8.625998,11.511l0,0zm-11.499,-15c-0.828999,0 -1.500999,0.670001 -1.500999,1.499001c0,0.827999 0.672001,1.5 1.500999,1.5c0.828001,0 1.499001,-0.672001 1.499001,-1.5c0,-0.829 -0.671,-1.499001 -1.499001,-1.499001l0,0z" clipRule="evenodd" fillRule="evenodd" />
                                                        </g>
                                                    </svg></span>
                                                    <span className="rating-figure">(4.1 / 5)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*right slider ends*/}
                        </div>
                        <div className="corner-image slider">
                            <img src="images/slider-bg-corner.png" alt="image" />
                        </div>
                    </div>
                </div>
            </section>
            {/*main slider ends*/}
        </>
    );
}

export default MainSlider;