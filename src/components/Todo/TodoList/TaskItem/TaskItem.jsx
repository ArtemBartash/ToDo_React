import classes from './TaskItem.module.css'

function TaskItem(props) {
  const filterButtons = () => {
    if (props.isActiveCurrentTasks) {
      return (
        <div className={classes.column}>
          <button onClick={props.editTask} className={!props.isEdit ? null : classes.invisible}>Редактировать</button>
          <button onClick={props.completeTask} className={!props.isEdit ? null : classes.invisible}>Выполнено</button>
          <button onClick={props.deleteTask} className={!props.isEdit ? null : classes.invisible}>Удалить</button>
        </div>
      )
    } else if (props.isActiveDeletedTasks) {
      return (
        <div className={classes.column}>
          <button onClick={props.recoverTask}>Востановить</button>
        </div>
      )
    } else if (props.isActiveCompletedTasks) {
      return (
        <div className={classes.column}>
          <button onClick={props.editTask} className={!props.isEdit ? null : classes.invisible}>Редактировать</button>
          <button onClick={props.deleteTask} className={!props.isEdit ? null : classes.invisible}>Удалить</button>
        </div>
      )
    }
  }
  return (
    <div className={classes.row}>
      <div className={classes.column}>{props.isEdit ? <input value={props.taskName} onChange={props.udpateEditName}></input> : props.taskName}</div>
      <div className={classes.column}>{props.isEdit ? <input value={props.taskDescription} onChange={props.udpateEditDescription}></input> : props.taskDescription}</div>
      <div className={classes.column}>{props.isEdit ?
        <select value={props.taskPriority} onChange={props.udpateEditPriority} >
          <option>Высокий</option>
          <option>Низкий</option>
        </select> : props.taskPriority}</div>
      <div>{props.isEdit ? <button onClick={props.saveEditTask}>ok</button> : null}
        {filterButtons()}
      </div>
    </div>
  );
}

export default TaskItem;