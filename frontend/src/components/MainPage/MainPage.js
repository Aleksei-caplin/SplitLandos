import React, { Component } from 'react';
//import './MainPage.css';

import MainBanner from '../MainBanner';
import MainMenu from './MainMenu';

export default class MainPage extends Component {
    render() {
        return(
            <div className="test">
                
               <header className="head-section">
                <div className="navbar navbar-default navbar-static-top container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">A<span>cme</span></a>
                    </div>

                    <MainMenu />

                </div>
                </header>
                {/* header end */}

                {/* Sequence Modern Slider */}

                <MainBanner />
                
                <div className="container">
                <div className="row mar-b-50">
                    <div className="col-md-12">
                    <div className="text-center feature-head wow fadeInDown">
                        <h1 className="">
                        welcome to Acme
                        </h1>

                    </div>


                    <div className="feature-box">
                        <div className="col-md-4 col-sm-4 text-center wow fadeInUp">
                        <div className="feature-box-heading">
                            <em>
                            <img src="img/1.png" alt="" width="100" height="100" />

                            </em>
                            <h4>
                            <b>Multipurpose Template</b>
                            </h4>
                        </div>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, dolore eiusmod quis tempor incididunt ut et dolore Ut veniam unde nostrudlaboris.
                        </p>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center wow fadeInUp">
                        <div className="feature-box-heading">
                            <em>
                            <img src="img/2.png" alt="" width="100" height="100" />
                            </em>
                            <h4>
                            <b>Well Documented</b>
                            </h4>
                        </div>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, dolore eiusmod quis tempor incididunt ut et dolore Ut veniam unde nostrudlaboris.
                        </p>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center wow fadeInUp">
                        <div className="feature-box-heading">
                            <em>
                            <img src="img/3.png" alt="" width="100" height="100" />
                            </em>
                            <h4>
                            <b>Responsive Design</b>
                            </h4>
                        </div>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, dolore eiusmod quis tempor incididunt ut et dolore Ut veniam unde nostrudlaboris.
                        </p>
                        </div>
                    </div>

                    {/* feature end */}
                    </div>
                </div>
                </div>


                {/* property start */}
                <div className="property gray-bg">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-sm-6 text-center wow fadeInLeft">
                        <img src="img/tab1.png" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6 wow fadeInRight">
                        <h1>
                        Mobile ready
                        </h1>
                        <hr />
                        <p>
                        <i className="fa fa-check fa-lg pr-10">
                        </i>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ablic jiener. natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ablic jiener. natus error sit voluptatem accusantiu.
                        </p>
                        <p>
                        <i className="fa fa-check fa-lg pr-10">
                        </i>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ablic jiener. natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ablic jiener. natus error sit voluptatem accusantiu.
                        </p>
                        <p>
                        <i className="fa fa-check fa-lg pr-10">
                        </i>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ablic jiener.
                        </p>
                        <hr />
                        <a href="#" className="btn btn-purchase">
                        Purchase now
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                {/* property end */}

                <div className="container">

                <div className="row mar-b-60">
                    <div className="col-lg-6">
                    {/* tab start */}
                    <section className="tab wow fadeInLeft">
                        <header className="panel-heading tab-bg-dark-navy-blue">
                        <ul className="nav nav-tabs nav-justified ">
                            <li className="active">
                            <a data-toggle="tab" href="#news">
                                News
                            </a>
                            </li>
                            <li>
                            <a data-toggle="tab" href="#events">
                                Events
                            </a>
                            </li>
                            <li className="">
                            <a data-toggle="tab" href="#notice-board">
                                Notice board
                            </a>
                            </li>
                        </ul>
                        </header>
                        <div className="panel-body">
                        <div className="tab-content tasi-tab">
                            <div id="news" className="tab-pane fade in active">
                            <article className="media">
                                <a className="pull-left thumb p-thumb">
                                <img src="img/product1.jpg" alt="" />
                                </a>
                                <div className="media-body b-btm">
                                <a href="#" className=" p-head">
                                    News Tittle goes here
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                </div>
                            </article>
                            <article className="media">
                                <a className="pull-left thumb p-thumb">
                                <img src="img/product2.jpg" alt="" />
                                </a>
                                <div className="media-body b-btm">
                                <a href="#" className=" p-head">
                                    News Tittle goes here 2
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. simsut dorlor
                                </p>
                                </div>
                            </article>
                            <article className="media">
                                <a className="pull-left thumb p-thumb">
                                <img src="img/product1.jpg" alt="" />
                                </a>
                                <div className="media-body b-btm">
                                <a href="#" className=" p-head">
                                    News Tittle goes here 3
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. sumon ahmed
                                </p>
                                </div>
                            </article>
                            </div>
                            <div id="events" className="tab-pane fade">
                            <article className="media">
                                <a className="pull-left thumb p-thumb">
                                {/* image goes here */}
                                </a>
                                <div className="media-body b-btm">
                                <a href="#" className="cmt-head">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </a>
                                <p>

                                    <i className="fa fa-time">
                                    </i>
                                    1 hours ago
                                </p>
                                </div>
                            </article>
                            <article className="media">
                                <a className="pull-left thumb p-thumb">
                                {/* image goes here */}
                                </a>
                                <div className="media-body b-btm">
                                <a href="#" className="cmt-head">
                                    Nulla vel metus scelerisque ante sollicitudin commodo
                                </a>
                                <p>

                                    <i className="fa fa-time">
                                    </i>
                                    23 mins ago
                                </p>
                                </div>
                            </article>
                            <article className="media">
                                <a className="pull-left thumb p-thumb">
                                {/* image goes here */}
                                </a>
                                <div className="media-body b-btm">
                                <a href="#" className="cmt-head">
                                    Donec lacinia congue felis in faucibus.
                                </a>
                                <p>

                                    <i className="fa fa-time">
                                    </i>
                                    15 mins ago
                                </p>
                                </div>
                            </article>
                            </div>
                            <div id="notice-board" className="tab-pane fade">
                            <p>
                                Notice board goes here Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ablic jiener.
                            </p>
                            <p>
                                Notice board goes here Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ablic jiener.
                            </p>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* tab end */}
                    </div>
                    <div className="col-lg-6">
                    {/* testimonial start */}
                    <div className="about-testimonial boxed-style about-flexslider ">
                        <section className="slider wow fadeInRight">
                        <div className="flexslider">
                            <ul className="slides about-flex-slides">
                            <li>
                                <div className="about-testimonial-image ">
                                <img alt="" src="img/person_1.png" />
                                </div>
                                <a className="about-testimonial-author" href="#">
                                Russel Reagan
                                </a>
                                <span className="about-testimonial-company">
                                CCD Realestate
                                </span>
                                <div className="about-testimonial-content">
                                <p className="about-testimonial-quote">
                                    Donec ut purus sed tortor malesuada venenatis eget eget lorem. Nullam tempor lectus a ligula lobortis pretium. Donec ut purus sed tortor malesuada venenatis eget eget lorem.
                                </p>
                                </div>
                            </li>
                            <li>
                                <div className="about-testimonial-image ">
                                <img alt="" src="img/person_2.png" />
                                </div>
                                <a className="about-testimonial-author" href="#">
                                Steven gerrard
                                </a>
                                <span className="about-testimonial-company">
                                Molt BVG
                                </span>
                                <div className="about-testimonial-content">
                                <p className="about-testimonial-quote">
                                    Pellentesque et pulvinar enim. Quisque at tempor ligula. Maecenas augue ante, euismod vitae egestas sit amet, accumsan eu nulla. Nullam tempor lectus a ligula lobortis pretium. Donec ut purus sed tortor malesuada venenatis eget eget lorem.
                                </p>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </section>
                    </div>
                    {/* testimonial end */}
                    </div>
                    </div>
                </div>


                {/* recent work start */}
                <div className="bg-lg">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 recent">
                        <h3 className="recent-work">
                        Recent Work
                        </h3>
                        <p>Some of our work we have done earlier</p>
                        <div id="owl-demo" className="owl-carousel owl-theme wow fadeIn">

                        <div className="item view view-tenth">
                            <img src="img/works/img8.jpg" alt="work Image" />
                            <div className="mask">
                            <a href="blog-detail.html" className="info" data-toggle="tooltip" data-placement="top" title="Details">
                                <i className="fa fa-link">
                                </i>
                            </a>
                            </div>
                        </div>
                        <div className="item view view-tenth">
                            <img src="img/works/img9.jpg" alt="work Image" />
                            <div className="mask">
                            <a href="blog-detail.html" className="info" data-toggle="tooltip" data-placement="top" title="Details">
                                <i className="fa fa-link">
                                </i>
                            </a>
                            </div>
                        </div>
                        <div className="item view view-tenth">
                            <img src="img/works/img10.jpg" alt="work Image" />
                            <div className="mask">
                            <a href="blog-detail.html" className="info" data-toggle="tooltip" data-placement="top" title="Details">
                                <i className="fa fa-link">
                                </i>
                            </a>
                            </div>
                        </div>
                        <div className="item view view-tenth">
                            <img src="img/works/img11.jpg" alt="work Image" />
                            <div className="mask">
                            <a href="blog-detail.html" className="info" data-toggle="tooltip" data-placement="top" title="Details">
                                <i className="fa fa-link">
                                </i>
                            </a>
                            </div>
                        </div>
                        <div className="item view view-tenth">
                            <img src="img/works/img12.jpg" alt="work Image" />
                            <div className="mask">
                            <a href="blog-detail.html" className="info" data-toggle="tooltip" data-placement="top" title="Details">
                                <i className="fa fa-link">
                                </i>
                            </a>
                            </div>
                        </div>
                        <div className="item view view-tenth">
                            <img src="img/works/img13.jpg" alt="work Image" />
                            <div className="mask">
                            <a href="blog-detail.html" className="info" data-toggle="tooltip" data-placement="top" title="Details">
                                <i className="fa fa-link">
                                </i>
                            </a>
                            </div>
                        </div>


                        </div>
                    </div>
                    </div>
                </div>
                {/* recent work end */}
                </div>



                <div id="home-services">

                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <h2>
                        In case you need any help
                        </h2>
                    </div>

                    <div className="col-md-4">
                        <div className="h-service">
                        <div className="icon-wrap ico-bg round-fifty wow fadeInDown">
                            <i className="fa fa-question">
                            </i>
                        </div>
                        <div className="h-service-content wow fadeInUp">
                            <h3>
                            PRESALE QUESTION
                            </h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim  laborum.
                            <br />
                            <a href="#">
                                Learn more
                            </a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="h-service">
                        <div className="icon-wrap ico-bg round-fifty wow fadeInDown">
                            <i className="fa fa-h-square">
                            </i>
                        </div>
                        <div className="h-service-content wow fadeInUp">
                            <h3>
                            NEED SUPPORT?
                            </h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim  laborum.
                            <br />
                            <a href="#">
                                Learn more
                            </a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="h-service">
                        <div className="icon-wrap ico-bg round-fifty wow fadeInDown">
                            <i className="fa fa-users">
                            </i>
                        </div>
                        <div className="h-service-content wow fadeInUp">
                            <h3>
                            CHECK FORUM
                            </h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim  laborum.
                            <br />
                            <a href="#">
                                Learn more
                            </a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /row */}

