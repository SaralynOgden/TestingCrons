const CronJob = require('cron').CronJob;
const bot = require('/.bot.js');

new CronJob({
  cronTime: '*/5 * * * *',
  onTick: bot.start();
  start: true,
  timeZone: 'America/Los_Angeles'
});
