import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as contractAction from "../../redux/actions/contractAction";

const Form = () => {
  const [data, setData] = useState({
    id: "",
    contract: "",
    offer: "",
    datas: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(contractAction.newContractList(data));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input name="id" onChange={handleChange} type="number"></input>
      <input name="contract" onChange={handleChange} type="text"></input>
      <input name="offer" onChange={handleChange} type="text"></input>
      <input name="datas" onChange={handleChange} type="text"></input>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default Form;
