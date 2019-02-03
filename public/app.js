let fetchLatestReading = () => {

    console.log("Alive and fetching");
    // var url = "https://swapi.co/api/planets/3/";
    var url = "http://localhost:8888/api/latestReading"
    
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
            

           /*  console.log(stuffObject);
            
            for (var key in stuffObject) {

                console.log(key + " : " + stuffObject[key]);
                
                
                // displayArea.appendChild(key + " : " + stuffObject[key] + "\n");
                // displayArea.innerHTML += key + ": " + stuffObject[key] + "\n";
            } */

            console.log("Fetch dun")

        })
}