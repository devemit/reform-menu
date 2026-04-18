import QRCode from 'react-qr-code';
import './qr.css';

export default function QR() {
  return (
    <div className='qr-section'>
      <QRCode
        className='qr-section__code'
        value={'https://reformbeachbar.vercel.app'}
        bgColor='white'
        fgColor='black'
        size={500}
      />
      <h1 className='qr-section__title'>Scan to see our menu!</h1>
    </div>
  );
}
