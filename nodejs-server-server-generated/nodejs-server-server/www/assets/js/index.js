function homepeople(){
  var myList = document.getElementById("peoplehome");
  fetch("v2/people")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    localStorage.clear();
    for (var i = 0; i < 4; i++) {
      var listItem0 = document.createElement("div");
      listItem0.classList.add("col-md-3");
      let { Name  , Image } = json[i];
      var listItem1 = document.createElement("a");
      var listItem2 = document.createElement("img");
      var listItem3 = document.createElement("br");
      var listItem4 = document.createElement("a");
      listItem2.src= `${Image}`;
      listItem4.textContent = `${Name}`;
      myList.appendChild( listItem0 );
      listItem0.appendChild( listItem1 );
      listItem1.appendChild( listItem2 );
      listItem1.appendChild( listItem3 );
      listItem1.appendChild( listItem4 );
    }
  });
}
