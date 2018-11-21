import {PATH_SELECTED} from "../actionCreators/types";

const initialState = {
    paths: [
        {
            id: 1,
            name: 'name of the path 1',
            shortDescription: 'short description',
            fullDescription: 'fullDescription',
            googleMapsUrl: 'url google map',
            pathLength: 'path length is 100m',
        },
        {
            id: 2,
            name: 'name of the path 2',
            shortDescription: 'short description',
            fullDescription: 'fullDescription',
            googleMapsUrl: 'url google map',
            pathLength: 'path length is 100m',
        },
        {
            id: 3,
            name: 'name of the path 3',
            shortDescription: 'short description',
            fullDescription: 'fullDescription',
            googleMapsUrl: 'url google map',
            pathLength: 'path length is 100m',
        }
    ]};

export default (state = initialState, action) => {
    switch (action.type) {
        case PATH_SELECTED:
            return {
                ...state,
                active: action.payload
            };
        default:
            return state;
    }
};