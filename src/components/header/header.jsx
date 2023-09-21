import React from "react"
import "./header.css"
import {Link} from 'react-router-dom'

function Header()
{
  return <div className="header_component">
    <hr />
    <nav>
      
    <div className="portfolio_">
       <Link to='/' className="nav_link">PORTFOLIO</Link>
    </div>
    <div>
      <ul>
        <li>
          <Link to='/explore' className="nav_link">EXPLORE</Link>
        </li>
        <li>
          <Link to='/about' className="nav_link">ABOUT</Link>
        </li>
        <li>
          <Link to='/contact' className="nav_link">CONTACT</Link>
        </li>
      </ul>

    </div>
    <div className="bav_social_link">
      <ul>
        <li>
          <Link className="nav_link" to='https://www.instagram.com/_the_reba_l/?next=%2F'>INSTAGRAM</Link>
        </li>
        <li>
          <Link className="nav_link" to='https://www.behance.net/blourdhuraju'>BEHANCE</Link>
        </li>
        <li>
          <Link className="nav_link" to='https://www.linkedin.com/in/lourdhu/'>LINKEDIN</Link>
        </li>
      </ul>
    </div>
  </nav>
  </div>

}

export default Header