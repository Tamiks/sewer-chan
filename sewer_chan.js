// vim:set modelines=10:
// vim:set shiftwidth=4:
// vim:set foldmethod=marker:
// vim:set ignorecase smartcase:

const DISCORD = require("discord.io");
const math = require("mathjs");
let sewer = new DISCORD.Client({
    token: "MjA0NzA1MzAzMjAyMTAzMjk2.XmrHlQ.iD2oBVtk-wVJ6rdy_7X_MaazZUk",
    autorun: true,
});
let tamiks = "https://www.twitter.com/tamiks_properer";
let filepath = ["%HYPE", "hype.gif", "%DELETE THIS", "gun.png", "%DELETE", "gun.png", "%ESCAPE", "window.png", "%MOTIVATION", "motivation.png"];
let filecount = ["%FUTABA", 34, "%SMUG", 31, "%RARE", 40, "%NIGGA", 18, "%LEWD", 55, "%CUTE", 8];
let textpost = ["%PROGRAMMER", tamiks, "%TAMIKS", tamiks, "%MOONMAN", "https://www.youtube.com/watch?v=erlS8MuxsGI&bpctr=1538958455", "%TUMBLING", "https://www.youtube.com/watch?v=bUFWXpYJKaI", "%COUNTRY ROADS", "https://www.youtube.com/watch?v=1vrEljMfXYo", "%HELP", "```javascript\n%help: display this help text\n%roll ndm: roll an m-sided die n times\n%invite [-t 1000][-u 5][-p]: creates an instant invite\n    -t: declares the lifespan of the invite in seconds [default: infinite]\n    -u: declares the max amount of uses [default: infinite]\n    -p: declares that the invite is temporary; all users are kicked after time has been exhausted\n%tast [-l 3]: generates a nonsense word of size -l [default: 1]\n%math [equation]: does simple arithmetic\n%createtemp [channel name]: creates a temporary channel that self-destructs after one calendar day [requires \"Manage Channels\" permission]\n%deltemp [channel name]: deletes your tempchannel preemptively\n\nMost commands are not listed\nAll commands are case insensitive, e.g %RoLL = %roll\nMultiple commands can be executed if they take the general form of [%com1;%com2;...] with a max command amount of five```", "%YAYO", "YO! ya-yo, ya-yo\nDreamin', don't give it up Luffy\nDreamin', don't give it up Zolo\nDreamin', don't give it up Nami\nDreamin', don't give it give it up give it up give it up give it up give it NO!\n\nHere's how the story goes we find out\nAbout a Treasure in the Grand Line\nTheres no doubt, The pirate whose eye is on it\nHe'll sing I'll be King of the Pirates\nI'm gonna be king\n\nYa-yo, ya-yo, ya-yo, ho-ho\n\nHis name is Luffy\nThat's Monkey D. Luffy\nGonna be king of the pirates!\nHe's made of rubber - (female singers) how did that happen?\nYo-ho-ho he took a bite of Gum Gum\n\nYa-yo, ya-yo\n\nHis name's Zolo, He's just like a samurai\nAnd a L-A-D-Y Nami's not shy\nThe pirate crew coming through, doin' their thing,\nWith the king of the pirates, he's gonna be king!\n\nYa-yo, ya-yo, ya-yo, hoo-hoo\n\nSet sail for One Piece, it's the name of the treasure in the Grand Line!\n\nYa-yo, ya-yo\nSet sail for One Piece!"];

