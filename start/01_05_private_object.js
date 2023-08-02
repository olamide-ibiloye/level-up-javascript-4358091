// Write your code here
class User {
  constructor(userName, password, age) {
    this.userName = userName;
    this._password = password;
    this.age = age;
  }
}

const Alex = new User((userName = "Alex"), (password = "secret"), (age = 30));

console.log(Alex.password);
