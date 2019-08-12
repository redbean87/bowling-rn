export const randomBool = () => randomNum(1);

export const randomNum = max => {
  return Math.floor(Math.random() * (max + 1));
};
