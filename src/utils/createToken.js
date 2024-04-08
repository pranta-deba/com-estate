export const createNumToToken = (id) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQESTUVWXYZ";
  const numbers = "0123456789";
  let token = "";
  for (let i = 0; i < 8; i++) {
    const key1 =
      lowercase[Math.round(Math.random() * uppercase.length) + 1] || "a";
    const key2 = numbers[Math.round(Math.random() * numbers.length) + 1] || "O";
    const key4 =
      uppercase[Math.round(Math.random() * uppercase.length) + 1] || "@";
    const generate = `${key1}${key2}${key4}`;
    if (i === 4) {
      token += "_" + id + "_";
    }
    token += generate;
  }
  return token;
};
export const tokenToNum = (token) => {
  const num = parseInt(token.split("_")[1]);
  return num;
};
