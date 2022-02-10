import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60, 
      strings: ['Developer', 'House' ] 
    
    });
  }, []);

  return <div className='intro' id='intro'>
        <div className="kiri">
            <div className="imgcontainer">
                <img src="assets/bone.png" alt="" />
            </div>  
        </div>

        <div className="kanan">
          <div className="wrapper">
            <h2>Selamat Datang!</h2>
            <h1>BONEdev.</h1>
            <h3>
              Software <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#portofolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
  </div>;
}
