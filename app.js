var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
function Mhenga(callback)
{
	// Node Js spawn function used to run the Mhenga.swh script
	const spawn = require("child_process").spawn;
	let options = {shell: true};
	const swahiliProcess = spawn('swahili',["C:/Users/HP/Documents/Code/GitHub/MHENGA/mhenga.swh"],options);
	let output = '';
	// Save the response to a variable
	swahiliProcess.stdout.on('data', (chunk) => {
		output += chunk.toString();
	});
	swahiliProcess.on('exit', () => {
		callback(output);
	});

}

//Function used to post the tweet
function tweeter(tweet_post)
{
	client.post('statuses/update', {status: tweet_post}, function(error, tweet, response){
			if(error){
				console.log(tweet_post);
				console.log("Error Posting Tweet");
			}
			else{
				console.log("Tweet: " + tweet_post + "\n");
				console.log("Tweet Posted!");
			}
		})
}

// Function execution
Mhenga(function(output) {
	tweeter(output)
	// console.log(output)
  });