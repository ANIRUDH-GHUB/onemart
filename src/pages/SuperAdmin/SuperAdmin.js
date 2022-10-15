import React from "react";

const SuperAdmin = () => {
  return (
    <div>
      <section>
        <div class="herosection" id="home">
          <div class="hero-container">
            <img
              src="./assets/icons/column-chart-example.svg"
              alt=""
              class="hero-image"
            />
            <div class="hero-rightside-admin">
              <div class="all-analytics">
                <h2>Total Number of Business owners</h2>
                <h4>146</h4>
              </div>
              <div class="all-analytics">
                <h2>Total Number of Clubs</h2>
                <h4>1200</h4>
              </div>
              <div class="all-analytics">
                <h2>Total Number of Products</h2>
                <h4>48</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="outer-container-admin" id="outer-container">
          <div class="manage-btn view-more">
            <a href="supermanagePosts.html">Manage Posts</a>
          </div>
          <div class="manage-btn view-more">
            <a href="supermanageClubs.html">Manage Clubs</a>
          </div>
          <div class="manage-btn view-more">
            <a href="supermanageStudents.html">Manage Students</a>
          </div>
          <div class="manage-btn view-more">
            <a href="supermanageBusinesses.html">Manage Businesses</a>
          </div>
          <div class="manage-btn view-more">
            <a href="supermanageSchools.html">Manage Schools</a>
          </div>
        </div>
      </section>

      <div class="fixed-bottom">
        <div class="chat">CHAT!!!</div>
      </div>
    </div>
  );
};

export default SuperAdmin;
