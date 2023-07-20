export const Task = ({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}) => {
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const doneTaskFuncOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  const resultClassname = completed ? "text-decoration-line-through" : "";

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {/*
      HINTS: if task is completed, below "span" will show like this 
        <span className="text-decoration-line-through">{title}</span>
        But if task is not completed : 
        <span>{title}</span>
      */}
      <span className={resultClassname}>{title}</span>
      <button className="btn btn-success" onClick={doneTaskFuncOnClick}>
        Done
      </button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
};
