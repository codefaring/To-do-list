import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
  const [add, setAdd] = useState('');
  const handleChange = (e) => setAdd(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text: add, status: 'active' });
    setAdd('');
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
