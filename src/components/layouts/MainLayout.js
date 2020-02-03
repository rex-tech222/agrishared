import Link from "next/link";
import MainHeader from "./../sections/headers/MainHeader";
import '../../public/static/styles.css'
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