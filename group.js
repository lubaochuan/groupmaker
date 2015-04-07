var colors = ["red", "green", "orange", "blue", "purple", "yellow", "black", "cyan", "pink"];

function group() {
  // reset result
  $("#result").empty();
  
  // split names into an array
  var str = $("#input").val();
  if (str.trim().length == 0) {
    alert("Pleaseenter names first.");
    return;
  }
  var names = str.split("\n"); 
  
  // randomly swap elements
  var i=0;
  while(i<20){
    var first = parseInt((Math.random()*100)%names.length);
    var second = parseInt((Math.random()*100)%names.length);
    var temp = names[first];
    names[first] = names[second];
    names[second] = temp;
    i++;
  }
  
  // create groups of three  
  var group_index=0;
  var groups = Array();
  var num_groups = parseInt((names.length+1)/3);
  for (var group_index=0; group_index<num_groups; group_index++){
    var border = "5px solid "+colors[group_index%colors.length];
    groups[group_index] = $("<div>").css("border", border);
    $("#result").append(groups[group_index]);
  }

  // deal names to groups 
  for (i=0; i<names.length; i++){
    groups[i%groups.length].append($("<div>").text(names[i]));
  }

  //$("#result").append($("<p>").text("hello"));
  //alert(names);
}


$(document).ready(function(){
  $("#btn_group").click(group);
});
