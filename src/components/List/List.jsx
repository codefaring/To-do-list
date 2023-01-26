import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import style from './List.module.css';

export default function List({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    // const status = e.target.checked ? 'completed' : 'active';
    // onUpdate({ ...todo, status });
    onUpdate({ ...todo, status: e.target.checked ? 'completed' : 'active' });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={style.list}>
      <input
        className={style.checkbox}
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label
        htmlFor='checkbox'
        className={style.text}
      >
        {text}
      </label>
      <span className={style.icon}>
        <button
          onClick={handleDelete}
          className={style.button}
        >
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
