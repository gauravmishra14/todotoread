import React from "react";

import { TodoItemData } from "utils/Constants";
import TodoListItem from "components/TodoListItem";

const Todos = () => {
  return (
    <React.Fragment>
      {TodoItemData.map((item, key) => {
        return (
          <TodoListItem
            key={key}
            title={item.title}
            subTitle={item.subTitle}
            time={item.time}
            icon={item.icon}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Todos;
