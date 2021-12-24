import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataTC} from "./bll/dataReducer";
import {AppRootStateType} from "./bll/store";
import {median} from "./utils/median";
import {InputNumber} from "./InputNumber";
import {mean} from "./utils/mean";
import {getStandardDeviation} from "./utils/stndDeviation";
import {getMode} from "./utils/mode";

function App() {
  const dispatch = useDispatch();
  const data = useSelector<AppRootStateType, Array<number>>(state => state.data.data)

  useEffect(() => {
    dispatch(fetchDataTC("data-1234"));
  }, [dispatch])

  console.log(data)
    return ( <>
          {data && data ? (<div className="App">
            <div>
              <div className="meanWindow">{mean(data)}</div>
              <div className="medianWindow">{median(data)}</div>
              <div className="stdDeviationWindow">{getStandardDeviation(data)}</div>
              <div className="modeWindow">{getMode(data)}</div>
            </div>

            <div>
              <InputNumber/>
            </div>
          </div>) : null}

    </>



  );
}

export default App;
