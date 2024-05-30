import React from 'react';
import NavigationBar from './Nav';

function Banner() {
  return (
    <div className="banner" id="banner">
      <NavigationBar />
      <div className="w3_agile_banner_info">
        <section className="slider">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <div className="agileits_w3layouts_banner_info">
                  <h2>Innovation...</h2>
                  <p className="text-color-p">See our recent works projects! Sed bibendum, purus ac posuere tristique arcu augue pharetra augue,</p>
                  <div className="w3ls-button">
                    <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="agileits_w3layouts_banner_info">
                  <h3>Technology...</h3>
                  <p className="text-color-p">Sed bibendum, purus ac posuere tristique See our recent works projects! arcu augue pharetra augue,</p>
                  <div className="w3ls-button">
                    <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="agileits_w3layouts_banner_info">
                  <h3>Additional...</h3>
                  <p className="text-color-p">See our recent works projects! Sed bibendum, purus ac posuere tristique arcu augue pharetra augue,</p>
                  <div className="w3ls-button">
                    <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Banner;