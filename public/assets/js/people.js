function peoplepage(){
  var myList = document.getElementById("peoplepage");
  fetch("../v2/people")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    var x=0;
    for (var i = 0; i < 4; i++) {
      var listItem = document.createElement("div");
      var listItem5 = document.createElement("br");
      listItem.classList.add("row")
      myList.appendChild( listItem );
      for(var j= 0; j < 4; j++){
        var listItem0 = document.createElement("div");
        listItem0.classList.add("col-md-3");
        let { Name  , Image , Id_person} = json[x];
        var listItem1 = document.createElement("a");
        listItem1.href = "../pages/person.html";
        var z = "setPerson("+`${Id_person}`+")";
        listItem1.setAttribute('onclick',z);
        listItem1.setAttribute('onmouseover',z);
        var listItem2 = document.createElement("img");
        var listItem3 = document.createElement("br");
        var listItem4 = document.createElement("a");
        listItem2.src= `${Image}`;
        listItem2.alt= "Image of "+`${Name}`;
        listItem4.textContent = `${Name}`;
        listItem.appendChild( listItem0 );
        listItem0.appendChild( listItem1 );
        listItem1.appendChild( listItem2 );
        listItem1.appendChild( listItem3 );
        listItem1.appendChild( listItem4 );
        x++;
        if(x==15){j=4;}
      }
      myList.appendChild(listItem5);
    }
  });
}

function setPerson(x){
  localStorage.setItem("Id_person",x);
}
