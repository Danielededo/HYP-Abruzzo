function getpeopleService() {
  var name = localStorage.getItem('name');
  document.getElementById("nameService").innerHTML = name;
  document.getElementById("name").insertAdjacentHTML('beforeend',name);
  fetch("../v2/people/peopleservice/" + localStorage.getItem("Id_service"))
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    var item0 = document.getElementById("transition");
    for(var i=0;i<json.length;i++){
      let { Name , Id_person , Image } = json[i];
      var item7 = document.createElement("div");
      if (json.length!=4) {
        item7.classList.add("col-md-4");
      }else {
        item7.classList.add("col-md-3");
      }
      var item1 = document.createElement("div");
      item1.classList.add("card");
      var item2 = document.createElement("img");
      item2.classList.add("card-img-top");
      item2.src = `${Image}`;
      item2.alt = "Image of "+ `${Name}`;
      var item3 = document.createElement("div");
      item3.classList.add("card-body");
      var item4 = document.createElement("h5");
      item4.classList.add("card-title");
      item4.textContent = `${Name}`;
      var item5 = document.createElement("div");
      item5.classList.add("card-body");
      var item6 = document.createElement("a");
      item6.classList.add("card-link");
      item6.href = "../pages/person.html";
      var z = "setPerson("+`${Id_person}`+")";
      item6.setAttribute('onclick',z);
      item6.setAttribute('onmouseover',z);
      item6.textContent = "Click Here";
      item0.appendChild(item7);
      item7.appendChild(item1);
      item1.appendChild(item2);
      item1.appendChild(item3);
      item1.appendChild(item5);
      item3.appendChild(item4);
      item5.appendChild(item6);
      item0.appendChild(document.createElement("br"));
    }
  });
}


function setPerson(x){
  localStorage.setItem("Id_person",x);
}
