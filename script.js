$("#btnsubmit").on('click', function(){
  var date = document.getElementById('date').value;
  var m = moment(date);
  var x = moment.unix(date);
  if (x.isValid()){
    $("#data").html("{"+ "unix:" + date +", natural: " + x.format("MMMM Do, YYYY") + "}"); 
  }
  else if(moment(m).isValid()){
    $("#data").html("{"+ "unix:" + moment(date).unix() +", natural: " + moment(date).format("MMMM Do, YYYY") + "}"); 
  }else {
      $("#data").html("{ unix: null, natural: null }");
  }
});

$("form").submit(function (e) {
    e.preventDefault();
    $('#btnsubmit').click();
});
