const initState = {
    number: 12,
};
const EVEN = 'even';
const ODD = 'odd';

export const changeEven = (number) => ({
    type: EVEN,
    number: number,
})

export const changeOdd = (number) => ({
    type: ODD,
    number: number,
})

const reducer = (state = initState, action) => {
    switch(action.type) {
        case EVEN:
            return {...state, number: action.number};
        case ODD: 
            return {...state, number: action.number};
        default:
            return state;
    }
}

export default reducer;