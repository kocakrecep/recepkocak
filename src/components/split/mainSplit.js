import React, { useState } from "react";
import Split from "react-split";
import TopSplit from "../split/topSplit";
import BottomSplit from "../split/bottomSplit";
import { useDispatch } from "react-redux";
import * as SplitAction from "../../redux/actions/splitAction";

const MainSplit = () => {
  const dispatch = useDispatch();
  const handleDrag = (event) => {
    localStorage.setItem("horizontal", event);
    dispatch(SplitAction.changeSplit());
  };
  return (
    <Split
      sizes={[60, 50]}
      minSize={400}
      expandToMin={false}
      gutterSize={10}
      gutterAlign="center"
      snapOffset={0}
      dragInterval={1}
      direction="vertical"
      cursor="row-resize"
      onDragEnd={handleDrag}
      className="mainsplit"
    >
      <TopSplit />
      <BottomSplit />
    </Split>
  );
};

export default MainSplit;
