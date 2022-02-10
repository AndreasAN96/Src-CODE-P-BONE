import { useState } from 'react';
import './kontak.scss'

export default function Kontak() {
  const [pesan, setpesan] = useState (false)

  const handlesubmit = (e)=>{
    e.preventDefault();
    setpesan(true);
  }

  return <div className='kontak' id='kontak'>
          <div className="kiri">
            <img src="assets/chat-box.png" alt="" />
          </div>
          <div className="kanan">
            <h2>Kontak.</h2>
            <form onSubmit={handlesubmit}>
              <input type="text" placeholder='Masukan Email Anda' />
              <textarea placeholder='Masukan Pesan Anda'></textarea>
              <button type='submit'>Kirim</button>
              {pesan && <span>Terima kasih, Kami Akan Segera Membalas Pesan Anda</span>}
            </form>
          </div>
  </div>;
}
