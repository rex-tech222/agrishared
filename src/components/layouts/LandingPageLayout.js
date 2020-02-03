import Link from "next/link";
import LandingPageHeader from "./../sections/headers/LandingPageHeader";
import LandingPageFooter from "./../sections/footers/LandingPageFooter";
import '../../public/static/slick.min.css'
import '../../public/static/styles.css'
import '../../public/static/antd.css'
import {useEffect} from "react";


function Layout(props) {


    useEffect(() => {
        var $window = $(window);
        var $scrolltop = $('.back-to-top');

        $scrolltop.on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        $window.on('scroll', function () {
            if($window.scrollTop() >= 200) {
                $scrolltop.removeClass("hide");
                $scrolltop.addClass("show");
            } else {
                $scrolltop.removeClass("show");
                $scrolltop.addClass("zoomOut");
                $scrolltop.addClass("hide");
                $scrolltop.removeClass("zoomOut");
            }
        });

    });

    return (
          <div className="landing-page">

              <LandingPageHeader activePage={props.activePage} />

              <div className="">
                  {props.children}
              </div>

              <LandingPageFooter />


              <a className="back-to-top hide animated  zoomIn">
                  <i className="hs-icon hs-icon-arrow-top"></i>
              </a>

          </div>
    )
}

export default Layout