export const inc = () => ({ type: "INCREMENT" });
export const dec = () => ({ type: "DECREMENT" });
export const res = () => ({ type: "RESTART" });
export const ran = (randomValueOne, randomValueTwo, randomValueTHree) => ({
  type: "RANDOM",
  payload:
    randomValueOne * randomValueTwo ** 2 +
    randomValueTHree * randomValueTwo ** 2 +
    randomValueOne * randomValueTHree ** 2,
});