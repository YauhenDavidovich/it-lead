import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataTC} from "./bll/dataReducer";
import {AppRootStateType} from "./bll/store";
import {median} from "./utils/median";
import {InputNumber} from "./InputNumber";
import {mean} from "./utils/mean";
import {getStandardDeviation} from "./utils/stndDeviation";
import {getMode, getMultiMode} from "./utils/mode";

function App() {
    const dispatch = useDispatch();
    const data = useSelector<AppRootStateType, Array<number>>(state => state.data.data)


    console.log(getMultiMode([4, 5, 6, 6, 3, 6, 9, 9, 9, 7, 7, 7 ]))

    useEffect(() => {
        dispatch(fetchDataTC("data-1234"));
    }, [dispatch])

const handleDataRequest = (data: string) => {
    dispatch(fetchDataTC(data));
}
    return (<>
            {data && data ? (
                <div className="App">
                    <div>
                        <div className="meanWindow">{mean(data)}</div>
                        <div className="medianWindow">{median(data)}</div>
                        <div className="stdDeviationWindow">{getStandardDeviation(data)}</div>
                        <div className="modeWindow">{getMode(data)}</div>
                    </div>

                    <div>
                        <InputNumber/>
                    </div>
                    <button onClick={()=>handleDataRequest("data-1234")}>Reload JSON-1234 Data</button>
                    <button onClick={()=>handleDataRequest("data-4321")}>Reload JSON-4321 Data</button>

                    <div>

                    </div>
                </div>) : null}

        </>


    );
}

export default App;
