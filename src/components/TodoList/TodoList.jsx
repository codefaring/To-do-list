import React, { useState } from 'react';
import AddInput from '../../AddInput/AddInput';

export default function TodoList() {
  const [lists, setLists] = useState([
    { id: '1', text: '장보기', status: 'active' },
    { id: '2', text: '청소하기', status: 'active' },
  ]);
  const handleAdd = (todo) => {
    console.log(todo);
  };
  return (
    <section>
      <h1>할일 목록</h1>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
      <AddInput onAdd={handleAdd} />
    </section>
  );
}
