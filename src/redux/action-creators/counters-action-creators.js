import {
    INC_ONE,
    DEC_ONE,
    UPDATE_ONE,
    INC_TWO,
    DEC_TWO, UPDATE_TWO,
} from "../action-types/action-types"

const incOne = () => ({type: INC_ONE})
const decOne = () => ({type: DEC_ONE})
const updateOne = (payload) => ({type: UPDATE_ONE, payload})
const incTwo = () => ({type: INC_TWO})
const decTwo = () => ({type: DEC_TWO})
const updateTwo = (payload) => ({type: UPDATE_TWO, payload})

export {
    incOne,
    decOne,
    updateOne,
    incTwo,
    decTwo,
    updateTwo,
}