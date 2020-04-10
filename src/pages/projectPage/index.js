console.log('this is project page!!');

const videoBoard = document.querySelector('.video-board');

// Начало работы с видео ютуба
const tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.addEventListener('load', function() {
	let player;
	function onPlayerReady(event) {
		player.playVideo();
	}

	function onYouTubePlayerAPIReady() {
		// create the global player from the specific iframe (#video)
		player = new YT.Player('video', {
			events: {
				// call this function when player is ready to use
				'onReady': onPlayerReady,
				// 'onStateChange': onPlayerStateChange
			}
		});

	}

	this.addEventListener('scroll', (event) => {
		if(window.pageYOffset > videoBoard.offsetHeight) {
			player.pauseVideo();
		}
		else {
			player.playVideo();
		}
	});

	onYouTubePlayerAPIReady();
});