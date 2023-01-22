import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [lists, setlists] = useState(['장보기', '공부하기']);
  return (
    <div className='text'>
      <h1>할일 목록</h1>
      <ul>
        {lists.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          const todo = prompt('변경할 할일 목록을 입력하세요');
          setlists(
            lists.map((list) => {
              if (list === todo) {
              }
              return list;
            })
          );
        }}
      >
        할일 변경하기
      </button>
      <button
        onClick={() => {
          const addTodo = prompt('추가하고 싶은 할일은 무엇인가요?');
          setlists((lists) => [...lists, addTodo]);
        }}
      >
        할일 추가하기
      </button>
      <button>할일 삭제하기</button>
    </div>
  );
}
