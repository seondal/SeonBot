// const ytdl = require('ytdl-core');
// const yts = require('yt-search')
// const Discord = require('discord.js');
// const { execute } = require('./선봇');
// const Playlist = new Discord.Collection()

// module.exports = {
//   name: '음악',
//   async execute(message, args){
//     var PlaylistArray = new Array()
//     const MGI = message.guild.id
//     if(!Playlist.has(GMI)) Playlist.set(MGI, new Discord.Collection())
//     else PlaylistArray = Playlist.get(MGI),get("musicplaylist")
//     const MPL = Playlist.get(MGI).set("musicplaylist")
//     if(MPL == null) Playlist.get(MGI).set("musicplaylist",PlaylistArray)
//     const status = message.guild.voice?.connection?.status
//     const client_voice_status = message.guild.voice?.connection?.speaking?.bitfield
//     const client_voice = message.guild.voice
//     if(args[0] == "재생"){
//       const voiceChannel = message.member.voice.voiceChannel
//       IsJoinVoiceChannel(message)
//       if(status != null){
//         if(voiceChannel.id != client_voice?.channel.id){
//           if(client_voice_status == 1 || MPL[0] != null){
//             return message.reply("오류 : 노래가 다른채널에서 재생중이거나 이미 플레이리스트에 재생곡이 담겨있습니다.")
//           }
//         }
//       }
//       if(!args[1]){
//         if(MPL[0] != null){
//           if(status == null){
//             await voiceChannel.join()
//             return music_play(message)
//           } else if(client_voice_status == 0) return music_play(message)
//           else return message.reply("오류 : 노래가 이미 재생되고 있습니다.")
//         }else return message.reply("오류 유튜브에서 찾을 노래 제목이나 url을 입력해주세요")
//       }
//     }
//   }
// }
