import { useState } from 'react';
import './work.scss'

export default function Work() {
  const [currentslide, setdataslide] = useState(0);

    const data = [
        {
            id: '1',
            icon:'./assets/smartphone.png',
            title:'Mobile Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci.',
            img:'./assets/ecom2.jpg'

        },

        {
            id: '2',
            icon:'./assets/world-wide-web.png',
            title:'Web Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci.',
            img:'./assets/ecom3.jpg'

        },

        {
            id: '3',
            icon:'./assets/web-design.png',
            title:'Design UI/UX',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci.',
            img:'./assets/ecom1.jpg'

        },
    ];

    const handleClick = (way)=> {
      way === "left" ? setdataslide(currentslide > 0 ? currentslide-1 : 2 ) :
      setdataslide(currentslide < data.length - 1 ? currentslide + 1 : 0 );
    };


  return <div className='work' id='work'>
          <div className="slider" style={{transform: `translateX(-${currentslide * 100}vw)`}}>

              {data.map((d) =>(

                <div className="container">
              <div className="item">
                <div className="kiri">
                  <div className="kiricontainer">
                    <div className="imgcontainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>
                      {d.desc}
                    </p>
                    <span>Project</span>
                  </div>
                </div>
                <div className="kanan">
                  <img src={d.img} alt="" />
                </div>
              </div>   
            </div>
            ))}
          </div>
          <img src="assets/next.png" className='arrow kiri' alt="" onClick={()=>handleClick("kiri")} />
          <img src="assets/next.png" className='arrow kanan' alt="" onClick={()=>handleClick("")} />
  </div>;
}
