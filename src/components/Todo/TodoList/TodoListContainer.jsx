import React from 'react';
import {addTaskActionCreator, addDeleteTaskActionCreator, addCompleteTaskActionCreator, editTaskActionCreator, saveEditTaskAC, recoverTaskAC, updateNewTaskNameAC, updateNewTaskDescriptionAC, updateEditTaskNameAC, updateNewTaskPriorityAC, updateEditTaskDescriptionAC, updateEditTaskPriorityAC} from "../../../redux/task-reducer";
import TodoList from "../TodoList/TodoList";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasksData,
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
        deleteTask: (id) => {
            dispatch(addDeleteTaskActionCreator(id))
        },
        completeTask: (id) => {
            dispatch(addCompleteTaskActionCreator(id))
        },
        editTask: (id) => {
            dispatch(editTaskActionCreator(id))
        },
        udpateEditName: (text, id) => {
            dispatch(updateEditTaskNameAC(text, id))
        },
        udpateEditDescription: (text, id) => {
            dispatch(updateEditTaskDescriptionAC(text, id))
        },
        udpateEditPriority: (text, id) => {
            dispatch(updateEditTaskPriorityAC(text, id))
        },
        saveEditTask: (name, id) => {
            dispatch(saveEditTaskAC(name, id))
        },
        recoverTask: (id) => {
            dispatch(recoverTaskAC(id))
        },
    }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;