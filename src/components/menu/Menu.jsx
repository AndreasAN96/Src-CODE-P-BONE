import './menu.scss';

export default function Menu({ menuopen, setMenuOpen }) {
  return <div className={'menu ' + (menuopen && 'active')}>
      <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#intro">Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#portofolio">Portofolio</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#work">Work</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#profil">Profil Team</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}> 
              <a href="#kontak">Kontak</a>
          </li>
      </ul>

  </div>;
}
