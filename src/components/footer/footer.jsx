import React from "react";
import facebookLogo from "./images/Facebook.png";
import instagramLogo from "./images/instagram.png";
import twitterLogo from "./images/twitter.jpg";
import youtubeLogo from "./images/youtube.png";
import paintestLogo from "./images/painterest.jpg";
import appStoreLogo from "./images/app-store-logo.png";
import googlePlayLogo from "./images/google-play.jpg";

const Footer = () => {
  return (
    <div class="footer">
      <p>
        <button>
          <a href="">Share This Page</a>
        </button>
      </p>
      <div class="footerContent">
        <div class="about">
          <h5>About us</h5>
          <ul>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Community Links</a>
            </li>
            <li>
              <a href="">Become a Member</a>
            </li>
            <li>
              <a href="">State of Alaska</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Photo Credits</a>
            </li>
          </ul>
        </div>
        <div class="formBox">
          <h5>Travel Alaska Newsletter</h5>
          <form action="">
            <p>Monthly travel tips, highlights and savings!</p>
            <div class="firstName">
              <input
                type="text"
                name=""
                placeholder="First Name"
                id="firstName"
              />
            </div>
            <div class="lastName">
              <input
                type="text"
                name=""
                placeholder="Last Name"
                id="lastName"
              />
            </div>
            <div class="e_mail">
              <input
                type="email"
                name=""
                placeholder="Email-adress"
                id="email"
                required
              />
            </div>
            <div class="select">
              <label for="">Select your country</label>
              <br />
              <select name="" id="country">
                <option value="">Argentina</option>
                <option value="">Brazil</option>
                <option value="">Canada</option>
                <option value="">Columbia</option>
                <option value="">Japan</option>
                <option value="">Mexico</option>
                <option value="">Paraguay</option>
                <option value="">United States</option>
              </select>
            </div>
            <div class="checkBox">
              <label for="">
                <input type="checkbox" name="" id="checkbox" />I have read and
                agree to the terms and conditions in the
                <a href="">privacy policy</a>.
              </label>
            </div>
            <div class="submitForm">
              <button type="submit" class="submit">
                Send
              </button>
            </div>
            <div class="clearForm">
              <button type="reset">Clear</button>
            </div>
          </form>
        </div>
        <div class="links">
          <div class="socialLinks">
            <h5>Stay connected</h5>
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={facebookLogo} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img src={instagramLogo} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <img src={twitterLogo} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <img src={youtubeLogo} alt="youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.painterest.com/">
                  <img src={paintestLogo} alt="painterest" />
                </a>
              </li>
            </ul>
          </div>
          <div class="apps">
            <h5>Take your trip with you</h5>
            <p>Get the TravelAlaska app!</p>
            <div>
              <a href="https://www.apple.com/app-store/">
                <img src={appStoreLogo} alt="app-store-logo" />
              </a>
            </div>
            <div>
              <a href="https://play.google.com/store?hl=ru&gl=US">
                <img src={googlePlayLogo} alt="google-play logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footerBottom">
        <p>2020 Alaska Travel Industry Association</p>
        <ul>
          <li>
            <a href="">Media Center</a>
          </li>
          <li>
            <a href="">Travel Trade</a>
          </li>
          <li>
            <a href="">Advertise With Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
