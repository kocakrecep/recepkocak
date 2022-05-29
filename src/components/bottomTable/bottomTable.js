import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../form/form";
import * as contractAction from "../../redux/actions/contractAction";

const BottomTable = () => {
  const [visible, setVisible] = useState(false);

  const contractList = useSelector((state) => state.listNewContractReducer);

  const dispatch = useDispatch();
  const formGoster = (event) => {
    setVisible(true);
  };
  useEffect(() => {
    dispatch(contractAction.newContractList());
    localStorage.setItem('subContract',JSON.stringify(contractList))
  },[]);
  return (
    <div className="bottomTable">
      <table>
        <tbody>
          {contractList.map((contract, index) => (
            <tr key={contract.id} index={index}>
              <td>{contract.contract}</td>
              <td>{contract.offer}</td>
              <td>{contract.datas}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <tfoot>
          <tr>
            <td colSpan={3}>
              {visible ? <Form /> : null}
              <button onClick={formGoster}>Yeni Ekle</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BottomTable;
