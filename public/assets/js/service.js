function getservice(){
  fetch("../v2/services/" + localStorage.getItem("Id_service"))
  .then(function(response) {
      if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    let { Name , Presentation , Image , Photos , Id_service} = json[0];
    document.title = `${Name}`;
    var li = document.getElementById("pathName");
    li.innerHTML = `${Name}`;
    var item0 = document.getElementById("NameService");
    var item1 = document.createElement("b");
    item1.textContent = `${Name}`;
    item0.appendChild(item1);
    document.getElementById("imgservice").src = `${Image}`;
    document.getElementById("imgservice").alt = "Image of service: " + `${Name}`;
    var item2 = document.getElementById("presentation");
    var item3 = document.createElement("p");
    item3.innerHTML = `${Presentation}`;
    item2.appendChild(item3);
    document.getElementById("first").src = json[0].Photos[0];
    document.getElementById("second").src = json[0].Photos[1];
    document.getElementById("third").src = json[0].Photos[2];
    document.getElementById("fourth").src = json[0].Photos[3];
    fetch("../v2/event/eventService/" + `${Id_service}`)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then(function(even) {
      var presents = document.getElementById("presents");
      if(even.length == 0){
        presents.textContent = "No event has the service in.";
      }else{
        var a = document.createElement("a");
        presents.innerHTML = "This service is presented in the ";
        presents.appendChild(a);
        let { Name , Id_event , Date} = even[0];
        a.href = "../pages/event.html";
        a.textContent = `${Name}`;
        var x = `${Date}`.substring(5,7);
        var z = "setEvent("+`${Id_event}`+","+x+")";
        a.setAttribute("onclick",z);
        a.setAttribute('onmouseover',z);
        var here = document.createTextNode(" event.");
        presents.appendChild(here);
      }
    });
    localStorage.setItem("name",`${Name}`);
  });
}

function setEvent(x,y){
  localStorage.setItem("Id_event",x);
  localStorage.setItem("month",y);
}

function serviceTransition() {
  if(localStorage.getItem('bool') == 'true'){
    localStorage.removeItem('bool');
    var y = document.getElementsByClassName("service");
    document.getElementById("presentation").style.display="none";
    y[0].style.textDecoration="none";
    var x = document.getElementById("serviceInfo");
    x.style.display="block";
    document.getElementById("info-service").style.textDecoration = "underline";
  }
}
