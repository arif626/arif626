$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
	   {
            name: 'Channel 1',
            sources: [
                {src: 'http://103.96.235.18:8080/sports1/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 2',
            sources: [
                {src: 'https://live.tsports.com/live-02/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 3',
            sources: [
                {src: 'https://bdixtv24.site/tsports/stream.php?stream=https://live-cdn.tsports.com/live-02/master_1080.m3u8', type: 'application/x-mpegURL'},
            ]
		},
		{
            name: 'Channel 4',
            sources: [
                {src: 'http://125.209.88.166:45793/BRN/ArySports.stream/chunklist.m3u8', type: 'application/x-mpegURL'},
            ]
        	},
		 {
            name: 'Channel 5',
            sources: [
                {src: 'https://criccoder.pages.dev/astro.m3u8', type: 'application/x-mpegURL'},
            ]
        	},
                {
            name: 'Channel 6',
            sources: [
                {src: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/globaltv.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
                }
		 ]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
