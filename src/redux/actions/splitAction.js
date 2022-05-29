
import * as actionTypes from "./actionTypes";

export function changeSplit() {
  const horizontal=localStorage.getItem('horizontal')?localStorage.getItem('horizontal'):" ";
  const top=localStorage.getItem('top')?localStorage.getItem('top'):" ";
  const bottom=localStorage.getItem('bottom')?localStorage.getItem('bottom'):" ";
  const splitSize={top:top,bottom:bottom,horizontal:horizontal}
  return { type: actionTypes.CHANGE_SPLIT, payload:splitSize };
}


