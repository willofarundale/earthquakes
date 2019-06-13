export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_EARTHQUAKES':
            return action.payload;

        default:
            return state;
    }
};