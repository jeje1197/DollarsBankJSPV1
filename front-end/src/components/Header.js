import './Header.css'

const Header = () => {
  return (
    <div id="header">
      <div id="welcome-msg">Welcome to DollarsBank!</div>
      {/* <div> */}
        <ul>
          <li>
            <i className="fas fa-envelope-square" style={{fontSize: "24px", color:"white"}}></i>
            dollarsbank@global.com
          </li>
          <li>
            <i className="fas fa-phone" style={{fontSize: "24px", color:"white"}}></i>
            1 202 555 0191
          </li>
        </ul>
      {/* </div> */}
    </div>
  )
}

export default Header
