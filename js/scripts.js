$(document).ready(function() {
  var contactname = [];
  var contactphone = [];
  var contactaddress = [];
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var phone = $("input#phone").val();
    var address = $("input#address").val();
    contactname.push(name);
    contactphone.push(phone);
    contactaddress.push(address);
    $(".contact").append("<li>"+contactname+"</li>");
    $(".story").show();

  });
});
