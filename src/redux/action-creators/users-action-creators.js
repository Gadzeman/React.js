import {
    ON_USERS_LOADED,
    ON_ADD_TO_BAD,
    ON_REMOVE_FROM_BAD,
} from "../action-types/action-types"

const onUsersLoaded = (payload) => ({type: ON_USERS_LOADED, payload})
const onAddToBad = (payload) => ({type: ON_ADD_TO_BAD, payload})
const onRemoveFromBad = (payload) => ({type: ON_REMOVE_FROM_BAD, payload})

export {
    onUsersLoaded,
    onAddToBad,
    onRemoveFromBad,
}