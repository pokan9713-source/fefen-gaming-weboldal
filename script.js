// FefeX Gaming - Élő YouTube feliratkozó számláló


const API_KEY = "IDE_TEDD_A_YOUTUBE_API_KULCSOT";

const CHANNEL_ID = "UC4YuGG7PDePx_NGdrb05Yxw";



async function getSubscribers(){

    try{

        const url =
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;


        const response = await fetch(url);


        const data = await response.json();



        if(data.items && data.items.length > 0){


            const subscribers =
            data.items[0].statistics.subscriberCount;



            document.getElementById("subs").innerHTML =
            Number(subscribers).toLocaleString("hu-HU");



        }else{


            document.getElementById("subs").innerHTML =
            "Nincs adat";


        }


    }


    catch(error){


        console.log("YouTube API hiba:", error);


        document.getElementById("subs").innerHTML =
        "Hiba";


    }


}



// Betöltéskor frissít

getSubscribers();



// 5 percenként újra lekéri

setInterval(getSubscribers, 300000);
