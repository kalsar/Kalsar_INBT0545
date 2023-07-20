// Code for Slider
const playlists = document.querySelectorAll('.playlists');
playlists.forEach((container) => {
  const newDiv = container.querySelector('.newdiv');
  const moveLeft= newDiv.querySelector('.fa-chevron-left');
  const moveRight = newDiv.querySelector('.fa-chevron-right');
  const listContainer = container.querySelector('.list');
  moveLeft.addEventListener('click', () => {
    listContainer.scrollLeft -= 200;
  });
  moveRight.addEventListener('click', () => {
    listContainer.scrollLeft += 200;
  });
});

// Code for Music
let songPlay= document.getElementsByClassName('songPlay')
let songIndex = 0;
let audioElement = new Audio('songs/6.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songs = [
  {songName: "Peaceful Piano", filePath: "songs/1.mp3"},
  {songName: "Cielo", filePath: "songs/2.mp3"},
  {songName: "Instrumental Music", filePath: "songs/3.mp3"},
  {songName: "Focus Music", filePath: "songs/4.mp3"},
  {songName: "Workday", filePath: "songs/5.mp3"},
  {songName: "Blank Space", filePath: "songs/6.mp3"},
  {songName: "Tum Se hi", filePath: "songs/7.mp3"},
  {songName: "Allah Ke Bande", filePath: "songs/8.mp4a"},
  {songName: "Mera Pehla Pehla Pyaar", filePath: "songs/9.mp3"},
  {songName: "Levitating: Dua Lipa", filePath: "songs/10.mp3"},
  {songName: "Nauvari", filePath: "songs/11.mp3"},
  {songName: "Rangabati", filePath: "songs/12.mp3"},
  {songName: "Maskalli", filePath: "songs/13.mp3"},
  {songName: "Nannaki Nannaki", filePath: "songs/14.mp3"},
  {songName: "Namma Satham", filePath: "songs/15.mp3"},
]
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
}
})
audioElement.addEventListener('timeupdate', ()=>{ 
  // Update progressBar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
  progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
  audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=14){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
      element.classList.remove('fa-pause');
      element.classList.add('fa-play');
      
  })
}
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
    let preview= document.querySelector('.preview')
    let bottom= document.querySelector('.bottom')
    preview.style.display="none";
    bottom.style.display="flex";
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      console.log("m",songIndex)
      e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex-1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
  })
})