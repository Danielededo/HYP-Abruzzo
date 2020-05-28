function getperson(){
  fetch("../v2/people/" + localStorage.getItem("Id_person"))
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    var item0 = document.getElementById("NamePerson");
    var item1 = document.createElement("b");
    let { Name , Description , Image} = json[0];
    document.title = `${Name}`;
    var li = document.getElementById("pathName");
    li.innerHTML = `${Name}`;
    item1.textContent = `${Name}`;
    item0.appendChild(item1);
    var item2 = document.getElementById("profile");
    item2.src = `${Image}`;
    var item3 = document.getElementById("descript");
    item3.textContent = `${Description}`;
    fetch("../v2/event/eventPerson/" + localStorage.getItem("Id_person"))
    .then(function(response) {
        if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
    }
      return response.json();
    })
    .then(function(even) {
      var contact = document.getElementById("contactEvent");
      if(even.length == 0){
         contact.textContent = "No event managed.";
      }else{
        let { Name , Id_event , Date} = even[0];
        contact.href = "../pages/event.html";
        contact.textContent = `${Name}`;
        var x = `${Date}`.substring(5,7);
        var z = "setEvent("+`${Id_event}`+","+x+")";
        contact.setAttribute("onclick",z);
      }
    });
    fetch("../v2/services/servicesPerson/" + localStorage.getItem("Id_person"))
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then(function(serv) {
      involveServ = document.getElementById("involveServ");
      for(var i=0; i<serv.length;i++){
        var listIt = document.createElement("li")
        var involve = document.createElement("a");
        involveServ.appendChild(listIt);
        listIt.appendChild(involve);
        let { Name , Id_service} = serv[i];
        involve.href = "../pages/service.html";
        involve.textContent = `${Name}`;
        var z = "setService("+`${Id_service}`+")";
        involve.setAttribute("onclick",z);
      }
    });
  });
}

function setEvent(x,y){
  localStorage.setItem("Id_event",x);
  localStorage.setItem("month",y);
}

function setService(x){
  localStorage.setItem("Id_service",x);
}
