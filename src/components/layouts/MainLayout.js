import Link from "next/link";
import MainHeader from "./../sections/headers/MainHeader";
function Layout(props) {


    return (
        <div className="layout">
            <MainHeader />
            <div className="wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default Layout