sewer.on("message", function(user, userID, channelID, message, event){
    let input = message.toUpperCase().split(";");
    console.log(user + ": " + message);
    let log_entry = "";
    for(let k = 0; k < input.length; k++){
	if(user != "Sewer-chan"){
	    if(input[k].split(" ")[0] == " "){
		input[k] = input[k].split(" ")[1];
	    }
	    /*if(userID == "541977953722957834"){
		console.log(message);
		// find what heart emoji is used
		// react
	    }*/
	    if(/\b([a-z]{1,2})-\1/i.test(message)){
		while(/\b([a-z]{1,2})-\1/i.test(message)){
		    message = message.replace(/\b([a-z]{1,2})-\1/i, "$1");
		}
		sewer.sendMessage({message:"Did you mean " + message +"?", to:channelID});
	    }
    
	    //Interactive commands (%TEST, %ROLL, %INVITE)
	    if(input[k] == "%TEST"){
		let players = [];
	    }
	    if(input[k].indexOf("%EVAL ") != -1 && userID == "160508243150503937"){
		eval(message.split("%eval ")[1]);
		console.log("%EVAL:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(input[k].indexOf("%INFILTRATE ") != -1 && input[k].split("%INFILTRATE ")[1]){
		sewer.moveUserTo({serverID:"286006956685131776", userID:"160508243150503937", channelID:input[k].split("%INFILTRATE ")[1]});
		console.log("%INFILTRATE:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(input[k].indexOf("%ROLL") != -1 && /[1-9]+[0-9]*D[1-9]+[0-9]*/.test(input[k].split(" ")[1])){
		let roll = "You rolled: ";
		roll = roll + String(Math.round(Math.random()*input[k].split(" ")[1].split("D")[1]));
		for(let t = 1; t < input[k].split(" ")[1].split("D")[0] ;t++){
		    roll = roll + ", " + String(Math.round(Math.random()*(input[k].split(" ")[1].split("D")[1] - 1)) + 1);
		}
		sewer.sendMessage({message:roll, to:channelID});
		console.log("%ROLL:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(input[k].indexOf("%INVITE") != -1){
		let uses = 0, time = 0, temp = false;
		if(input[k].indexOf("-T ") != -1 && input[k].split("-T ")[1].split(" ")[0] == String(Number(input[k].split("-T ")[1].split(" ")[0]))){
		    time = Number(input[k].split("-T ")[1].split(" ")[0]);
		}
		if(input[k].indexOf("-U ") != -1 && input[k].split("-U ")[1].split(" ")[0] == String(Number(input[k].split("-U ")[1].split(" ")[0]))){
		    uses = Number(input[k].split("-U ")[1].split(" ")[0]);
		}
		if(input[k].indexOf("-P ") != -1){
		    temp = true;
		}
		sewer.createInvite({channelID: channelID, max_users: uses, max_age: time, temporary: temp}, (callback, response) => {
		    sewer.sendMessage({message:"https://discord.gg/" + response.code, to:channelID});
		});
		console.log("%INVITE:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(input[k].indexOf("%CREATETEMP") != -1 && input[k].split("%CREATETEMP ")[1]){ 
		let tempchannel = input[k].split("%CREATETEMP ")[1];
		while(tempchannel.indexOf(" ") != -1){
		    tempchannel = tempchannel.replace(" ", "_");
		}
		while(tempchannel.indexOf("-") != -1){
		    tempchannel = tempchannel.replace("-", "_");
		}
		if(!does_channel_exist(userID, sewer.servers[event.d.guild_id])){
		    let date = new Date();
		    console.log(event);
		    //message.guild.createChannel(/*tempchannel + "-" + event.d.author.id + "-" + String(date.getMonth()) + "-" + String(date.getDate())*/"name", {type:"text", reason:"test reason"});
		    //sewer.createChannel({serverID: event.d.guild_id, type:"text", name:tempchannel + "-" + event.d.author.id + "-" + String(date.getMonth()) + "-" + String(date.getDate())});
		    //message.guild.createChannel({serverID: event.d.guild_id, type:"text", name:tempchannel + "-" + event.d.author.id + "-" + String(date.getMonth()) + "-" + String(date.getDate())});
		}
		console.log("%CREATETEMP:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(input[k].indexOf("%DELTEMP") != -1 && input[k].split("%DELTEMP ")[1]){//%EDIT%
		for(let a = 0; a < Object.getOwnPropertyNames(sewer.servers[event.d.guild_id].channels).length; a++){
		    let channel = sewer.servers[event.d.guild_id].channels[Object.getOwnPropertyNames(sewer.servers[event.d.guild_id].channels)[a]];
		    if(input[k].split("%DELTEMP ")[1].toLowerCase() == channel.name.split("-")[0] && String(event.d.author.id) == channel.name.split("-")[1]){
			sewer.deleteChannel(channel.id);
			break;
		    }
		}
		console.log("%DELTEMP:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(input[k].indexOf("%TAST") != -1){
		let opener = ["t", "m", "str", "kr", "kl", "n", "p", "d", "r", "h", "s", "pl", "g", "y", "cr", "f", "g", "q", "st", ""];
		let linker = ["st", "ler", "le", "ple", "mer", "lin", "tin", "tar", "nk", "ro", "ng", "r", "mm", "ch", "nn", "le", ""];
		let l = 1;
		let r = opener[Math.round(Math.random()*(opener.length-1))];
		if(input[k].indexOf("-L ") != -1 && input[k].split("-L ")[1] == String(Number(input[k].split("-L ")[1]))){
		    l = Number(input[k].split("-L ")[1]);
		}
		for(let t = 0; t < l; t++){
		    r = r + ["a", "e", "i", "o", "u", "y"][Math.round(Math.random()*5)];
		    r = r + linker[Math.round(Math.random()*(linker.length-1))];
		}
		sewer.sendMessage({message:r, to:channelID});
		console.log("%TAST:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(input[k].indexOf("%MATH") !== -1){
		sewer.sendMessage({message:DOMATH(input[k].replace("%MATH", "")), to:channelID});
		console.log("%MATH:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
    
	    //Static commands (%CUTE, %TUMBLING, %HYPE)
	    if(input[k] == "%MORN"){
		sewer.uploadFile({file: "/home/tamiks/_Programming/Common/sewer_images/morn.jpg", message: "Good Morn", to:channelID});
		console.log("%MORN:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(input[k] == "%CHEERIO"){
		sewer.uploadFile({file: "/home/tamiks/_Programming/Common/sewer_images/cheerio.jpg", message: "Cheerio!", to:channelID});
		console.log("%CHEERIO:" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(textpost.indexOf(input[k]) != -1){ //%MOONMAN, %HELP, %TUMBLING, %COUNTRY ROADS, %TAMIKS
		sewer.sendMessage({message:textpost[textpost.indexOf(input[k]) + 1], to:channelID});
		console.log(input[k] + ":" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(filecount.indexOf(input[k]) != -1 && input[k] != Number(input[k])){ //%FUTABA, %SMUG, %RARE, %NIGGA, %LEWD, %CUTE
		sewer.uploadFile({file:"..\\..\\Images\\Discord\\" + input[k] + "\\" + String(Math.round(Math.random()*filecount[filecount.indexOf(input[k]) + 1])) + ".jpg", to:channelID});
		console.log(input[k] + ":" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	    if(filepath.indexOf(input[k]) != -1){ //%HYPE, %DELETE THIS, %ESCAPE
		sewer.uploadFile({file:"..\\..\\Images\\Discord\\" + filepath[filepath.indexOf(input[k]) + 1], to:channelID});
		console.log(input[k] + ":" + event.d.author.username + "->" + sewer.servers[event.d.guild_id].name + "-" + sewer.servers[event.d.guild_id].channels[event.d.channel_id].name);
	    }
	}
    }
});
sewer.on("disconnect", function(ERROR, code){
    console.log(code);
    sewer.connect();
});

setInterval(() => {
    let date = new Date();
    for(let t = 0; t < Object.getOwnPropertyNames(sewer.servers).length; t++){
	let channel = sewer.servers[Object.getOwnPropertyNames(sewer.servers)[t]].channels;
	for(let a = 0; a < Object.getOwnPropertyNames(channel).length; a++){
	    if(/[_a-z]+-[0-9]+-[0-9]{1,2}-[0-9]{1,2}/.test(channel[Object.getOwnPropertyNames(channel)[a]].name) && channel[Object.getOwnPropertyNames(channel)[a]].name.split("-")[3] != date.getDate()){//CHANNEL IS ONE OR MORE CALENDAR DAYS OLD
		sewer.deleteChannel(channel[Object.getOwnPropertyNames(channel)[a]].id);
	    }
	}
    }
}, 360000);//%EDIT%

function DOMATH(equation){
    var bool = true;
    var paracheck = 0;
    var numcheck = false;
    var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "^", "*", "+", "-", "/", "(", ")", "%", "!"];
    for(i = 0; i < equation.length; i ++){
	if(chars.indexOf(equation.charAt(i)) == -1){
	    equation = equation.replace(equation.charAt(i), "");
	    i = -1;
	}
    }
    if(["^", "*", "%", ")", "/", "!"].indexOf(equation.charAt(0)) !== -1){
	bool = false;
    }
    if(["^", "*", "%", "(", "/", "-", "+"].indexOf(equation.charAt(equation.length - 1)) !== -1){
	bool = false;
    }

    if(bool === true){
	for(i = 0; i < equation.length; i++){
	    if(["^", "/", "*", "%"].indexOf(equation.charAt(i)) !== -1){
		if(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ")"].indexOf(equation.charAt(i - 1)) == -1 || ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", "+", "-"].indexOf(equation.charAt(i + 1)) == -1){
		    bool = false;
		}
	    }
	    if(equation.charAt(i) == "("){
		paracheck ++;
		numcheck = true;
	    }
	    if(equation.charAt(i) == "." && ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(equation.charAt(i + 1)) === -1){
		bool = false;
	    }
	    if(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(equation.charAt(i)) !== -1){
		numcheck = false;
	    }
	    if(equation.charAt(i) == ")"){
		if(numcheck === true){
		    bool = false;
		}
		paracheck --;
	    }
	}
    }

    if(paracheck !== 0 || numcheck === true){
	bool = false;
    }

    if(bool){
	return "Easy! The answer is " + String(math.eval(equation));
    }
    else if(!bool || equation == ""){
	return "I'm sorry, but your command contains a syntax error.";
    }
}

function does_channel_exist(ID, server){
    let chanexi = false;
    for(let s = 0; s < Object.getOwnPropertyNames(server.channels).length; s++){
	if(ID == server.channels[Object.getOwnPropertyNames(server.channels)[s]].name.split("-")[1]){
	    chanexi = true;
	    break;
	}
    }
    return chanexi;
}
