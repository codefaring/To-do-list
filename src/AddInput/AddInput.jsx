import React, { useState } from 'react';

export default function AddInput({ onAdd }) {
  const [add, setAdd] = useState('');
  const handleChange = (e) => setAdd(e.target.value);
  const handleSubmit = (e) => {
    e.prevenDefault();
    onAdd({ id: '', text: add, status: 'active' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='추가할 일을 입력하세요'
        value={add}
        onChange={handleChange}
      />
      <button>추가하기</button>
    </form>
  );
}
