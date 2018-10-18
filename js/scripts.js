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
    $(".contact").append("<li>"+name+"</li>");
    $(".story").show();
    $("ul.contact").children("li").click(function(){
      var index=Array.prototype.indexOf.call(this.parentNode.children, this);
      $(this).text("name :"+contactname[index-1]+"-phone : "+contactphone[index-1]+"-address :"+contactaddress[index-1]);
    });
  });

});
