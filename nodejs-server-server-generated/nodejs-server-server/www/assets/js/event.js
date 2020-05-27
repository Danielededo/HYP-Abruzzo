function getevent(){
  fetch("../v2/event/" + localStorage.getItem("Id_event"))
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {

  });
}
