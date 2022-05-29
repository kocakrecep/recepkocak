import * as actionTypes from "./actionTypes";
import initialState from "../reducers/initialState";
import datas from "../../data/db.json";

export function getContractSuccess(payload) {
  return { type: actionTypes.LIST_CONTRACT, payload };
}

export function subListContract(payload) {
  return { type: actionTypes.LIST_NEW_CONTRACT, payload };
}

export function addContract(payload) {
  return { type: actionTypes.LIST_NEW_CONTRACT, payload };
}

export function listContracts(data) {
  return function (dispatch) {
    if (data) {
      dispatch(
        getContractSuccess(
          datas.contracts.filter((veri) => veri.contract === parseInt(data))
        )
      );
    } else {
      dispatch(getContractSuccess(datas.contracts));
    }
  };
}

export function newContractList(contract) {
  return function (dispatch) {
    if (contract) {
      initialState.subContracts.push(contract);
      const newContractList = initialState.subContracts;
      localStorage.setItem('subContract',JSON.stringify(newContractList))
    }
    const data=localStorage.getItem('subContract') ? localStorage.getItem('subContract') : JSON.stringify(initialState.subContracts)
    dispatch(subListContract(JSON.parse(data)));
  };
}
