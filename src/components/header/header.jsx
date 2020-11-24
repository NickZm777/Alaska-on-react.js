import React from "react";
import alaskaLogo from "./images/Travel-Alaska-Logo.png";

const Header = () => {
  return (
    <header class="header">
      <div class="headerInfo">
        <div class="official">
          Official State of Alaska Vacation and Travel Information
        </div>
        <div class="headerActions">
          <div class="language">
            <select name="" id="">
              <option value="">English</option>
              <option value="">Russian</option>
              <option value="">Chineese</option>
              <option value="">French</option>
            </select>
          </div>
          <div class="search">
            <a href="#">
              <button>Search</button>
            </a>
          </div>
          <div class="login">
            <a href="">Login</a>
          </div>
        </div>
      </div>
      <div class="navMain">
        <div className="logo">
          <a href="">
            <img src={alaskaLogo} alt="" />
          </a>
        </div>
        <div class="navItem">
          <a href="">
            Get <br />
            Inspired
          </a>
          <div class="subNavList">
            <a href="">Photo Gallery</a>
            <a href="">Video Gallery</a>
            <a href="">Trip Ideas</a>
            <a href="">Local Tours</a>
            <a href="">Travel Alaska</a>
            <a href="">Local Blog</a>
          </div>
        </div>
        <div class="navItem">
          <a href="">
            Maps+ <br />
            Places To Go
          </a>
          <div class="subNavList">
            <a href="">Regions</a>
            <a href="">Cities & Towns</a>
            <a href="">Parks & Public Lands</a>
          </div>
        </div>
        <div class="navItem">
          <a href="">
            Things <br />
            To Do
          </a>
          <div class="subNavList">
            <a href="">Adventure</a>
            <a href="">Hiking, Biking & Backcountry</a>
            <a href="">Arts, Culture & History</a>
            <a href="">Day Cruises</a>
            <a href="">Shopping, Dining & Shows</a>
            <a href="">Fishing</a>
            <a href="">Wildlife Viewing</a>
            <a href="">Special Offers</a>
          </div>
        </div>
        <div class="navItem">
          <a href="">
            Places <br />
            To Stay
          </a>
          <div class="subNavList">
            <a href="">Hotels & Motels</a>
            <a href="">Wilderness Lodges & Resorts</a>
            <a href="">Cabins & Vacation Rentals</a>
            <a href="">Bed & Breakfast</a>
            <a href="">Campgrounds & RV Parks</a>
          </div>
        </div>
        <div class="navItem">
          <a href="">
            Getting <br />
            Around
          </a>
          <div class="subNavList">
            <a href="">Travel to Alaska</a>
            <a href="">Travel Within Alaska</a>
            <a href="">Special Offers</a>
          </div>
        </div>
        <div class="navItem">
          <a href="">
            Package <br />
            Tours
          </a>
          <div class="subNavList">
            <a href="">Cruise and Land Tours</a>
            <a href="">Adventure & Ecotour Packages</a>
            <a href="">Land Packages</a>
            <a href="">Cruiseship Packages</a>
            <a href="">Overnight Fishing Packages</a>
            <a href="">Wildlife Packages</a>
            <a href="">Winter Packages</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
