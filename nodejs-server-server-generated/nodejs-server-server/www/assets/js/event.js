var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function getevent(){
  fetch("../v2/event/" + localStorage.getItem("Id_event"))
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
    .then(function(json) {
    let { Name , Presentation , Image , Date , Id_event , Location} = json[0];
    document.title = `${Name}`;
    document.getElementById("monthpath").innerHTML = extract(localStorage.getItem("month"));
    var li = document.getElementById("eventpath");
    li.innerHTML = `${Name}`;
    var item0 = document.getElementById("NameEvent");
    var item1 = document.createElement("b");
    item1.textContent = `${Name}`;
    item0.appendChild(item1);
    document.getElementById("imgevent").src = `${Image}`;
    var item2 = document.getElementById("eventPresentation");
    item2.innerHTML = `${Presentation}`;
    fetch("../v2/person/" + localStorage.getItem("Id_event"))
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then(function(person) {
      var contact = document.getElementById("contactPerson");
      contact.innerHTML = "The contact event organizer is ";
      var a = document.createElement("a");
      a.href = "../pages/person.html";
      let { Name , Id_person} = person[0];
      a.textContent = `${Name}`;
      contact.appendChild(a);
      var z = "setPerson("+`${Id_person}`+")";
      a.setAttribute("onclick",z);
    });
    fetch("../v2/services/servicesEvent/" + localStorage.getItem("Id_event"))
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then(function(serv) {
      involveServ = document.getElementById("involveServ");
      if(serv.length == 0){
        involveServ.innerHTML = "No service associated to it";
      }else{
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
      }
    });
    var date = document.getElementById("date");
    date.innerHTML = `${Date}`.substring(0,10);
    var location = document.getElementById("location");
    location.src = `${Location}`;
  });
}

function setPerson(x) {
  localStorage.setItem("Id_person",x);
}

function setService(x){
  localStorage.setItem("Id_service",x);
}

function extract(x){
  var text;
  switch (x) {
    case "1":
      text= "January";
      break;
    case "2":
      text="February";
      break;
    case "3":
      text="March";
      break;
    case "4":
      text="April";
      break;
    case "5":
      text="May";
      break;
    case "6":
      text="June";
      break;
    case "7":
      text="July";
      break;
    case "8":
      text="August";
      break;
    case "9":
      text="September"
      break;
    case "10":
      text="October"
      break;
    case "11":
      text="November"
      break;
    case "12":
      text="December"
      break;
  }
  return text;
}
