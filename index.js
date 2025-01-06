const bcrypt = require("bcryptjs");

const genHash = (string) => bcrypt.hashSync(String(string), 12);
const compareHash = (string, hashstring) =>
  bcrypt.compareSync(String(string), hashstring);

const hash = genHash("pratham");
console.log({ hash });

const checkPw = compareHash("pratham", hash);
console.log(checkPw);
