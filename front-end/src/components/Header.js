import './Header.css'

const Header = () => {
  return (
    <div id="header">
      <div id="welcome-msg">Welcome to DollarsBank!</div>
      <ul>
        <li>
            <span className="bi bi-envelope">dollarsbank@global.com</span>
        </li>
        <li>
            <span>1 202 555 0191</span>
        </li>
      </ul>
    </div>
  )
}

export default Header
