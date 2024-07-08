import { useState } from 'react';

export default function InputContainer({ onChangeState }) {
  const [url, setUrl] = useState('');

  const handleCreate = async () => {
    try {
      const response = await fetch('http://localhost:8080/make', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
        }),
      });

      const data = await response.text();
      onChangeState(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <>
      <input
        type='text'
        placeholder='write url ...'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleCreate}>CREATE</button>
    </>
  );
}
