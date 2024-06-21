import '../App.css'
import { useState } from "react";
import PropTypes from 'prop-types'; 

function TodoCreate({onCreateTodo}) {// app.jsx deki props ile maplende fonksiyonla setlendi
    const [newTodo,setNewTodo] =useState('');
    const createTodo =()=>{
        if(!newTodo) return;//ekrana bir değer girilmezse bir şey yapms
        const clearInput = ()=>{
            setNewTodo('');
        }
            const request = {
                id :Math.floor(Math.random()*9999999),
                content : newTodo
            };
            onCreateTodo(request);//child dan parente props geçtiniz.
            clearInput();
    }
    
  return (
    <div className='todo-create'>
        <input 
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
        className='todo-input' type="text" placeholder='ToDo giriniz.'></input>
        <button onClick ={createTodo} className='todo-create-button'>ToDo Oluştur</button>
    </div>
  )
}

export default TodoCreate;