import Link from "next/link";
import LandingPageHeader from "./../sections/headers/LandingPageHeader";
import LandingPageFooter from "./../sections/footers/LandingPageFooter";
import '../../public/static/styles.css'
import 'antd/dist/antd.css';

function Layout(props) {

    
    return (
          <div className="landing-page">
              <LandingPageHeader />
              <div className="">
                  {props.children}
              </div>
              <LandingPageFooter />
          </div>
    )
}

export default Layout