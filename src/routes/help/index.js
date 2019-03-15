import { h } from 'preact';
import style from './style';
import installImg from './../../assets/install_chrome.png';
import installAppImg from './../../assets/install_app.png';
import openAppImg from './../../assets/open_app.png';

const Help = () => (
  <div class={style.help}>
    <h1>Installation Instructions</h1>
    <div style={{ marginTop: '20px' }}>
      <img src={installImg} style={{ height: '500px' }} />
    </div>
    <div style={{ marginTop: '20px' }}>
      <img src={installAppImg} style={{ height: '500px' }} />
    </div>
    <div style={{ marginTop: '20px' }}>
      <img src={openAppImg} style={{ height: '500px' }} />
    </div>
  </div>
);

export default Help;
