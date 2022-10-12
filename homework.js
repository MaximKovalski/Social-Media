function User(userName) {
  (this.theNameOfTheUser = userName),
    (this.followers = []),
    (this.ifollow = []),
    (this.followAfter = function (member) {
      this.ifollow.push(member);
      member.followers.push(this);
    });

  this.sendMessage = function (SendUpdate) {
    this.followers.forEach((someone) => {
      someone.getMessage(
        someone.theNameOfTheUser +
          " got a message from " +
          this.theNameOfTheUser +
          ": " +
          SendUpdate
      );
    });
  };

  this.getMessage = function (messageToFollowers) {
    console.log(messageToFollowers);
  };
}
let userNumber1 = new User("Boss");
let userNumber2 = new User("Slayer");
let userNumber3 = new User("Xerox");
let userNumber4 = new User("Test");

userNumber1.followAfter(userNumber2);
userNumber1.followAfter(userNumber4);
userNumber2.followAfter(userNumber1);
userNumber3.followAfter(userNumber1);
userNumber3.followAfter(userNumber4);
userNumber4.followAfter(userNumber1);
userNumber4.followAfter(userNumber2);

userNumber1.sendMessage("Nice Friday");
userNumber2.sendMessage("Lol");
userNumber3.sendMessage("Computer Management");
userNumber4.sendMessage("Homework :(");
