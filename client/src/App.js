import InputContainer from './components/InputContainer';
import { useState } from 'react';
import QRcodeContainer from './components/QrcodeContainer';

function App() {
  const [qrcode, setQrcode] = useState(null);

  const onChaneState = (value) => {
    setQrcode(value);
  };
  return (
    <div className='container'>
      {qrcode ? (
        <QRcodeContainer qrcode={qrcode} onChangeState={onChaneState} />
      ) : (
        <InputContainer onChangeState={onChaneState} />
      )}
    </div>
  );
}

export default App;
