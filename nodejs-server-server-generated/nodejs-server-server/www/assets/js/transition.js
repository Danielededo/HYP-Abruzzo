function getpeopleService() {
  document.getElementById("nameService").innerHTML = localStorage.getItem('name');
  fetch("../v2/people/peopleservice/" + localStorage.getItem("Id_service"))
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    for(var i=0;i<json.length;i++){
      let { Name , Id_person , Image } = json[i];

    }
  });
}
