import Link from "next/link";
import $ from 'jquery'

function MainHeader() {

    const showMobileSearch = (e) =>{
        e.preventDefault()
        $('body').toggleClass('show-mobile-search')
    }

    const hideMobileSearch = () =>{
        $('body').removeClass('show-mobile-search')
    }

    return (
       <div className="main-header">
           <nav className="navbar navbar-expand-md      flex-row">

               <a onClick={showMobileSearch} href="#" className="nav-link   mobile-search-btn"><i className="fa fa-search"></i></a>

               <form className="navbar-form navbar-left form-horizontal" role="search">
                   <div className="input-group">
                       <button type="submit" className="btn"><span className="fa fa-search"></span>
                       </button>
                       <input type="text" className="search-box" placeholder="Search"/>
                   </div>
               </form>

               <a className="navbar-brand" href="/">
                   <img src="/120x29.png" className="img-fluid" alt="Responsive image"/>
               </a>

               <ul className="navbar-nav flex-row mr-0">

                   <li className="nav-item">
                       <a href="#" className="nav-link  "><i className="fa fa-slideshare"></i></a>
                   </li>
                   <li className="nav-item">
                       <a href="#" className="nav-link  "><i className="fa fa-bell"></i></a>
                   </li>
                   <li className="nav-item">
                       <a href="#" className="nav-link  "><i className="fa fa-envelope"></i></a>
                   </li>
                   <li className="nav-item dropdown user-account">
                       <a href="#" className="nav-link dropdown-toggle navbar-img mr-3 mr-lg-0" data-toggle="dropdown"
                          role="button" aria-haspopup="true" aria-expanded="false">
                           <i className="fa fa-user-circle"></i>
                           Account
                       </a>
                       <ul className="dropdown-menu dropdown-menu-right">
                           <li><a className="dropdown-item" href="#">Profile</a></li>
                           <li><a className="dropdown-item" href="#">Inbox</a></li>
                           <li><a className="dropdown-item" href="#">Followers</a></li>
                           <li role="separator" className="divider"></li>
                           <li><a className="dropdown-item" href="#">Settings</a></li>
                       </ul>
                   </li>
               </ul>

               <button className="navbar-toggler ml-lg-0" type="button" data-toggle="collapse"
                       data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                       aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
           </nav>
           <div className="mobile-search-form">
               <div onClick={hideMobileSearch} className="overlay"></div>
               <form className="form" role="search">
                   <div className="input-group">
                       <button type="submit" className="btn"><span className="fa fa-search"></span>
                       </button>
                       <input type="text" className="search-box" placeholder="Search"/>
                   </div>
               </form>
           </div>
       </div>
    )
}

export default MainHeader