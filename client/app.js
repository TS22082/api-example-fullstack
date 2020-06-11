$(document).ready(function () {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/api",
  })
    .then((res) => {
      console.log(res);
    })
    .then(() => {
      $.ajax({
        type: "GET",
        dataType: "json",
        url: "/api/proof",
      }).then((res) => console.log(res));
    });
});
