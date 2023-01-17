const noblox = require('noblox.js');
const chalk = require("chalk");
const figlet = require('figlet');
const CronJob = require('cron').CronJob;
require('dotenv').config();

//Main code.
async function findAndApplyDate() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let d = new Date();
    let day = weekday[d.getDay()];

    switch(day) {
        case "Sunday":
            noblox.wearAssetId("")
            break;
        case "Monday":
            noblox.wearAssetId("")
            break;
        case "Tuesday":
            noblox.wearAssetId("")
            break;
        case "Wednesday":
            noblox.wearAssetId("")
            break;
        case "Thursday":
            noblox.wearAssetId("")
            break;
        case "Friday":
            noblox.wearAssetId("")
            break;
        case "Saturday":
            noblox.wearAssetId("")
            break;
        default:
            noblox.wearAssetId("") //Fallback.
            break;
    }
}

//Midnight update.
const job = new CronJob('00 00 00 * * *', function() {
    findAndApplyDate();
}, false, process.env.TZ);

//Starter.
async function startApp () {
    const currentUser = await noblox.setCookie(process.env.RBLXCOOKIE)
    console.log(`${chalk.hex("#5b57d9")(figlet.textSync('Roblox Shirt Daily Updater', { horizontalLayout: 'full' }))}\n`);
      console.log(`${chalk.hex('#60bf85')('Bot started!')}\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n`
      + `${chalk.hex('#ffaa2b')('>')} ${chalk.hex('#7289DA')(`Logged in as: ${chalk.hex('#4e5f99')(`${currentUser.UserName}`)}`)}\n`
      + `${chalk.hex('#ffaa2b')('>')} ${chalk.hex('#7289DA')(`ID: ${chalk.hex('#4e5f99')(`${currentUser.UserID}`)}`)}`);

    findAndApplyDate();
    job.start();
}

startApp()
