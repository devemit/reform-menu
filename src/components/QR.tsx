import QRCode from 'react-qr-code';

export default function QR() {
  return (
    <>
      <QRCode
        style={{ padding: '2rem', display: 'none' }}
        value={'https://reformdojran.vercel.app'}
        bgColor='white'
        fgColor='black'
        size={500}
      />
    </>
  );
}
