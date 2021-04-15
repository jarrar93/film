var x = prompt('please enter your age');
     if(x >= 18){
  document.write('welcome to page');
  document.write('<img src="https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SL1200_.jpg">');
} 
else if(x < 18){
  alert('Attention It may contain scenes that are not appropriate for your age');

  document.write(' so sory');
  document.write('<img src="https://i.pinimg.com/736x/b4/42/b3/b442b3c2ac6ac0beffc9e554474a208c.jpg ">');
  
}
  var y = prompt('Hello, please enter your fav actor name from The Dark Knight movie ?');
  while(y !== 'jack' && y !== 'bool'){
  y = prompt('Please enter the name jack or bool');}
  var z;

if(y === 'jack'){
z ='<img src="https://www.hiamag.com/sites/default/files/styles/album/public/hiaimages/23/01/2017/49685011580900272.jpg">';
}
else if (y === 'bool'){
  z ='<img src="https://img.youm7.com/xlarge/20190902055206526.jpg">';
} 
var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(z);
}