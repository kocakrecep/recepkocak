import React, { useState } from "react";
import Split from "react-split";
import TopTable from "../topTable/topTable";
import TopDetail from "../topDetail/topDetail";
import { useDispatch } from "react-redux";
import * as SplitAction from "../../redux/actions/splitAction";

const TopSplit = () => {
  const dispatch = useDispatch();

  const handleDrag = (event) => {
    localStorage.setItem("top", event);
    dispatch(SplitAction.changeSplit());
  };

  return (
    <Split className="flex" sizes={[60, 40]} onDragEnd={handleDrag}>
      <TopTable />
      <TopDetail />
    </Split>
  );
};

export default TopSplit;
