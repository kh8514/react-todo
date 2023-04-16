import React from 'react';
import { AiOutlineDelete as Trash } from 'react-icons/ai'

export default function Todo({todo}) {
  const {id, text, status} = todo;
  console.log(todo);
  return (
    <li>
      <input type="checkbox" id={id} checked={status==="complete" ? true : false}/>
      <label htmlFor={id}>{text}</label>
      <button><Trash /></button>
    </li>
  );
}

