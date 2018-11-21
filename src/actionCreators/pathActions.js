import {PATH_SELECTED} from "./types";

export const selectPath = (path) => {
    return {
        type: PATH_SELECTED,
        payload: path
    }
};