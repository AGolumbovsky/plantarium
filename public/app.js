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

            console.log("Dun fetched last reading")

        })
}

var fetchDummyPopulate = () => {

    data = {reading: 909, identifier: 'From Fetch'}

    var url = "http://localhost:8888/api/dummyPopulate"

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
        
    })
    .then(res => res.json())
    .then(response => console.log('fetch sent:', JSON.stringify(response)))
    .catch(err => console.log("Fetching error:", err));

}