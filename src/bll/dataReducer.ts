import {Dispatch} from 'redux'
import getData from "../dal/api";

export type InitialStateType  = {
    data: number[] | [];
}



const initialState = {
    data: []
}


export const dataReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data:  action.data.data
            }

        case ADD_DATA:
            return {
                ...state,
                data: [...state.data, action.number]
            }


        default:
            return state
    }
}


const SET_DATA = "/data/SET-DATA"
const ADD_DATA = "/data/ADD-DATA"


export const setDataAC = (data: InitialStateType) => ({type: SET_DATA, data} as const)
export const addDataAC = (number: number) => ({type: ADD_DATA, number} as const)

// thunks
export const fetchDataTC = (data: string) => {
    return (dispatch: ThunkDispatch) => {
        getData(data)
            .then((res) => {
                dispatch(setDataAC(res))
            })
    }
}

export const addDataTC = (number: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(addDataAC(number))
    }
}


// types
export type SetDataActionType = ReturnType<typeof setDataAC>;
export type AddDataActionType = ReturnType<typeof addDataAC>;
type ActionsType =
    | SetDataActionType
    | AddDataActionType
type ThunkDispatch = Dispatch<ActionsType>
