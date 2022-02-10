import './topbar.scss'
import {Phone, Mail} from '@material-ui/icons'

export default function Topbar({menuopen, setMenuOpen}) {
  return <div className={'topbar ' + (menuopen && 'active')}>
      <div className="wrapper">
          <div className="kiri">
            <a href="#intro" className='logo'>BONEdev.</a>
            <div className="itemcontainer">
                <Phone className="icon" />
                <span>+62 822 4738 4796</span>
            </div>
            <div className="itemcontainer">
                <Mail className="icon" />
                <span>bonedev@gmail.com</span>
            </div>
          </div>
          <div className="kanan">
          <div className="line" onClick={()=>setMenuOpen(!menuopen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
  </div>;
}
