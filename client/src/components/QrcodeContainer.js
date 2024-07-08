export default function QRcodeContainer({ qrcode, onChangeState }) {
  return (
    <>
      {qrcode && (
        <img className='qrcode-img' src={`${qrcode}`} alt='base64-image' />
      )}
      <button onClick={() => onChangeState(null)}>CANCEL</button>
    </>
  );
}
