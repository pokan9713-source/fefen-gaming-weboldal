// FefeX Gaming - Élő YouTube feliratkozó számláló


const API_KEY = "IDE_ÍRD_A_YOUTUBE_API_KULCSOT";

const CHANNEL_ID = "UC4YuGG7PDePx_NGdrb05Yxw";



async function updateSubscribers(){

    try{

        const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );


        const data = await response.json();


        const count =
        data.items[0].statistics.subscriberCount;


        document.getElementById("subs").innerHTML =
        Number(count).toLocaleString("hu-HU");


    }


    catch(error){

        console.log("Hiba:", error);

        document.getElementById("subs").innerHTML =
        "Nem elérhető";

    }

}



// első betöltés

updateSubscribers();



// frissítés 5 percenként

setInterval(updateSubscribers,300000);
