function update(value){

  console.log(value);
  //var x = document.getElementById("myText").value;

  document.getElementById('screen').value+=value;
  //document.getElementById('screen').value=value
}

function result() {

  var exp=document.getElementById('screen').value;
  console.log(exp);
  console.log(eval(exp));
  document.getElementById('screen').value=eval(exp);
}

function form_reset() {

  document.getElementById('screen').value='';

}
