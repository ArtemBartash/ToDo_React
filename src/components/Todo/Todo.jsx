import React, { useState } from 'react';
import Button from "../Button/Button";
import Filter from "./Filter/Filter";
import TodoList from "./TodoList/TodoList";
import Modal from "../Modal/Modal"
import TodoListContainer from "./TodoList/TodoListContainer";
import FilterContainer from './Filter/FilterContainer';
import classes from './Todo.module.css';

function Todo(props) {
  const [modalAcvtive, setModalActive] = useState(false);

  let isCurrentTaskAvtive = () => {
    if (props.filterState.currentTasks) {
      return <button className={classes.button} onClick={() => (setModalActive(true))}>Добавить задание</button>;
    } else {
      return "";
    }
  }
  return (
    <div className={classes.container}>
      <FilterContainer />
      <TodoListContainer />
      {isCurrentTaskAvtive()}
      <Modal active={modalAcvtive} setActive={setModalActive} >
        <div className={classes.formContainer}>
          <form className={classes.form} action="">
          <label for="Имя">Название задачи: </label><br></br>
          <input id="Имя" type="text" className={classes.input} onChange={(event) => { props.updateNewTaskName(event.target.value) }} value={props.newTaskName}></input>
          <label for="Описание" >Описание задачи: </label><br></br>
          <input id="Описание" type="text" className={classes.input} onChange={(event) => { props.updateNewTaskDescription(event.target.value) }} value={props.newTaskDescription}></input>
          <label for="Приоритет">Приоритет: </label><br></br>
          <select id="Приоритет" onChange={(event) => { props.updateNewTaskPriority(event.target.value) }} value={props.newTaskPriority} >
            <option>Высокий</option>
            <option>Низкий</option>
          </select><br></br>
          <button className={classes.modal_button}  onClick={(e) => {
            e.preventDefault()
            props.addTask();
            setModalActive(false);
          }}>Добавить задание</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Todo;