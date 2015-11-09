require('babel/register');

var slackMessage = require('./1on1').slackMessage;
var forEach = require('lodash/collection/forEach')
var _ = require('lodash');
var request = require('superagent');
var teams = require('./teams');

forEach(teams, function(members, channel){
  var text = slackMessage(members);
  console.log(process.env.SLACK_API_TOKEN);
  console.log('channel - ', channel);
  request
  .post('https://slack.com/api/chat.postMessage')
  .type('form')
  .send({
    token: process.env.SLACK_API_TOKEN,
    channel: '#' + channel,
    link_names: true,
    username: 'Rainforester',
    icon_emoji: true,
    icon_url: 'https://zapier.cachefly.net/storage/services/332cb19b07999b0d3144bd67635ae40d_2.128x128.png',
    token: process.env.SLACK_API_TOKEN, 
    text: text + '\n :banana: :beers: :hearts:',
  })
  .end(function(err, res){
    console.log(res.body);
    console.log(res.req);
    if(err){
      console.error(err);
      //throw new Error(err);
    }else {
    }
  });
});


