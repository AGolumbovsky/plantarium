var fetchLatestReading = () => {

    console.log("Alive and fetching latest reading");

    var url = "http://localhost:8888/api/latestReading"

    // var url = "https://swapi.co/api/planets/3/";
    /* var url = () => {
        var category = document.getElementById("category") || "planets";
        var position = document.getElementById("position"); || "2";
        console.log(category + position);
        return "https://swapi.co/api" + "/" + category + "/" + position + "/";
    }     */

    fetch(url /*{
        mode: 'no-cors'
    }*/)
        .then((res) => {
            // var jason = JSON.stringify(res.body);
            var jason = res.json();
            console.log(jason);
            console.log(typeof(res));
            
            if(res.ok) {
                return jason;
            }
            else {
                throw new Error("Response was unpleasant");            
            }
            
            
        })
        .then((data) => {

            console.log(data.rows[0]);
            var reading = data.rows[0].reading;
            // var stuffObject = JSON.parse(reading);

            var displayArea = document.getElementById("display-area-div");
            displayArea.innerHTML = `<h2>${reading}</h2>`;

            if (reading <= 400) {
                displayArea.className = "redZone";
            }

            else if (reading > 400 && reading <=600) {
                displayArea.className = "yellowZone";
            }
            else {
                displayArea.className = "greenZone";
            }   

            console.log("Dun fetched last reading")

        })
}
