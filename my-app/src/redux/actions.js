export const inc = () => ({ type: "INCREMENT" });
export const dec = () => ({ type: "DECREMENT" });
export const res = () => ({ type: "RESTART" });
export const ran = () => ({
  type: "RANDOM",
  payload:
    Math.floor(Math.random() * 10) ** 2 +
    Math.floor(Math.random() * 10) ** 2 +
    Math.floor(Math.random() * 10) ** 2 -
    Math.floor(Math.random() * 10) ** 2 +
    Math.floor(Math.random() * 10) ** 3,
});
