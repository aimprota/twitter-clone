$(function() {
	var textarea = $('textarea');
	$(textarea).on('click', function(){
		$(this).addClass('expand');
		$("#tweet-submit").css({'visibility': 'visible'});
		$("#char-count").css({'visibility': 'visible'});
	});

	$(textarea).on('keyup', function(){
		var $charCount = $('#char-count');
		var charCount = $(this).val().length;
		var charleft = 140 - charCount;
		$charCount.text(charleft);
			if (charleft <= 10) {
				$charCount.css({"color":"red"});
			} else {
				$charCount.css({"color":"#999"});
			}
			var button = $("#tweet-submit");
			if(charCount > 140){
				button.attr("disabled", true);
			} else {
				button.attr("disabled", false);
		}
	});
	var body           = $('body');
	body.on('click', '#tweet-submit', function(){
		var profilePic = $("#profilePic").attr("src").toString();
		var name       = $("#name").text();
		var tweet      = $(textarea).val();
		var newTweet   = '<div class="tweet"> <div class="content"> <img class="avatar" src="'+profilePic+'" /> <strong class="fullname">'+name+'</strong> <span class="username">@'+name+'</span> <p class="tweet-text">'+tweet+'</p> <div class="tweet-actions"><ul> <li><span class="icon action-reply"></span> Reply</li> <li><span class="icon action-retweet"></span> Retweet</li> <li><span class="icon action-favorite"></span> Favorite</li> <li><span class="icon action-more"></span> More</li> </ul> </div> <div class="stats slide"> <div class="retweets"> <p class="num-retweets">30</p> <p>RETWEETS</p> </div> <div class="favorites"> <p class="num-favorites">6</p> <p>FAVORITES</p> </div> <div class="users-interact"> <div> <img src="img/alagoon.jpg" /> <img src="img/vklimenko.jpg" /> </div> </div> <div class="time"> 1:04 PM - 19 Sep 13 </div> </div> <div class="reply slide"> <img class="avatar" src="img/alagoon.jpg" /> <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea> </div> </div> </div>';
		$("#stream").prepend(newTweet);
	});
	body.on("mouseenter", ".tweet", function(){
		$(this).find(".tweet-actions").css("visibility","visible");
	});
	body.on("mouseleave", ".tweet", function(){
		$(this).find(".tweet-actions").css("visibility","hidden");
	});

	body.on("click", '.tweet', function(){
		$(this).find(".slide").slideToggle();
	});
});


