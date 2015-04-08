var colors = ["red", "green", "orange", "blue", "purple", "yellow", "black", "cyan", "pink"];

// Split a list of strings to an array.
// Allowed delimiters are space, tab, semicolon,
// and link breaks.
// It should trim the strings.
function str2array(str){
  str_cleaned = str.replace(/\n|,|;/g, " ").trim();
  if (str_cleaned.length == 0){
    return null;
  }
  var array = str_cleaned.split(/\s+/);
  return array;
}

function group() {
  var names = str2array($("#input").val());
  if (names == null){
    alert("Check your input.");
    return;
  }

  // reset result
  $("#result").empty();
  
  // randomly swap elements
  var i=0;
  while(i<50){
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
