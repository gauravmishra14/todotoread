import React, {useState} from "react";
import { ITodoListItem } from "utils/InterfacePool";

const TodoListItem = (props: ITodoListItem) => {
  const { title, subTitle, time, icon } = props;
  const [isComplete, setIsComplete] = useState(false);
  const toggle = () => setIsComplete(!isComplete);
  return (
    <React.Fragment>
      <div className="todo-wrapper">
        <div className="effect todo-wrap" onClick={toggle}>
          <div className="data">
            <div className="title">{title && title}</div>
            <div className="sub-title">{subTitle && subTitle}</div>
            <div className="time">{time && time}</div>
          </div>
          <div className="img-section">
            <img src={icon && icon} alt="icon" className="todo-icon" />
          </div>
        </div>
        {/* <div className="completed">Completed</div> */}
      </div>
    </React.Fragment>
  );
};

export default TodoListItem;
