const CronJob = require('cron').CronJob;
const bot = require('./bot.js');

new CronJob('*/10 * * * * *',
  bot.start,
  null,
  true,
  'America/Los_Angeles');
