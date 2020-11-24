import React from "react";
import map from "./images/map-of-alaskapng.png";

const Map = () => {
  return (
    <div class="contentMap">
      <h2>Planning your trip</h2>
      <div class="mapBox">
        <div class="mapDescription">
          <h3>Alaska is Big</h3>
          <p>
            It can be overwhelming to plan a trip to Alaska. What are the best
            spots to see bears or moose or beautiful sunsets? Do you want to
            spend a lot of time in one area exploring the wilderness and
            mountains or make those side excursions while visiting Alaska’s
            diverse cities? Because Alaska is so big, it’s divided into 5
            regions—start your planning by learning about these different
            locations and choose whatever you like - mountians, lakes, glaciers,
            hotsprings and other.
          </p>
          <p>
            If you know some cities or parks you’d like to visit, maybe center
            your planning around those. You can see what’s around by visiting
            our <a href="">cities map</a> or our <a href="">parks map</a>
          </p>
        </div>
        <div class="map">
          <a href="">
            <img src={map} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