                </div>
                {/* /container */}

                </div>
                {/* service end */}
                <div className="hr">
                <span className="hr-inner"></span>
                </div>

                <div className="container">
                <div className="row mar-b-50 our-clients">
                    <div className="col-md-3">
                    <h2>
                        Our Clients
                    </h2>
                    <p>
                        Lorem dipsum folor margade sitede lametep eiusmod psumquis dolore.Margade sitede lametep eiusmod.
                        lametep eiusmod psumquis dolore.
                    </p>
                    </div>
                    <div className="col-md-9">
                    <div className="outside">
                        <p>
                        <span id="slider-prev">
                        </span>
                        |
                        <span id="slider-next">
                        </span>
                        </p>
                    </div>

                    <ul className="bxslider1 clients-list">
                        <li>
                        <a href="#">
                            <img src="img/clients/graylogo6.png" alt="" />

                            <img src="img/clients/newlogo6.png" className="color-img" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="img/clients/graylogo6.png" alt="" />

                            <img src="img/clients/newlogo6.png" className="color-img" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="img/clients/graylogo6.png" alt="" />

                            <img src="img/clients/newlogo6.png" className="color-img" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="img/clients/graylogo6.png" alt="" />

                            <img src="img/clients/newlogo6.png" className="color-img" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="img/clients/graylogo6.png" alt="" />

