import {
    INC_CUSTOM,
    INC,
    DEC,
    RESET,
    INC_CUSTOM_TWO,
    INC_TWO,
    DEC_TWO,
    RESET_TWO,

} from "../action-types/index"

const incCustomAction = (payload) => ({type: INC_CUSTOM, payload})
const incAction = () => ({type: INC})
const decAction = () => ({type: DEC})
const resetAction = () => ({type: RESET})
const incCustomActionTwo = (payload) => ({type: INC_CUSTOM_TWO, payload})
const incActionTwo = () => ({type: INC_TWO})
const decActionTwo = () => ({type: DEC_TWO})
const resetActionTwo = () => ({type: RESET_TWO})

export {
    incCustomAction,
    incAction,
    decAction,
    resetAction,
    incCustomActionTwo,
    incActionTwo,
    decActionTwo,
    resetActionTwo,
}