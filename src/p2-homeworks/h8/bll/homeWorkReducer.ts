import { UserType } from "../HW8"


type ActionType = { type: 'sort', payload: 'up' | 'down' } |  { type: 'check', payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = {...state}
            return action.payload === 'up' 
            ? newState.sort() 
            : newState.reverse() 
        }
        case 'check': {
            // need to fix
            
            return state.filter(a => a.age >= action.payload)
        }
        default: return state
    }
}