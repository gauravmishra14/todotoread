import React from "react";
import { ToreadItemData } from "utils/Constants";
import ToreadListItem from "./ToreadListItem";

const Toreads = () => {
  return (
    <React.Fragment>
      {ToreadItemData.map((item, key) => {
        return (
          <ToreadListItem
            title={item.title}
            num={item.num}
            icon={item.icon}
            key={key}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Toreads;
