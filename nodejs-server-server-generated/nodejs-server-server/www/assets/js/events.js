function eventpage(x,y){
  var myList = document.getElementById(x);
  fetch("../v2/events/" + y )
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    if (json.length==0) {
      var listItem1 = document.createElement("h3");
        listItem1.textContent = "No events scheduled on this month";
        myList.appendChild(listItem1);
    }else {
        for (var j = 0; j < json.length; j++) {
          let { Name  , Date , Id_event, Image} = json[j];
          var listItem2 = document.createElement("div");
          listItem2.classList.add("row");
          var listItem3 = document.createElement("div");
          listItem3.classList.add("col-md-2");
          var listItem4 = document.createElement("div");
          listItem4.classList.add("col-md-4");
          myList.appendChild(listItem2);
          listItem2.appendChild(listItem3);
          listItem2.appendChild(listItem4);
          var listItem5 = document.createElement("a");
          var listItem6 = document.createElement("h3");
          var listItem7 = document.createElement("br");
          var listItem8 = document.createElement("p");
          var listItem9 = document.createElement("img");
          listItem6.textContent = `${Name}`;
          listItem8.textContent = "Date:  "+`${Date}`.substring(5,10);
          listItem3.appendChild(listItem5);
          listItem5.appendChild(listItem6);
          listItem3.appendChild(listItem7);
          listItem3.appendChild(listItem8);
          listItem9.src = `${Image}`;
          listItem9.width = 562;
          listItem9.height = 375;
          listItem4.appendChild(listItem9);
          listItem5.href = "../pages/event.html";
          var r = `${Date}`.substring(5,7);
          var z = "setEvent("+`${Id_event}`+","+r +")";
          listItem5.setAttribute('onclick',z);
          if (j==0) {
            var listItem10 = document.createElement("br");
            myList.appendChild(listItem10);}
        }
      }
    });
}

function setEvent(x,y){
  localStorage.setItem("Id_event",x);
  localStorage.setItem("month",y);
}