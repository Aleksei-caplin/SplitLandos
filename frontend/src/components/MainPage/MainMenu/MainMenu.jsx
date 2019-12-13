import React, { Component } from 'react';

import { Modal } from '../../Modal/';
import { Auth } from '../../Auth';

export class MainMenu extends Component{
    state = {
        isModalOpen: false,
    };


    toggleModal = () => {
        this.setState(state => ({ isModalOpen: !state.isModalOpen}) )
        console.log(this.state);
        return false;
    };

    render() {
        return (
            <div className="navbar-collapse collapse">

                <ul className="nav navbar-nav">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="index.html">Home <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="index.html">Home Parallax</a>
                            </li>
                            <li>
                                <a href="index1.html">Home Seq-slider1</a>
                            </li>
                            <li>
                                <a href="index2.html">Home Seq-slider2</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="#">Feature <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="typography.html">Typography</a>
                            </li>
                            <li>
                                <a href="button.html">Buttons</a>
                            </li>
                            <li>
                                <a href="form.html">Form</a>
                            </li>
                            <li>
                                <a href="table.html">Table</a>
                            </li>
                            <li className="dropdown-submenu">
                                <a href="#" tabIndex="-1">More options</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#" tabIndex="-1">Second level</a>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#">Even More..</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="#">3rd level</a>
                                            </li>
                                            <li>
                                                <a href="#">3rd level</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Second level</a>
                                    </li>
                                    <li>
                                        <a href="#">Second level</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="#">Pages <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li>
                                <a href="404.html">404 page</a>
                            </li>
                            <li>
                                <a href="career.html">career</a>
                            </li>
                            <li>
                                <a href="login.html">Login</a>
                            </li>
                            <li>
                                <a href="registration.html">Registration</a>
                            </li>
                            <li>
                                <a href="faq.html">FAQ</a>
                            </li>
                            <li className="dropdown-submenu">
                                <a href="#" tabIndex="-1">Pricing table</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-submenu"></li>
                                    <li>
                                        <a href="price-table-one.html">Pricing table one</a>
                                    </li>
                                    <li>
                                        <a href="price-table-two.html">Pricing table two</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="service.html">Service</a>
                            </li>
                            <li>
                                <a href="terms.html">Terms & Condition</a>
                            </li>
                            <li>
                                <a href="privacy.html">Privacy policy</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="#">Portfolio <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="portfolio-3-col.html">Portfolio 3 column</a>
                            </li>
                            <li>
                                <a href="portfolio-4-col.html">Portfolio 4 column</a>
                            </li>
                            <li>
                                <a href="portfolio-single-image.html">Portfolio Single Image</a>
                            </li>
                            <li>
                                <a href="portfolio-single-video.html">Portfolio Single Video</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="#">Blog <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="blog-two-col.html">Blog two column</a>
                            </li>
                            <li>
                                <a href="blog-detail.html">Blog Single Image</a>
                            </li>
                            <li>
                                <a href="blog-detail-video.html">Blog single video</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                    <li>
                        <a href="#" onClick={ this.toggleModal }>Log in</a>
                    </li>
                    <li><input className="form-control search" placeholder=" Search" type="text" /></li>
                </ul>
                { this.state.isModalOpen &&
                    <Modal onClose={ this.toggleModal }>
                        <Auth/>
                    </Modal>
                }
            </div>
        );
    };
}