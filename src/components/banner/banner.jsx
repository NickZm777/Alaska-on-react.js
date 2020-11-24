import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="bannerInfo" id="denali">
        <h1 class="bannerTitle">Denali National Park</h1>
        <div class="bannerDescription">
          <p>
            Denali National Park & Preserve is home to America’s highest peak,
            Denali
          </p>
          <button class="buttonHref">
            <a href="">Learn More</a>
          </button>
        </div>
      </div>

      <div class="bannerInfo" id="aurora">
        <h1 class="bannerTitle">Aurora</h1>
        <div class="bannerDescription">
          <p>See the northern lights in one of the best spots on earth</p>
          <button class="buttonHref">
            <a href="">Learn More</a>
          </button>
        </div>
      </div>

      <div class="bannerInfo" id="glaciers">
        <h1 class="bannerTitle">Glaciers</h1>
        <div class="bannerDescription">
          <p>Alaska has 100,000 glaciers – how many will you see?</p>
          <button class="buttonHref">
            <a href="">Learn More</a>
          </button>
        </div>
      </div>

      <div class="bannerInfo" id="wildlife">
        <h1 class="bannerTitle">Wildlife</h1>
        <div class="bannerDescription">
          <p>Alaska has an amazing array of animals to see</p>
          <button class="buttonHref">
            <a href="">Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
