const Button = ({name, addTask}) => {
  return (
    <>
      <button onClick={addTask}>{name}</button>
    </>
  );
}

export default Button;