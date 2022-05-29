import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SplitAction from "../../redux/actions/splitAction"

const TopDetail = () => {
  const splitSize = useSelector((state) => state.splitChangeReducer);
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(SplitAction.changeSplit)
  },[])
  return (
    <div>
      <div className="setting">
        <h4 className="headsetting">Ayarlar</h4>
        <h4 className="headsetting">Yatay Pencere Değerleri:</h4>
        <h5 className="settingvalue">{splitSize.horizontal}</h5>
        <h4 className="headsetting">Üst Dikey Pencere Değerleri:</h4>
        <h5 className="settingvalue">{splitSize.top}</h5>
        <h4 className="headsetting">Alt Dikey Pencere Değerleri:</h4>
        <h5 className="settingvalue">{splitSize.bottom}</h5>
      </div>
    </div>
  );
};

export default TopDetail;
