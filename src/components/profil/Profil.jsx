import './profil.scss'

export default function Profil() {
  const data = [
 
    {
      id: 5,
      nama: 'Andreas Antonius',
      title: 'Database Analyst',
      img: './assets/andre.jpg',
      iconfb: './assets/facebook.png',
      linkfb: 'https://www.facebook.com/andreas.an.3386585/',
      iconig: './assets/instagram.png',
      linkig: 'https://www.instagram.com/andre2696_/',
      icontw: './assets/twitter.png',
      linktw: 'https://twitter.com/AnAnderias',
    
    }, 

    {
      id: 3,
      nama: 'Valentino M. Siga',
      title: 'Back End Programmer',
      img: './assets/Tino.jpg',
      linkfb: 'https://www.facebook.com/valentino.oo.906',
      iconfb: './assets/facebook.png',
      linkig: 'https://www.instagram.com/valentinho27/',
      iconig: './assets/instagram.png',
      linktw: 'https://twitter.com/Valentinho27',
      icontw: './assets/twitter.png',
      featured1: true,
    },

    {
      id: 2,
      nama: 'Yudistira R. Akoit',
      title: 'Head Of Project',
      img: './assets/yudi.jpg',
      linkfb:'https://www.facebook.com/yudhi.stira.7311',
      iconfb: './assets/facebook.png',
      linkig: 'https://www.instagram.com/yudhi_stira91/',
      iconig: './assets/instagram.png',
      icontw: './assets/twitter.png',
      featured: true,
    },

    {
      id: 1,
      nama: 'George P. Pello',
      title: 'Front End Programmer',
      img: './assets/jope.jpg',
      linkfb:'https://www.facebook.com/profile.php?id=100005411237775',
      iconfb: './assets/facebook.png',
      linkig: 'https://www.instagram.com/georgepello_/',
      iconig: './assets/instagram.png',
      icontw: './assets/twitter.png',
      featured1: true,
    },

    {
      id: 4,
      nama: 'Petrus Uja Badin',
      title: 'System Analyst',
      img: './assets/Ancel.jpg',
      linkfb:'https://www.facebook.com/ancell.joy.96',
      iconfb: './assets/facebook.png',
      linkig:'https://www.instagram.com/joy.ancell01/',
      iconig: './assets/instagram.png',
      icontw: './assets/twitter.png',
    
    },
 ];


  return <div className='profil' id='profil'>
      <h1>Profil Team</h1>
      <div className="container">

         {data.map((d) => (
        
        <div className={`${d.featured ? 'card featured' : 'card'}  ${d.featured1 ? 'card featured1' : 'card'}`}>
          <div className="top">
            
            <img src={d.img} className='gambar' alt="" />
          </div>
          <div className="center">
            <a href={d.linkfb}>
            <img src={d.iconfb} className='fb' alt=""/>
            </a>
            <a href={d.linkig}>
            <img src={d.iconig} className='ig' alt=""/>
            </a>
            <a href={d.linktw}>
            <img src={d.icontw} className='tw' alt="" />
            </a>
            
          </div>
          <div className="bottom">
            <h3>{d.nama}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
          ))} 
      </div>
  </div>;
}
