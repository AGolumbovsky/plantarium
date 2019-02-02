let fetchLatestReading = () => {

    console.log("I'm alive");
    // GET req using fetch()
    // var url = "https://swapi.co/api/planets/3/";
    var url = "http://localhost:8888/api/latestReading"
    
    /* var url = () => {
        
        var category = document.getElementById("category");
        var position = document.getElementById("position");

        console.log(category + position);
        return "https://swapi.co/api" + "/" + category + "/" + position + "/";
    }     */

    fetch(url, /*{
        mode: 'no-cors'
    }*/)
        .then((res) => {

            console.log(res);
            
            if(res.ok) {
                return res.json();
            }
                throw new Error("Response was unpleasant");            
            
        })
        .then((data) => {

            var reading = JSON.stringify(data.reading);
            // var stuffObject = JSON.parse(reading);

            var displayArea = document.getElementById("display-area-div");
            displayArea.innerHTML = `<h2>${reading}</h2>`;
            

           /*  console.log(stuffObject);
            
            for (var key in stuffObject) {

                console.log(key + " : " + stuffObject[key]);
                
                
                // displayArea.appendChild(key + " : " + stuffObject[key] + "\n");
                // displayArea.innerHTML += key + ": " + stuffObject[key] + "\n";
            } */

            console.log("Dun")
            /* stuffObject.forEach(function(item){
                console.log("inside forEach")
                var div=document.createElement("div");
                var content = document.createTextNode("text node created");
                // div.textContent=item;
                div.appendChild(content)
            });
 */
            // displayArea.append(stuffDone)
            // displayArea.appendChild("<div>hey hey hey</div>")

        })
}




/* $.each(videos, function(key, value) {
    html += "<h3>"+key+"</h3>";
     $.each(value, function(month, file) {
      html += "<h1>"+month+"</h1>";
         $.each(file, function(size, name) {
             html += '<a href="'+name+'" data-role="button" data-inline="true" data-mini="true">'+size+' </a>'; 
         });
     });
 });


 for(var key in videos.monthly.january){
    // videos.monthly.january[key] will print out all your videos from january
 }

 document.body.appendChild
 ('<a href="'+videos.monthly.january[key]
 +'" data-role="button" data-inline="true" data-mini="true">'+key+'p </a>');






    videos.forEach(function(){
        var div=$("<div>"+video.month+"<div>");
        $(document.body).append(div);
        }); */