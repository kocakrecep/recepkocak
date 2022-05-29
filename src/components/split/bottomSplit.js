import React from "react";
import Split from "react-split";
import BottomTable from "../bottomTable/bottomTable";
import BottomDetail from "../bottomDetail/bottomDetail";
import * as SplitAction from "../../redux/actions/splitAction";
import { useDispatch } from "react-redux";

const BottomSplit = () => {
  const dispatch = useDispatch();
  const handleDrag = (event) => {
    localStorage.setItem("bottom", event);
    dispatch(SplitAction.changeSplit());
  };

  return (
    <Split className="flex" sizes={[50, 50]} onDragEnd={handleDrag}>
      <BottomTable />
      <BottomDetail />
    </Split>
  );
};

export default BottomSplit;
