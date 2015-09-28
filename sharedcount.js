module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var sent_text = req.body.text;
  var url_to_check = sent_text.substring(13);
  var sc_apikey = '9ccb85fa8f546a5d7b10b474207a63386a2987ce';
  var sharedcount_url = 'https://free.sharedcount.com/?apikey='+sc_apikey+'&url='+url_to_check;
 
 var botPayload = {
  text : 'Hey there '+userName+'!';
 };

 /*
 var request = require('request'); 


request(sharedcount_url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var sc_data = JSON.parse(body);
    var twitter = sc_data.Twitter;
    var linkedin = sc_data.LinkedIn;
    var stumbleupon = sc_data.StumbleUpon;
    var googleplus = sc_data.GooglePlusOne;
    var pinterest = sc_data.Pinterest;
    var fb_shares = sc_data.Facebook.share_count;
    var fb_likes = sc_data.Facebook.like_count;
    var fb_comments = sc_data.Facebook.comment_count;
    var fb_clicks = sc_data.Facebook.click_count;

    var botPayload = {
      text : 'The SharedCount stats for '+url_to_check+' :\n\n*Twitter:* '+twitter+'\n*LinkedIn:* '+linkedin+
      '\n*Google+:* '+googleplus+'\n*StumbleUpon:* '+stumbleupon+'\n*Pinterest:* '+pinterest+'\n*Facebook*\n  Shares: '+
      fb_shares+'\n  Likes: '+fb_likes+'\n  Comments: '+fb_comments+'\n  Clicks: '+fb_clicks

    };
    console.log(botPayload);
    // avoid infinite loop
    if (userName !== 'slackbot') {
      return res.status(200).json(botPayload);
    } else {
      return res.status(200).end();
    }
  }
})
*/
}