                            <img src="img/clients/newlogo6.png" className="color-img" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="img/clients/graylogo6.png" alt="" />

                            <img src="img/clients/newlogo6.png" className="color-img" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="img/clients/graylogo6.png" alt="" />

                            <img src="img/clients/newlogo6.png" className="color-img" alt="" />
                        </a>
                        </li>

                    </ul>


                    </div>
                </div>
                {/* END CLIENTS */}
                </div>




                {/* container end */}

                {/* footer start */}
                <footer className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-sm-3 address wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                        <h1>
                        contact info
                        </h1>
                        <address>
                        <p><i className="fa fa-home pr-10"></i>Address: No.XXXXXX street</p>
                        <p><i className="fa fa-globe pr-10"></i>Mars city, Country </p>
                        <p><i className="fa fa-mobile pr-10"></i>Mobile : (123) 456-7890 </p>
                        <p><i className="fa fa-phone pr-10"></i>Phone : (123) 456-7890 </p>
                        <p><i className="fa fa-envelope pr-10"></i>Email :   <a href="#">support@example.com</a></p>
                        </address>
                    </div>
                    <div className="col-lg-3 col-sm-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">
                        <h1>latest tweet</h1>
                        <div className="tweet-box">
                            <i className="fa fa-twitter"></i>
                            <em>
                            Please follow
                            <a href="#">@example</a>
                            for all future updates of us!
                            <a href="#">twitter.com/acme</a>
                            </em>
                        </div>
                        <div className="tweet-box">
                            <i className="fa fa-twitter"></i>
                            <em>
                            Please follow
                            <a href="#">@example</a>
                            for all future updates of us!
                            <a href="#">twitter.com/acme</a>
                            </em>
                        </div>
                        <div className="tweet-box">
                            <i className="fa fa-twitter"></i>
                            <em>
                            Please follow
                            <a href="#">@example</a>
                            for all future updates of us!
                            <a href="#">twitter.com/acme</a>
                            </em>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3">
                        <div className="page-footer wow fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">
                        <h1>
                            Our Company
                        </h1>
                        <ul className="page-footer-list">
                            <li>
                            <i className="fa fa-angle-right"></i>
                            <a href="about.html">About Us</a>
                            </li>
                            <li>
                            <i className="fa fa-angle-right"></i>
                            <a href="faq.html">Support</a>
                            </li>
                            <li>
                            <i className="fa fa-angle-right"></i>
                            <a href="service.html">Service</a>
                            </li>
                            <li>
                            <i className="fa fa-angle-right"></i>
                            <a href="privacy-policy.html">Privacy Policy</a>
                            </li>
                            <li>
                            <i className="fa fa-angle-right"></i>
                            <a href="career.html">We are Hiring</a>
                            </li>
                            <li>
                            <i className="fa fa-angle-right"></i>
                            <a href="terms.html">Term & condition</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3">
                        <div className="text-footer wow fadeInUp" data-wow-duration="2s" data-wow-delay=".7s">
                        <h1>
                            Text Widget
                        </h1>
                        <p>
                            This is a text widget.Lorem ipsum dolor sit amet.
                            This is a text widget.Lorem ipsum dolor sit amet.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
                {/* footer end */}
                {/*small footer start */}
                <footer className="footer-small">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 pull-right">
                                <ul className="social-link-footer list-unstyled">
                                    <li className="wow flipInX" data-wow-duration="2s" data-wow-delay=".1s"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li className="wow flipInX" data-wow-duration="2s" data-wow-delay=".2s"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="wow flipInX" data-wow-duration="2s" data-wow-delay=".3s"><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li className="wow flipInX" data-wow-duration="2s" data-wow-delay=".4s"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li className="wow flipInX" data-wow-duration="2s" data-wow-delay=".5s"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li className="wow flipInX" data-wow-duration="2s" data-wow-delay=".6s"><a href="#"><i className="fa fa-skype"></i></a></li>
                                    <li className="wow flipInX" data-wow-duration="2s" data-wow-delay=".7s"><a href="#"><i className="fa fa-github"></i></a></li>
                                    <li className="wow flipInX" data-wow-duration="2s" data-wow-delay=".8s"><a href="#"><i className="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                            <div className="copyright">
                                <p>&copy; Copyright - Acme Theme by cosmic.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </footer>
            
            </div>
        )
    }
}

