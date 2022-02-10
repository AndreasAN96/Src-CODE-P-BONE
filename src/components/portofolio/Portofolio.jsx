import { useEffect, useState } from 'react';
import Portolist from '../portolist/Portolist';
import './portofolio.scss'
import {featuredporto, webporto, mobileporto, skillporto} from '../../data'

export default function Portofolio() {
  const [selected, setselected] = useState("featured");
  const [data, setdata] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "skill",
      title: "Skill",
    },

  ];

  useEffect(()=>{
    switch (selected) {
      case 'featured':
        setdata(featuredporto);    
        break;

        case 'web':
        setdata(webporto);    
        break;

        case 'mobile':
        setdata(mobileporto);    
        break;

        case 'skill':
        setdata(skillporto);    
        break;
    
      default:
        setdata(featuredporto);
    }


  }, [selected])

  return <div className='portofolio' id='portofolio'>
        <h1>Portofolio</h1>
        <ul>
            {list.map(item=>(
              <Portolist title={item.title} 
              active={selected === item.id} 
              setselected={setselected}
              id={item.id}
              />
            ))}
        </ul>

        <div className="container">
              {data.map((d) => (    
              <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
              ))}
        </div>
  </div>;
}
