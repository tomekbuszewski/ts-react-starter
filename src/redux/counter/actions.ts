export const INCREASE_COUNTER = "@@COUNTER/INCREASE_COUNTER";
export const DECREASE_COUNTER = "@@COUNTER/DECREASE_COUNTER";

export const increaseCounter = () => ({ type: INCREASE_COUNTER });
export const decreaseCounter = () => ({ type: DECREASE_COUNTER });
