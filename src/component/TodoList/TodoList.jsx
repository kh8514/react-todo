import React, { useState } from 'react';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState(data);
  return (
    <section>
      <ul>
        {
          todos.map((todo) =>(
            <Todo 
              key={todo.id}
              todo={todo}
            />
          ))
        }
      </ul>
    </section>
  );
}

let data = [
  {
    id: 1,
    text: "공부",
    status: "active"
  },
  {
    id: 2,
    text: "운동",
    status: "active"
  },
  {
    id: 3,
    text: "산책",
    status: "complete"
  },
]