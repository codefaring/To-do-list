import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import List from '../List/List';
import style from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [lists, setLists] = useState(() => uploadLocalStorage());
  const handleAdd = (todo) => setLists([...lists, todo]);
  const handleUpdate = (updated) =>
    setLists(lists.map((list) => (list.id === updated.id ? updated : list)));
  const handleDelete = (deleted) =>
    setLists(lists.filter((list) => list.id !== deleted.id));
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const filtered = getFilteredItem(lists, filter);
  return (
    <section className={style.container}>
      <ul className={style.list}>
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

function uploadLocalStorage() {
  const lists = localStorage.getItem('lists');
  return lists ? JSON.parse(lists) : [];
}
