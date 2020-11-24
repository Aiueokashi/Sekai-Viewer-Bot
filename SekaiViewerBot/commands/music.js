const { Command } = require('discord-akairo');
const fetch = require('node-fetch');
const Discord = require('discord.js');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
module.exports = class MusicDataCommand extends Command {
	constructor() {
		super('music', {
			aliases: ['music'],
			channel: 'guild',
			ownerOnly: true
		});
	}

	exec(message) {
		var songid = 0;
		var songname = 'a';
		if (!message.channel.name.startsWith('bot-')) return;
		const prefix = process.env.SEKAI_PREFIX;
		const [command, args] = message.content.slice(prefix.length + 6).split(' ');
		if (!args) {
			return message.channel.send(
				new Discord.MessageEmbed()
					.setTitle('Usage:')
					.setDescription(`${prefix} music <music name>`)
					.setTimestamp()
			);
		} else {
			async function postData(url = '', data = {}) {
				const response = await fetch(url, {});
				return response.json();
			}
			var newargs = args
				.toLowerCase()
				.replace('tell-your-world', 0)
				.replace('ロキ', 1)
				.replace('roki', 1)
				.replace('テオ', 2)
				.replace('teo', 2)
				.replace('ヒバナ-reloaded-', 3)
				.replace('ヒバナ', 3)
				.replace('hibana', 3)
				.replace('ハッピーシンセサイザ', 4)
				.replace('happy-synthetizer', 4)
				.replace('ビバハピ', 5)
				.replace('viva-happy', 5)
				.replace('nostalogic', 6)
				.replace('ノスタロジック', 6)
				.replace('アスノヨゾラ哨戒班', 7)
				.replace('asu-no-yozora-shoukaihan', 7)
				.replace('charles', 8)
				.replace('シャルル', 8)
				.replace('dappou-rock', 9)
				.replace('脱法ロック', 9)
				.replace('hated-by-life-itself', 10)
				.replace('命に嫌われている', 10)
				.replace('劣等上等', 11)
				.replace('bring-it-on!', 11)
				.replace('bring-it-on', 11)
				.replace('just-be-friends', 12)
				.replace('ドクターファンクビート', 13)
				.replace('doctor=funk-beat', 13)
				.replace('doctor-funk-beat', 13)
				.replace('miracle-paint', 14)
				.replace('ミラクルペイント', 14)
				.replace('ブリキノダンス', 15)
				.replace('buriki-no-dance', 15)
				.replace('スイートマジック', 16)
				.replace('sweet-magic', 16)
				.replace('next-nest', 17)
				.replace('ネクストネスト', 17)
				.replace('hand-in-hand', 18)
				.replace('ハンドインハンド', 18)
				.replace('39みゅーじっく！', 19)
				.replace('39みゅーじっく!', 19)
				.replace('39-music!', 19)
				.replace('39-music', 19)
				.replace('メルト', 20)
				.replace('melt', 20)
				.replace('world-is-mine', 21)
				.replace('ワールドイズマイン', 21)
				.replace('the-disappearance-of-hatsune-miku', 22)
				.replace('初音ミクの焼失', 22)
				.replace('blessing', 23)
				.replace('セカイはまだ始まってすらいない', 24)
				.replace('the-world-hasn’t-even-started-yet', 24)
				.replace('becoming-potatoes', 25)
				.replace('potatoになっていく', 25)
				.replace('ready-steady', 26)
				.replace('アイドル新鋭隊', 27)
				.replace('idol-shineitai', 27)
				.replace('悔やむと書いてミライ', 28)
				.replace('a-future-written-as-i-regret', 28)
				.replace('携帯恋話', 29)
				.replace('keitai-renwa', 29)
				.replace('ジャックポットサッドガール', 30)
				.replace('jackpot-sad-girl', 30)
				.replace('needLe', 31)
				.replace('ステラ', 32)
				.replace('stella', 32)
				.replace('hello/how-are-you', 33)
				.replace('hello-how-are-you', 33)
				.replace('ハロ／ハワユ', 33)
				.replace('ハロ/ハワユ', 33)
				.replace('自傷無色', 34)
				.replace('jishou-mushoku', 34)
				.replace('ダンスロボットダンス', 35)
				.replace('dance-robot-dance', 35)
				.replace('フラジール', 36)
				.replace('fragile', 36)
				.replace('メルティランドナイトメア', 37)
				.replace('melty-land-nightmare', 37)
				.replace('ツギハギスタッカート', 38)
				.replace('patchwork-staccato', 38)
				.replace('ニア', 39)
				.replace('near', 39)
				.replace('セカイ', 40)
				.replace('sekai', 40)
				.replace('ワーワーワールド', 41)
				.replace('wah-wah-world', 41)
				.replace('your-adventure-log-has-vanished', 42)
				.replace('ぼうけんのしょがきえました！', 42)
				.replace('夜咄ディセイブ', 43)
				.replace('night-tales-deceive', 43)
				.replace('alive', 44)
				.replace('gimme×gimme', 45)
				.replace('gimme-gimme', 45)
				.replace('ジャンキーナイトタウンオーケストラ', 46)
				.replace('junky-night-town-orchestra', 46)
				.replace('leia-remind', 47)
				.replace('leia', 47)
				.replace('on-the-rocks', 48)
				.replace('otome-dissection', 49)
				.replace('乙女解剖', 49)
				.replace('青く駆けろ！', 50)
				.replace('青く駆けろ!', 50)
				.replace('aoku-kakero', 50)
				.replace('モア！ジャンプ！モア！', 51)
				.replace('more!jump!more!', 51)
				.replace('rolling-girl', 52)
				.replace('ローリンガール', 52)
				.replace('two-faced-lovers', 53)
				.replace('裏表ラバーズ', 53)
				.replace('unknown-mother-goose', 54)
				.replace('アンノウン・マザーグース', 54);
			postData(
				'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/master/musics.json',
				{ answer: 42 }
			).then(data => {
				let newtitle = JSON.stringify(data[newargs].title);
				songid = data[newargs].id
				songname = data[newargs].title
				message.channel.send(
					new Discord.MessageEmbed()
						.setTitle(`Song Title:${newtitle}`)
						.setDescription(
							`Lyricist:**${data[newargs].lyricist}**\nComposer:**${
								data[newargs].composer
							}**\nArranger:**${data[newargs].arranger}**\nMV-Dancers:**${
								data[newargs].dancerCount
							}**`
						)
				);
			});
			postData(
				'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/master/musicDifficulties.json',
				{ answer: 100 }
			).then(data => {
				var level = 0;
				for (let i = 0; i < data.length; i++) {
					if (data[i].musicId === songid) {
						console.log(i);
						level = i;
						break;
					}
				}
				if(!songname=== 'a'){
				message.channel.send(
					new Discord.MessageEmbed()
						.setTitle(`SongDifficulty:${songname}`)
						.addField(`mode:**${data[level].musicDifficulty}**`,`level:**${data[level].playLevel}**|notes:**${data[level].noteCount}**`)
						.addField(`mode:**${data[level+1].musicDifficulty}**`,`level:**${data[level+1].playLevel}**|notes:**${data[level+1].noteCount}**`)
						.addField(`mode:**${data[level+2].musicDifficulty}**`,`level:**${data[level+2].playLevel}**|notes:**${data[level+2].noteCount}**`)
						.addField(`mode:**${data[level+3].musicDifficulty}**`,`level:**${data[level+3].playLevel}**|notes:**${data[level+3].noteCount}**`)
						.addField(`mode:**${data[level+4].musicDifficulty}**`,`level:**${data[level+4].playLevel}**|notes:**${data[level+4].noteCount}**`)
						.setTimestamp()
				);}
			});
		}
	}
};
