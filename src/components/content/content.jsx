import React from "react";
import planner from "./images/planner2.jpg";
import magazine from "./images/magazine.jpg";
import alaskaTrain from "./images/AlaskaAdbearandtrain560x374.jpg";
import anckorage from "./images/AnchorageTurnagainArm560x374.jpg";
import tasteAlaska from "./images/Taste of Alaska.jpg";

const Content = () => {
  return (
    <div class="container_1">
      <div class="content_1">
        <div class="left_1">
          <h2>Free Vacation Guide</h2>
          <div>
            <img src={planner} alt="" />
          </div>
          <div>
            <p>Request your free official State of Alaska vacation planner</p>
            <button class="buttonHref">
              <a href="">Order a Copy</a>
            </button>
          </div>
        </div>
        <div class="right_1">
          <h2>Alaska Residents</h2>
          <div>
            <img src={magazine} alt="" />
            <button class="buttonHref">
              <a href="">
                Find trip ideas, special Alaska resident deals and more here
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="content_2_background">
        <div class="content_2">
          <h3>Travel Specials</h3>
          <div class="content_2_box">
            <div class="left_2">
              <img src={alaskaTrain} alt="" />
              <h4>
                <a href="">Save Up to $1400 on Alaska Rail Packages</a>
              </h4>
              <p>Location: Statewide</p>
              <p>
                <a href="">More Details</a>
              </p>
            </div>
            <div class="right_2">
              <img src={anckorage} alt="" />
              <h4>
                <a href="">
                  Book the Alaska Railroad and Return for Free by Park
                  Connection Motorcoach
                </a>
              </h4>
              <p>Location: Anchorage</p>
              <p>
                <a href="">More Details</a>
              </p>
            </div>
          </div>
          <div class="footer_2">
            <h5>View by category</h5>
            <ul>
              <li>
                <a href="">Packages</a>
              </li>
              <li>
                <a href="">Accommodations</a>
              </li>
              <li>
                <a href="">Transportation</a>
              </li>
              <li>
                <a href="">Activities</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="right_3">
          <h3>Travel Alaska Blog</h3>
          <img src={tasteAlaska} alt="" />
          <p>
            It’s easy to conjure up images of giant king crab legs, bright red
            king salmon filets and flaky white halibut when anyone mentions
            eating in Alaska. But if you’re a fan of good food, and face it, who
            isn’t? Then we’ve got the scoop for you.
          </p>
          <p>Alaska cuisine...</p>
          <button class="buttonHref">
            <a href="">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
