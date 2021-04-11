import React from 'react';
import { addTaskActionCreator, updateNewTaskNameAC, updateNewTaskDescriptionAC, updateNewTaskPriorityAC } from "../../redux/task-reducer";
import Todo from "./Todo";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newTaskName: state.tasks.newTaskName,
    newTaskDescription: state.tasks.newTaskDescription,
    newTaskPriority: state.tasks.newTaskPriority,
    filterState: state.filter.filterState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewTaskName: (text) => {
      dispatch(updateNewTaskNameAC(text));
    },
    updateNewTaskDescription: (text) => {
      dispatch(updateNewTaskDescriptionAC(text));
    },
    updateNewTaskPriority: (text) => {
      dispatch(updateNewTaskPriorityAC(text))
    },
    addTask: () => {
      dispatch(addTaskActionCreator());
    },
  }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer;