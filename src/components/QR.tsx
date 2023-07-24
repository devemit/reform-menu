import QRCode from 'react-qr-code';

export default function QR() {
  return (
    <div
      style={{
        // textAlign: 'center',
        padding: '2rem',
        display: 'none',
      }}
    >
      <QRCode
        style={{ padding: '.5rem' }}
        value={'https://reformbeachbar.vercel.app'}
        bgColor='white'
        fgColor='black'
        size={500}
      />
      <h1
        style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontStyle: 'italic',
          paddingTop: '1rem',
          background: 'whitesmoke',
          width: '500px',
          height: '90px',
        }}
      >
        Scan to see our menu!
      </h1>
    </div>
  );
}
