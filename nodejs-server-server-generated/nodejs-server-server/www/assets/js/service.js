function getservice(){
  fetch("../v2/services/" + localStorage.getItem("Id_service"))
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    let { Name , Presentation , Image , Photos , Id_event} = json[0];
    document.title = `${Name}`;
    var li = document.getElementById("pathName");
    li.innerHTML = `${Name}`;
    var item0 = document.getElementById("NameService");
    var item1 = document.createElement("b");
    item1.textContent = `${Name}`;
    item0.appendChild(item1);
    document.getElementById("imgservice").src = `${Image}`;
    var item2 = document.getElementById("presentation");
    var item3 = document.createElement("p");
    item3.innerHTML = `${Presentation}`;
    item2.appendChild(item3);
  });
}
