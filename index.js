
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

var mineflayer = require('mineflayer');
var navigatePlugin = require('mineflayer-navigate')(mineflayer);




var bot = mineflayer.createBot({
    name: 'Player',
    host:"9iyemt_arto8loII.aternos.me",
    port:'' ,
    password: ''
});
navigatePlugin(bot);
bot.loadPlugin(navigatePlugin);
for(id in bot.entities) {
  console.log(id);
  target = bot.entities[id];
  bot.navigate.to(target.position);
}

bot.on('kicked', console.log);
bot.on('end',function join() {
  mineflayer.createBot({
    name: 'Player',
    host:"9iyemt_arto8loII.aternos.me",
    port:'' ,
    password: ''
});
  console.log('joined')
  
});
bot.on('error', console.log);
