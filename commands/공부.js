module.exports = {
  name: "시작",
  execute(message) {
    message.reply(`ㅍㅇㅌ`);
    var i = 0;
    var timer = setInterval(function () {
      i = i + 1;
      message.reply(i + "초째 공부중");
    }, 1000);

    if (message.content === "끝") {
      message.reply("공부가 끝났습니다");
      clearInterval(timer);
    }
  },
};
