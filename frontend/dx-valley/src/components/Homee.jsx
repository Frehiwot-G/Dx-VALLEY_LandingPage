import React, { useEffect }  from "react";
import $ from 'jquery'; // jQuery import

// import 'flexslider/flexslider.css'
const Homee = () => {
    useEffect(() => {
        // FlexSlider initialization (you'll need to install flexslider if required)
        $('.flexslider').flexslider({
            animation: "slide",
            start: function (slider) {
                $('body').removeClass('loading');
            }
        });
    }, []);
  return (
    <>
      <div class="w3_agile_banner_info">
        <section class="slider">
          <div class="flexslider">
            <ul class="slides">
              <li>
                <div class="agileits_w3layouts_banner_info">
                  <h2>Innovation...</h2>
                  <p class="text-color-p">
                    See our recent works projects! Sed bibendum, purus ac
                    posuere tristique arcu augue pharetra augue,
                  </p>
                  <div class="w3ls-button">
                    <a href="#" data-toggle="modal" data-target="#myModal">
                      Read More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="agileits_w3layouts_banner_info">
                  <h3>Techonolgy…</h3>
                  <p class="text-color-p">
                    Sed bibendum, purus ac posuere tristique See our recent
                    works projects! arcu augue pharetra augue,
                  </p>
                  <div class="w3ls-button">
                    <a href="#" data-toggle="modal" data-target="#myModal">
                      Read More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="agileits_w3layouts_banner_info">
                  <h3>Additional…</h3>
                  <p class="text-color-p">
                    See our recent works projects! Sed bibendum, purus ac
                    posuere tristique arcu augue pharetra augue,
                  </p>
                  <div class="w3ls-button">
                    <a href="#" data-toggle="modal" data-target="#myModal">
                      Read More
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- flexSlider --> */}
        <script defer src="js/jquery.flexslider.js"></script>
        {/* <script type="text/javascript">
          $(window).load(function()
          {$(".flexslider").flexslider({
            animation: "slide",
            start: function (slider) {
              $("body").removeClass("loading");
            },
          })}
          );
        </script> */}
      </div>
      <div
        class="modal video-modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModal"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              Technical Solutions
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src="images/laptop.jpg" alt=" " class="img-responsive" />
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homee