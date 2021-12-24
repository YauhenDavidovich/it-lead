import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataTC} from "./bll/dataReducer";
import {AppRootStateType} from "./bll/store";
import {median} from "./utils/median";
import {InputNumber} from "./InputNumber";
import {mean} from "./utils/mean";

function App() {
  const dispatch = useDispatch();
  const data = useSelector<AppRootStateType, Array<number>>(state => state.data.data)

  useEffect(() => {
    dispatch(fetchDataTC("data-1234"));
  }, [dispatch])

  console.log(data)
    return (
    <div className="App">
      <div>
        <div className="meanWindow">{mean(data)}</div>
        <div className="medianWindow">{median(data)}</div>
        <div className="stdDeviationWindow"></div>
        <div className="modeWindow"></div>
      </div>

      <div>
        <InputNumber/>
      </div>
    </div>

  );
}

export default App;
