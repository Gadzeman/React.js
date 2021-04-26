import {
    INC_COUNTER,
    DEC_COUNTER
} from "../action-types/counter-action-types";

const incCounter = () => ({type: INC_COUNTER})
const decCounter = () => ({type: DEC_COUNTER})

export {
    incCounter,
    decCounter
}