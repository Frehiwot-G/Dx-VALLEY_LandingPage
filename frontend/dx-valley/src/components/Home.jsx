import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './style.css';
import $ from 'jquery';

const Home = () => {
    useEffect(() => {
        // FlexSlider initialization (you'll need to install flexslider if required)
        $('.flexslider').flexslider({
            animation: "slide",
            start: function (slider) {
                $('body').removeClass('loading');
            }
        });
    }, []);

    return (
        <div className="home">
            {/* banner */}
            <div className="banner" id="banner">
                {/* header */}
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-gradient-secondary">
                        <h1>
                            <Link className="navbar-brand text-white" to="/">
                                Dx-Valley
                            </Link>
                        </h1>
                        <button
                            className="navbar-toggler ml-md-auto"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-lg-auto text-center">
                                <li className="nav-item active mr-lg-3">
                                    <Link className="nav-link" to="/">
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item mr-lg-3 mt-lg-0 mt-3">
                                    <a className="nav-link scroll" href="#register">About Us</a>
                                </li>
                                <li className="nav-item mr-lg-3 mt-lg-0 mt-3">
                                    <a className="nav-link scroll" href="#services">Project</a>
                                </li>
                                <li className="nav-item mb-lg-0 mb-3">
                                    <a className="nav-link scroll" href="#process">How we work</a>
                                </li>
                                <li className="nav-item mb-lg-0 mb-3">
                                    <a className="nav-link scroll" href="#contact">Contact</a>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="btn ml-lg-2 w3ls-btn"
                                        data-toggle="modal"
                                        aria-pressed="false"
                                        data-target="#exampleModal"
                                    >
                                        Login
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="w3_agile_banner_info">
                    <section className="slider">
                        <div className="flexslider">
                            <ul className="slides">
                                <li>
                                    <div className="agileits_w3layouts_banner_info">
                                        <h2>Innovation...</h2>
                                        <p className="text-color-p">See our recent works projects! Sed bibendum, purus ac posuere tristique arcu augue pharetra augue,</p>
                                        <div className="w3ls-button">
                                            <Link to="/" data-toggle="modal" data-target="#myModal">Read More</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="agileits_w3layouts_banner_info">
                                        <h3>Technology…</h3>
                                        <p className="text-color-p">Sed bibendum, purus ac posuere tristique See our recent works projects! arcu augue pharetra augue,</p>
                                        <div className="w3ls-button">
                                            <Link to="/" data-toggle="modal" data-target="#myModal">Read More</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="agileits_w3layouts_banner_info">
                                        <h3>Additional…</h3>
                                        <p className="text-color-p">See our recent works projects! Sed bibendum, purus ac posuere tristique arcu augue pharetra augue,</p>
                                        <div className="w3ls-button">
                                            <Link to="/" data-toggle="modal" data-target="#myModal">Read More</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="bannergrids">
                    <ul className="banneraddress">
                        <li><span className="fa fa-envelope" aria-hidden="true"></span><a href="mailto:dxvalley@email.com">info@example.com</a></li>
                        <li><span className="fa fa-phone" aria-hidden="true"></span>+25 544 673 2277</li>
                        <li><a href="#contact" className="scroll"><span className="fa fa-long-arrow-right" aria-hidden="true"></span> Contact Us</a></li>
                        <li><span className="fa fa-map-marker" aria-hidden="true"></span>123 Bole Rwanda Entoto servilon, Addis Ababa</li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>
            {/* //banner */}
        </div>
    );
};

export default Home;
