import classes from './TodoListHeader.module.css'

const TodoListHeader = (props) => {
    return (
        <>
            <div className={classes.row}>
                <div className={classes.column}><span className={classes.text}>Название задачи</span></div>
                <div className={classes.column}><span className={classes.text}>Описание задачи</span></div>
                <div className={classes.column}><span className={classes.text}>Приоритет</span></div>
                <div className={classes.column}><span className={classes.text}>Действия</span></div>
            </div>
        </>
    );
}

export default TodoListHeader;