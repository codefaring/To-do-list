import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import List from '../List/List';

export default function TodoList({ filter }) {
  const [lists, setLists] = useState([
    { id: '1', text: '장보기', status: 'active' },
    { id: '2', text: '청소하기', status: 'active' },
  ]);
  const handleAdd = (todo) => setLists([...lists, todo]);
  const handleUpdate = (updated) =>
    setLists(lists.map((list) => (list.id === updated.id ? updated : list)));
  const handleDelete = (deleted) =>
    setLists(lists.filter((list) => list.id !== deleted.id));
  const filtered = getFilteredItem(lists, filter);
  return (
    <section>
      <h1>할일 목록</h1>
      <ul>
        {filtered.map((list) => (
          <List
            key={list.id}
            todo={list}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItem(lists, filter) {
  if (filter === 'all') {
    return lists;
  }
  return lists.filter((list) => list.status === filter);
}
