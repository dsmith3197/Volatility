
chrome.runtime.onMessage.addListener(
 function(request, sender) {
  console.log("Contentscript has received a message from from background script: '" + request.vol.value + "'");
});



// // retrieve all audio files
// var audioTags = document.getElementsByTagName("audio");
//
// // retrieve all video files
// var videoTags = document.getElementsByTagName("video");
//
// // set volume for both video and audio files
// console.log(audioTag);
// audioTag.volume = 0.2;
//
//
// console.log(videoTags);
// videoTags[0].volume = 0.2;
