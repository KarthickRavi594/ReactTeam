export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            let incrementValue = parseInt(action.user_input);
            if (incrementValue < action.default_value) {
                incrementValue = incrementValue + 1;
            }
            return incrementValue;


        case "DECREMENT":
            let decrementValue = parseInt(action.user_input);
            if (decrementValue > 1) {
                decrementValue = decrementValue - 1;
            }
            return decrementValue;
        // case "ADDTOCART":



        default:
            return action.user_input;

    }
}