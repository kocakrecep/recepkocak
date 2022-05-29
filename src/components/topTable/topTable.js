import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as contractAction from "../../redux/actions/contractAction";
import uploadsvg from "../../assets/img/upload.svg";
import insertsvg from "../../assets/img/plus.svg";
import settingsvg from "../../assets/img/cog.svg";
const TopTable = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listContractReducer);
  const [data, setData] = useState({
    hide: true,
    idcheck: true,
    contractcheck: true,
    offercheck: true,
    datacheck: true,
    dimensions: null,
  });

  useEffect(() => {
    dispatch(contractAction.listContracts());
  }, []);

  const handleChange = (event) => {
    dispatch(contractAction.listContracts(event.target.value));
  };

  const onChangeTable = (event) => {
    if (data.hide) {
      setData({ ...data,hide: false });
    } else {
      setData({ ...data,hide: true });
    }
  };

  const onChangeSutun = (event) => {
    let name = event.target.name;
    switch (name) {
      case "idcheck":
        setData({ ...data,[name]: !data.idcheck });
        break;
      case "contractcheck":
        setData({...data, [name]: !data.contractcheck });
        break;

      case "offercheck":
        setData({...data, [name]: !data.offercheck });
        break;
      case "datacheck":
        setData({ ...data,[name]: !data.datacheck });
        break;

      default:
        break;
    }
  };

  return (
    <div className="topTable">
      <select onChange={handleChange}>
        <option value="">Kontrat Seçiniz</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
      </select>
      <div className="tablesetting">
        <button className="btn">
          <img src={uploadsvg} alt="" />
        </button>
        <button className="btn" onClick={onChangeTable}>
          <img src={settingsvg} width="24px" alt="" />
        </button>
        <div className={data.hide ? "hide" : "tablepopupmenu"}>
          <div className="popupmenucontent">
            <ul>
              <li>
                <input
                  defaultChecked={data.idcheck}
                  onChange={onChangeSutun}
                  name="idcheck"
                  type="checkbox"
                />{" "}
                Id
              </li>
              <li>
                <input
                  defaultChecked={data.contractcheck}
                  onChange={onChangeSutun}
                  name="contractcheck"
                  type="checkbox"
                />{" "}
                Kontrat
              </li>
              <li>
                <input
                  defaultChecked={data.offercheck}
                  onChange={onChangeSutun}
                  name="offercheck"
                  type="checkbox"
                />{" "}
                Teklif
              </li>
              <li>
                <input
                  defaultChecked={data.datacheck}
                  onChange={onChangeSutun}
                  name="datacheck"
                  type="checkbox"
                />{" "}
                Data
              </li>
            </ul>
          </div>
        </div>
        <button className="btn">
          <img src={insertsvg} alt="" />
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {data.idcheck ? <th>Id</th> : ""}
            {data.contractcheck ? <th>Kontrat</th>: ""}
            {data.offercheck ? <th>Teklif</th>: ""}
            {data.datacheck ? <th>Data</th>: ""}
          </tr>
        </thead>
        <tbody>
          {list.map((contract, index) => (
            <tr key={contract.id} index={index}>
              {data.idcheck ? <td>{contract.id}</td> : ""}
              {data.contractcheck ? <td>{contract.contract}</td> : ""}
              {data.offercheck ? <td>{contract.offer}</td> : ""}
              {data.datacheck ? <td>{contract.data}</td> : ""}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopTable;
