import {Dispatch} from 'redux'
import getData from "../dal/api";

export type InitialStateType  = {
    data: number[];
}

const initialState = {
    data: []
}

export const dataReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-DATA':
            return {
                ...state,
                data:  action.data.data
            }


        default:
            return state
    }
}

export const setDataAC = (data: InitialStateType) => ({type: 'SET-DATA', data} as const)

// thunks
export const fetchDataTC = (data: string) => {
    return (dispatch: ThunkDispatch) => {
        getData(data)
            .then((res) => {
                dispatch(setDataAC(res))
            })
    }
}




// types
export type SetDataActionType = ReturnType<typeof setDataAC>;
type ActionsType =
    | SetDataActionType
type ThunkDispatch = Dispatch<ActionsType>
