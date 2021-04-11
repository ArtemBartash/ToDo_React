import classes from './Filter.module.css'

function Filter(props) {

  return (
    <>
      <ul className={classes.filterList}>
        <li className={props.filterState.currentTasks ? `${classes.active} ${classes.filterItem}` : `${classes.filterItem}`}>
          <a className={classes.filterLink} onClick={props.filterCurrentTask}>Текущие задачи</a>
        </li>
        <li className={props.filterState.completedTasks ? `${classes.active} ${classes.filterItem}` : `${classes.filterItem}`}>
          <a className={classes.filterLink} onClick={props.filterCompletedTask}>Выполенные задачи</a>
        </li>
        <li className={props.filterState.deletedTasks ? `${classes.active} ${classes.filterItem}` : `${classes.filterItem}`}>
          <a className={classes.filterLink} onClick={props.filterDeletedTask}>Удаленные задачи</a>
        </li>

      </ul>
    </>
  );
}

export default Filter;