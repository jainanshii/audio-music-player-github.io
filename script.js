let songs=[
    {
        name:"Kesariya",
        source:"song1",
        image:"https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg"
    },
    {
        name:"Mujhe Peene Do",
        source:"song2",
        image:"https://i0.wp.com/99lyricstore.com/wp-content/uploads/2020/10/Mujhe2BPeene2BDo2BHindi2BSong2BImage2BDarshan2BRaval.jpg?fit=1163%2C1280&ssl=1",
    },
    {
        name:"Gulabi Aankhein",
        source:"song3",
        image:"https://i.ytimg.com/vi/rnh8mWQCIdk/hqdefault.jpg"
    },
    {
        name:"Jubin Nautiyal Mashup",
        source:"song4",
        image:"https://feeds.abplive.com/onecms/images/uploaded-images/2022/09/18/a870a5b24823ca42f29367c51651dbc86b81b.jpeg?impolicy=abp_cdn&imwidth=650"
    },
    {
        name:"Mere Mehboob",
        source:"song5",
        image:"https://s2.dmcdn.net/v/D4Adh1McGFg0-nqRd/x480"
    }
];

let i=0;
let pic=document.getElementById("img1");
let text=document.getElementById("box-2")
let curr_track = document.createElement("myaudio");
loadtrack(i);


    function loadtrack(i){
         curr_track=new Audio(`/${songs[i].source}.mp3`);   
    }
   
    function playaudio(){
      loadtrack(i);
      curr_track.play();
      pic.src=songs[i].image;
      text.innerHTML=songs[i].name;
    }

    function pauseaudio(){
        curr_track.pause();   
    }

    function nextaudio(){
        curr_track.pause();
      if(i<songs.length-1)
      i++;
      else
      i=0;
      playaudio();
    }

    function prevaudio(){
        curr_track.pause();
        curr_track.pause();
        if(i>0)
        i--;
        else
        i=songs.length-1;
        playaudio();       
    }
