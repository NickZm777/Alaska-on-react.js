import React from "react";
import denali_1 from "./images/1.jpg";
import denali_2 from "./images/2.jpg";
import denali_3 from "./images/3.jpg";
import aurora_1 from "./images/4.jpg";
import aurora_2 from "./images/5.jpg";
import aurora_3 from "./images/6.jpg";
import glaciers_1 from "./images/7.jpg";
import glaciers_2 from "./images/8.jpg";
import glaciers_3 from "./images/9.jpg";
import wildlife_1 from "./images/10.jpg";
import wildlife_2 from "./images/11.jpg";
import wildlife_3 from "./images/14.jpg";

const Sliders = () => {
  return (
    <div class="sliders">
      <div class="slideDenali">
        <img src={denali_1} alt="" />
      </div>
      <div class="slideDenali">
        <img src={denali_2} alt="" />
      </div>
      <div class="slideDenali">
        <img src={denali_3} alt="" />
      </div>
      <div class="slideAurora">
        <img src={aurora_1} alt="" />
      </div>
      <div class="slideAurora">
        <img src={aurora_2} alt="" />
      </div>
      <div class="slideAurora">
        <img src={aurora_3} alt="" />
      </div>
      <div class="slideGlaciers">
        <img src={glaciers_1} alt="" />
      </div>
      <div class="slideGlaciers">
        <img src={glaciers_2} alt="" />
      </div>
      <div class="slideGlaciers">
        <img src={glaciers_3} alt="" />
      </div>
      <div class="slideWildlife">
        <img src={wildlife_1} alt="" />
      </div>
      <div class="slideWildlife">
        <img src={wildlife_2} alt="" />
      </div>
      <div class="slideWildlife">
        <img src={wildlife_3} alt="" />
      </div>

      <div class="bannerSwitcher">
        <div class="switcher">
          <a href="" id="denali">
            Denali
          </a>
        </div>
        <div class="switcher">
          <a href="">Aurora</a>
        </div>
        <div class="switcher">
          <a href="">Glaciers</a>
        </div>
        <div class="switcher">
          <a href="">Wildlife</a>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
