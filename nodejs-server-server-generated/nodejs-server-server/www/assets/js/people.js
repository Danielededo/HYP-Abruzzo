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
        var z = ""+`${Id_person}`+"";
        listItem1.setAttribute('onclick','getperson(2)');
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
        if(x==14){j=4;}
      }
      myList.appendChild(listItem5);
    }
  });
}

function getperson(x){
  fetch("../v2/people/" + x)
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    var item0 = document.getElementById("NamePerson");
    var item1 = document.createElement("b");
    let { Name } = json[0];
    item1.textContent = `${Name}`;
    item0.appendChild(item1);
  });
}
