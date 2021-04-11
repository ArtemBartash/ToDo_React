import FilterContainer from '../Filter/FilterContainer';
import TaskItem from './TaskItem/TaskItem';
import classes from './TodoList.module.css'
import TodoListHeader from './TodoListHeader/TodoListHeader';


function TodoList(props) {
  
  let currentTasks = props.tasks.filter((taks) => (!taks.isDelete && !taks.isComplete));

  let deletedTasks = props.tasks.filter((taks) => (taks.isDelete));

  let completedTask = props.tasks.filter((taks) => (taks.isComplete));

  let currentElements = currentTasks
    .map((task) => <TaskItem
      deleteTask={() => props.deleteTask(task.id)}
      completeTask={() => props.completeTask(task.id)}
      isActiveCurrentTasks={props.filterState.currentTasks}
      isActiveDeletedTasks={props.filterState.deletedTasks}
      isEdit={task.isEdit}
      editTask={() => props.editTask(task.id)}
      taskName={task.name}
      taskDescription={task.description}
      taskPriority={task.priority}
      udpateEditName={(event) => props.udpateEditName(event.target.value, task.id)}
      udpateEditDescription={(event) => props.udpateEditDescription(event.target.value, task.id)}
      udpateEditPriority={(event) => props.udpateEditPriority(event.target.value, task.id)}
      saveEditTask={() => props.saveEditTask(task.name, task.id)}
    />);

  let deleteElements = deletedTasks.map((task) => <TaskItem
    taskName={task.name}
    taskDescription={task.description}
    taskPriority={task.priority}
    recoverTask={() => props.recoverTask(task.id)}
    isActiveDeletedTasks={props.filterState.deletedTasks}
  />);

  let completeElements = completedTask.map((task) => <TaskItem
    taskName={task.name}
    taskDescription={task.description}
    taskPriority={task.priority}
    isActiveCompletedTasks={props.filterState.completedTasks}
    isEdit={task.isEdit}
    editTask={() => props.editTask(task.id)}
    deleteTask={() => props.deleteTask(task.id)}
    udpateEditName={(event) => props.udpateEditName(event.target.value, task.id)}
    udpateEditDescription={(event) => props.udpateEditDescription(event.target.value, task.id)}
    udpateEditPriority={(event) => props.udpateEditPriority(event.target.value, task.id)}
    saveEditTask={() => props.saveEditTask(task.name, task.id)} />);

  let filterContent = () => {
    if (props.filterState.currentTasks) {
      return currentElements;
    } else if (props.filterState.deletedTasks) {
      return deleteElements;
    } else if (props.filterState.completedTasks) {
      return completeElements;
    }
  }
  

  return (
    <div className={classes.container}>
      <TodoListHeader/>
      {filterContent()}
    </div> 
      
  );
}

export default TodoList;