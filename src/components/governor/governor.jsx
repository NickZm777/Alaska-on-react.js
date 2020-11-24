import React from "react";
import dunleavy from "./images/Dunleavy head shot.jpg";

const Governor = () => {
  return (
    <div class="governor">
      <h2>Welcome to Alaska's Official Vacation Information Guide</h2>
      <div class="governorBox">
        <div class="governorDesription">
          <p>
            As Governor, and as an Alaskan, I’m thrilled you’re interested in
            exploring Alaska.
          </p>
          <p>
            We Alaskans are proud of our home. It’s an extraordinarily beautiful
            place, with unforgettable scenery, magnificent wildlife, and some
            flat-out wonderful people. Whether you are coming to see Alaska’s
            glorious mountains, rivers and glaciers; to learn about Alaska’s
            cultures and our history; or to experience the wonder of the
            northern lights, we know you’ll make amazing lifelong memories here.
          </p>
          <p>
            We’re sure a trip to Alaska will live up to your wildest dreams. And
            we look forward to welcoming you to the Last Frontier.
          </p>
          <p>
            Warm regards, <br />
            Governor Mike Dunleavy
          </p>
        </div>
        <div class="governorImage">
          <img src={dunleavy} alt="Alaska Governor" />
        </div>
      </div>
    </div>
  );
};

export default Governor;
