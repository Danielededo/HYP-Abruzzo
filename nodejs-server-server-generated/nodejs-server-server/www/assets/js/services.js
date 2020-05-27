function servicepage(){
  var myList = document.getElementById("servicespage");
  fetch("../v2/services")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    var x=0;
    for (var i = 0; i < 2; i++) {
      var listItem = document.createElement("div");
      var listItem5 = document.createElement("br");
      listItem.classList.add("row")
      myList.appendChild( listItem );
      for(var j= 0; j < 4; j++){
        var listItem0 = document.createElement("div");
        listItem0.classList.add("col-md-3");
        let { Name  , Image , Id_service} = json[x];
        var listItem1 = document.createElement("a");
        listItem1.href = "../pages/service.html";
        var z = "setService("+`${Id_service}`+")";
        listItem1.setAttribute('onclick',z);
        var listItem2 = document.createElement("img");
        var listItem3 = document.createElement("br");
        var listItem4 = document.createElement("a");
        listItem2.src= `${Image}`;
        listItem4.textContent = `${Name}`;
        listItem.appendChild( listItem0 );
        listItem0.appendChild( listItem1 );
        listItem1.appendChild( listItem2 );
        listItem1.appendChild( listItem3 );
        listItem1.appendChild( listItem4 );
        x++;
      }
      myList.appendChild(listItem5);
    }
  });
}

function setService(x){
  localStorage.setItem("Id_service",x);
}
