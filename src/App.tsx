import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataTC} from "./bll/dataReducer";
import {AppRootStateType} from "./bll/store";
import {median} from "./utils/median";
import {InputNumber} from "./InputNumber";
import {mean} from "./utils/mean";
import {getStandardDeviation} from "./utils/stndDeviation";
import {getMultiMode} from "./utils/mode";

function App() {
    const dispatch = useDispatch();
    const data = useSelector<AppRootStateType, Array<number>>(state => state.data.data)


    useEffect(() => {
        dispatch(fetchDataTC("data-1234"));
    }, [dispatch])

    const handleDataRequest = (data: string) => {
        dispatch(fetchDataTC(data));
    }
    return (<>
            {data && data ? (
                <div className="App">
                    <div className="header">
                        <div className="wrapper">
                            <div className="headerWrapper">
                                <div className="circleRow">
                                    <div className="circle">
                                        <div className="counterTitle"><h2>Meant</h2></div>
                                        <div className="counterValue">{mean(data)}</div>
                                    </div>
                                    <div className="circle">
                                        <div className="counterTitle"><h2>Median</h2></div>
                                        <div className="counterValue">{median(data)}</div>
                                    </div>
                                    <div className=" circle">
                                        <div className="counterTitle"><h2>Std Deviation</h2></div>
                                        <div className="counterValue">{getStandardDeviation(data)}</div>
                                    </div>
                                    <div className=" circle">
                                        <div className="counterTitle"><h2>Std Deviation</h2></div>
                                        <div className="counterValue mode">
                                            <div>{getMultiMode(data).map((mode, index) => {
                                                return (<div key={index}>{mode}</div>)
                                            })}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <InputNumber/>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="controlsBody">
                        <div className="wrapper controls">
                            <div className="controlsWrapper">
                                <button onClick={() => handleDataRequest("data-1234")}>Reload JSON-1234 Data</button>
                                <button onClick={() => handleDataRequest("data-4321")}>Reload JSON-4321 Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

        </>


    );
}

export default App;
