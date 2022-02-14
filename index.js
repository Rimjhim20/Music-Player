var songs=[

    {
        id:1,
        imageSrc:"./thumbnails/music-1.jpg",
        audioSrc:"./audio/music-1.mp3",
        title:"music-1"
    },

    {
        id:2,
        imageSrc:"./thumbnails/music-2.jpg",
        audioSrc:"./audio/music-2.mp3",
        title:"music-2"
    },

    {
        id:3,
        imageSrc:"./thumbnails/music-3.jpg",
        audioSrc:"./audio/music-3.mp3",
        title:"music-3"
    },

    {
        id:4,
        imageSrc:"./thumbnails/music-4.jpg",
        audioSrc:"./audio/music-4.mp3",
        title:"music-4"
    },

    {
        id:5,
        imageSrc:"./thumbnails/music-5.jpg",
        audioSrc:"./audio/music-5.mp3",
        title:"music-5"
    },

    {
        id:6,
        imageSrc:"./thumbnails/music-6.jpg",
        audioSrc:"./audio/music-6.mp3",
        title:"music-6"
    },

    {
        id:7,
        imageSrc:"./thumbnails/music-7.jpg",
        audioSrc:"./audio/music-7.mp3",
        title:"music-7"
    },

    {
        id:8,
        imageSrc:"./thumbnails/music-8.jpg",
        audioSrc:"./audio/music-8",
        title:"music-8"
    },

    {
        id:9,
        imageSrc:"./thumbnails/music-9.jpg",
        audioSrc:"./audio/music-9.mp3",
        title:"music-9"
    },

    {
        id:10,
        imageSrc:"./thumbnails/music-10.jpg",
        audioSrc:"./audio/music-10.mp3",
        title:"music-10"
    },

    {
        id:11,
        imageSrc:"./thumbnails/music-11.jpg",
        audioSrc:"./audio/music-11.mp3",
        title:"music-11"
    },


]

function generateAudioCards()
{

    let htmlString="";

    songs.forEach(function(song,index){

        let songHTML=`

                <div class="audio">
                <div class="audio_img">
                    <img src="${song.imageSrc}">
                </div>
                <div class="audio_detail">
                    <h1 class="audio_title">${song.title}</h1>
                    <button class="btn" onclick="playAudio(${song.id})">Play</button>
                </div>
                </div>

        `;

        htmlString+=songHTML;

    })

    document.getElementById("audios").innerHTML=htmlString;


}

generateAudioCards();


function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });

    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();

    
}

