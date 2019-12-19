
export const CounterReducer = (count = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            let incrementValue = parseInt(action.user_input);
            if (incrementValue < action.quantity_default) {
                incrementValue = incrementValue + 1;
            }
            return incrementValue;
        case 'DECREMENT':
            let decrementValue = parseInt(action.user_input);
            if (decrementValue > 1) {
                decrementValue = decrementValue - 1;
            }
            return decrementValue;
        default:
            return action.user_input;
    }
}