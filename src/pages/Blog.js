import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog(){
    return(
        <React.Fragment>
           <div>
  {/* mian-content */}
  <div className="main-banner inner" id="home">
    {/* header */}
    <header className="header">
      <div className="container-fluid px-lg-5">
        {/* nav */}
        <nav className="py-4">
          <div id="logo">
            <h1> <a href="index.html"><span className="fa fa-bold" aria-hidden="true" />ootie</a></h1>
          </div>
          <label htmlFor="drop" className="toggle">Menu</label>
          <input type="checkbox" id="drop" />
          <ul className="menu mt-2">
          <li className="active">
              <Link to="/"> Home </Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>
              {/* First Tier Drop Down */}
              <label htmlFor="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true" /> </label>
              <a href="#">Drop Down <span className="fa fa-angle-down" aria-hidden="true" /></a>
              <input type="checkbox" id="drop-2" />
              <ul>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="shop.html">Shop Now</a></li>
                <li><a href="single.html">Single Page</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        {/* //nav */}
      </div>
    </header>
    {/* //header */}
  </div>
  {/*//main-content*/}
  {/**/}
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
      <a href="index.html">Home</a>
    </li>
    <li className="breadcrumb-item active">Blogs</li>
  </ol>
  {/**/}
  {/*// mian-content */}
  {/* banner */}
  <section className="ab-info-main py-5">
    <div className="container py-lg-3">
      <div className="ab-info-grids">
        <h3 className="tittle text-center mb-lg-5 mb-3">Blog Posts</h3>
        <div id="products" className="row view-group">
          <div className="item col-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img className="group list-group-image img-fluid" src="images/img2.jpg" alt />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 1</h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat.</p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">
                      $720.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img className="group list-group-image img-fluid" src="images/img5.jpg" alt />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 2</h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat.</p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">
                      $825.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img className="group list-group-image img-fluid" src="images/img3.jpg" alt />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 3</h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat.</p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">
                      $730.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 mt-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img className="group list-group-image img-fluid" src="images/img4.jpg" alt />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 4</h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat.</p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">
                      $634.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 mt-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img className="group list-group-image img-fluid" src="images/img6.jpg" alt />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 5</h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat.</p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">
                      $729.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 mt-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img className="group list-group-image img-fluid" src="images/img7.jpg" alt />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 6</h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat.</p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">
                      $620.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //banner */}
  {/* footer */}
  <footer>
    <div className="container">
      <div className="row footer-top">
        <div className="col-lg-4 footer-grid_section_w3layouts">
          <h2 className="logo-2 mb-lg-4 mb-3">
            <a href="index.html"><span className="fa fa-bold" aria-hidden="true" />ootie</a>
          </h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h4 className="sub-con-fo ad-info my-4">Catch on Social</h4>
          <ul className="w3layouts_social_list list-unstyled">
            <li>
              <a href="#" className="w3pvt_facebook">
                <span className="fa fa-facebook-f" />
              </a>
            </li>
            <li className="mx-2">
              <a href="#" className="w3pvt_twitter">
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="w3pvt_dribble">
                <span className="fa fa-dribbble" />
              </a>
            </li>
            <li className="ml-2">
              <a href="#" className="w3pvt_google">
                <span className="fa fa-google-plus" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-8 footer-right">
          <div className="w3layouts-news-letter">
            <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Newsletter</h3>
            <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
            <form action="#" method="post" className="w3layouts-newsletter">
              <input type="email" name="Email" placeholder="Enter your email..." required />
              <button className="btn1"><span className="fa fa-paper-plane-o" aria-hidden="true" /></button>
            </form>
          </div>
          <div className="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
            <div className="col-md-4 footer-grid_section_w3layouts">
              <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Information</h3>
              <ul className="list-unstyled w3layouts-icons">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="mt-3">
                  <a href="about.html">About Us</a>
                </li>
                <li className="mt-3">
                  <a href="#">Gallery</a>
                </li>
                <li className="mt-3">
                  <a href="#">Services</a>
                </li>
                <li className="mt-3">
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-grid_section_w3layouts">
              {/* social icons */}
              <div className="agileinfo_social_icons">
                <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Customer Service</h3>
                <ul className="list-unstyled w3layouts-icons">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li className="mt-3">
                    <a href="#">Delivery &amp; Returns</a>
                  </li>
                  <li className="mt-3">
                    <a href="#">Waranty</a>
                  </li>
                  <li className="mt-3">
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                  <li className="mt-3">
                    <a href="#">Privacy Plolicy</a>
                  </li>
                </ul>
              </div>
              {/* social icons */}
            </div>
            <div className="col-md-4 footer-grid_section_w3layouts my-md-0 my-5">
              <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Contact Info</h3>
              <div className="contact-info">
                <div className="footer-address-inf">
                  <h4 className="ad-info mb-2">Phone</h4>
                  <p>+121 098 8907 9987</p>
                </div>
                <div className="footer-address-inf my-4">
                  <h4 className="ad-info mb-2">Email </h4>
                  <p><a href="mailto:info@example.com">info@example.com</a></p>
                </div>
                <div className="footer-address-inf">
                  <h4 className="ad-info mb-2">Location</h4>
                  <p>Honey Avenue, New York City</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cpy-right text-left row">
            <p className="col-md-10">© 2019 Bootie. All rights reserved | Design by
              <a href="http://w3layouts.com"> W3layouts.</a>
            </p>
            {/* move top icon */}
            <a href="#home" className="move-top text-right col-md-2"><span className="fa fa-long-arrow-up" aria-hidden="true" /></a>
            {/* //move top icon */}
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* //footer */}
</div>

        </React.Fragment>
    )
}