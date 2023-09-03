export type AuthResType={
    data: StateType,
    "messages": string,
    "fieldsErrors": string,
    "resultCode": number
}

export type StateType = {
    id: number | null,
    login: string | null,
    email: string | null
    isFetching: boolean,
    isAuth:boolean
}
type ActionType = SetUserDateAT

let initialState: StateType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth:false
};
export const authReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET-USER-DATE': {
            return {...state, ...action.state,isAuth:true,isFetching:true};
        }
        default:
            return state;
    }
};

export const setUserDateAC = (state: StateType) => {
    return {type: 'SET-USER-DATE', state} as const;
};
type SetUserDateAT = ReturnType<typeof setUserDateAC>