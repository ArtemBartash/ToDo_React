const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_NAME = 'UPDATE-NEW-TASK-NAME';
const DELETE_TASK = 'DELETE-TASK';
const COMPLETE_TASK = 'COMPLETE-TASK';
const EDIT_TASK = 'EDIT-TASK';
const UPDATE_EDIT_TASK_NAME = " UPDATE-EDIT-TASK-NAME";
const SAVE_EDIT_TASK = "SAVE-EDIT-TASK";
const RECOVER_TASK = "RECOVER_TASK";
const UPDATE_NEW_TASK_DESCRIPTION = "UPDATE_NEW_TASK_DESCRIPTION";
const UPDATE_NEW_TASK_PRIORITY = 'UPDATE_NEW_TASK_PRIORITY';
const UPDATE_EDIT_TASK_DESCRIPTION = 'UPDATE_EDIT_TASK_DESCRIPTION';
const UPDATE_EDIT_TASK_PRIORITY = 'UPDATE_EDIT_TASK_PRIORITY';

let initialState = {
    tasksData: [
        { id: 0, name: 'Read Redux', description: 'yoyoyoy', priority: 'Высокий', isDelete: false, isComplete: false, isEdit: false },
        { id: 1, name: 'Learning English', description: 'yoyoyoy', priority: 'Низкий', isDelete: false, isComplete: false, isEdit: false },
    ],
    newTaskName: '',
    newTaskDescription: '',
    newTaskPriority: 'Высокий'
};

const tasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                id: state.tasksData.length,
                name: state.newTaskName,
                priority: state.newTaskPriority,
                description: state.newTaskDescription,
                isDelete: false,
                isComplete: false,
                isEdit: false
            };
            return {
                ...state,
                tasksData: [...state.tasksData, newTask],
                newTaskName: '',
                newTaskDescription: ''
            }
        case UPDATE_NEW_TASK_NAME: {
            return {
                ...state,
                newTaskName: action.newName
            };
        }
        case UPDATE_NEW_TASK_DESCRIPTION: {
            return {
                ...state,
                newTaskDescription: action.newDescription
            };
        }
        case UPDATE_NEW_TASK_PRIORITY: {
            return {
                ...state,
                newTaskPriority: action.newPriority
            };
        }
        case UPDATE_EDIT_TASK_NAME: {
            return {
                ...state,
                tasksData: state.tasksData.map(task => {
                    if (task.id === action.editID) {
                        return { ...task, name: action.editText }
                    }
                    return task
                })
            }
        }
        case UPDATE_EDIT_TASK_DESCRIPTION: {
            return {
                ...state,
                tasksData: state.tasksData.map(task => {
                    if (task.id === action.editID) {
                        return { ...task, description: action.editText }
                    }
                    return task
                })
            }
        }
        case UPDATE_EDIT_TASK_PRIORITY: {
            return {
                ...state,
                tasksData: state.tasksData.map(task => {
                    if (task.id === action.editID) {
                        return { ...task, priority: action.editText }
                    }
                    return task
                })
            }
        }
        case DELETE_TASK:
            return {
                ...state,
                tasksData: state.tasksData.map(task => {
                    if (task.id === action.deleteID) {
                        return { ...task, isDelete: true, isComplete: false }
                    }
                    return task
                })
            };
        case COMPLETE_TASK:
            return {
                ...state,
                tasksData: state.tasksData.map(task => {
                    if (task.id === action.completeID) {
                        return { ...task, isComplete: true }
                    }
                    return task
                })
            };
        case EDIT_TASK:
            return {
                ...state,
                tasksData: state.tasksData.map(task => {
                    if (task.id === action.editID) {
                        return { ...task, isEdit: true }
                    }
                    return task
                })
            };
        case SAVE_EDIT_TASK:
            return {
                ...state,
                tasksData: state.tasksData.map(task => {
                    if (task.id === action.editID) {
                        return { ...task, isEdit: false, name: action.name }
                    }
                    return task
                })
            };
        case RECOVER_TASK: {
            return {
                ...state,
                tasksData: state.tasksData.map(task => {
                    if (task.id === action.recoverID) {
                        return { ...task, isDelete: false }
                    }
                    return task
                })
            };;
        }
        default:
            return state;
    }
}


export const addTaskActionCreator = () => ({ type: ADD_TASK })

export const updateNewTaskNameAC = (text) =>
    ({ type: UPDATE_NEW_TASK_NAME, newName: text })

export const updateNewTaskDescriptionAC = (text) =>
    ({ type: UPDATE_NEW_TASK_DESCRIPTION, newDescription: text })

export const updateNewTaskPriorityAC = (text) =>
    ({ type: UPDATE_NEW_TASK_PRIORITY, newPriority: text })

export const updateEditTaskNameAC = (text, id) =>
    ({ type: UPDATE_EDIT_TASK_NAME, editText: text, editID: id })

export const updateEditTaskDescriptionAC = (text, id) =>
    ({ type: UPDATE_EDIT_TASK_DESCRIPTION, editText: text, editID: id })

export const updateEditTaskPriorityAC = (text, id) =>
    ({ type: UPDATE_EDIT_TASK_PRIORITY, editText: text, editID: id })

export const addDeleteTaskActionCreator = (id) => ({ type: DELETE_TASK, deleteID: id })

export const addCompleteTaskActionCreator = (id) => ({ type: COMPLETE_TASK, completeID: id })

export const editTaskActionCreator = (id) => ({ type: EDIT_TASK, editID: id })

export const saveEditTaskAC = (name, id) => ({ type: SAVE_EDIT_TASK, name, editID: id, })

export const recoverTaskAC = (id) => ({ type: RECOVER_TASK, recoverID: id, })

export default tasksReducer;