import React from "react";
import { IToreadListItem } from "utils/InterfacePool";
import chevron from "assets/chevron.png";

const ToreadListItem = (props: IToreadListItem) => {
  const { title, num, icon } = props;
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="toread-wrapper">
          <div className="content-wrap effect">{title && title}<span><img src={chevron} alt="chevron"/></span></div>
          <div className="img-wrap effect">
  <span className="item-num">{num && num}</span>
            <img src={icon && icon} alt="img" className="image" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToreadListItem;
