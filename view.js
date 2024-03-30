// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    
        <div class="rabbitContainer">
            <div class="rabbit">🐇</div>
            <div style="font-size: 30px">Hei, kan du hjelpe meg med å dele påskeegg med landsdelene?</div>
            <div style="font-size: 20px">(Trykk på en landsdel for å gi dem egg!)</div>
        </div>
    
        <div class="container">
            <img class="map" src="img/landsdelerv2.png" usemap="#countrymap"/>
            <map name="countrymap">
                <area onclick="addEggs('north')" alt="north" title="north" coords="574,410,517,411,586,250,537,240,609,148,663,85,758,20,841,3,908,30,919,76,891,118,809,167,700,198,621,291" shape="poly">
                <area onclick="addEggs('middle')" alt="middle" title="middle" coords="571,415,506,413,483,421,415,504,428,526,436,576,459,575,462,557,494,559,503,582,521,580,521,540,539,477,570,479,572,453" shape="poly">
                <area onclick="addEggs('west')" alt="west" title="west" coords="410,508,317,580,300,698,309,793,335,823,342,782,353,756,364,725,381,705,378,677,389,664,400,654,398,627,382,615,384,599,403,576,427,574,430,555,423,535" shape="poly">
                <area onclick="addEggs('east')" alt="east" title="east" coords="522,585,498,582,488,564,463,562,456,582,450,585,432,580,410,584,396,597,389,611,408,628,406,647,399,670,384,682,388,701,363,735,374,748,387,775,412,788,430,789,459,779,460,732,476,731,479,771,501,786,512,735,532,711,518,663,536,658,534,631,519,624,520,603" shape="poly">
                <area onclick="addEggs('south')" alt="south" title="south" coords="366,742,355,754,356,771,342,786,339,821,351,842,376,839,402,831,414,815,425,802,414,793,397,791,384,781,377,765" shape="poly">
            </map>  
        </div>

        <div style="margin-top: -680px; margin-left: 1450px" class="egg">${model.eggs.north}</div>
        <div style="margin-top: -450px; margin-left: 1330px" class="egg">${model.eggs.middle}</div>
        <div style="margin-top: -290px; margin-left: 1330px" class="egg">${model.eggs.east}</div>
        <div style="margin-top: -290px; margin-left: 380px" class="egg">${model.eggs.west}</div>
        <div style="margin-top: -80px; margin-left: 670px" class="egg">${model.eggs.south}</div>
      
    `;
    app.innerHTML = html;
}