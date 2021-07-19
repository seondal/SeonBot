const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("./config.json");
const fs = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`); //커맨드 폴더와 폴더에 있는 파일들 불러오기
  client.commands.set(command.name, command); //클라이언트에 commands 항목에 command.name과 command 지정
}

client.on("ready", () => {
  console.log("선봇 준비완료"); //봇 준비 콘솔에 출력
});

client.on("message", (msg) => {
  //바보
  if (msg.content === "김선영바보") {
    msg.reply("김선영 바보아니다");
  }

  if (
    msg.content === "송예원바보" ||
    msg.content === "오윤서바보" ||
    msg.content === "이유빈바보"
  ) {
    msg.reply("ㅇㅈ");
  }

  //공부
  // if (msg.content === "!공부시작") {
  //   msg.reply("ㅍㅇㅌ");
  //   var i = 0;
  //   var timer = setInterval(function () {
  //     i = i + 3;
  //     msg.reply(i + "초 공부하셨습니다.");
  //   }, 3000);
  // }

  // if (msg.content === "!공부끝") {
  //   clearInterval(timer);
  // }

  // if (msg.content === "!공부끝") {
  //   msg.reply("공부가 끝났습니다");
  // }

  //명령어
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/); //명령어 뒤에있는 인수들 가져오기
  const commandName = args.shift(); //명령어 이름 가져오기
  const command = client.commands.get(commandName);

  try {
    command.execute(msg, args); //커맨드 execute에서 msg 변수와 args변수 보내기
  } catch (error) {
    console.log(error);
  }
});

client.login(process.env.TOKEN);
