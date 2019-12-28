import Link from "next/link";
import Header from "./header";
function Layout(props) {

    
    return (
          <div className="layout">
              <Header/>
              <div className="wrapper">
                  {props.children}
              </div>
          </div>
    )
}

export default Layout