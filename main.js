// fetch("http://www.recipepuppy.com/api/")
//   .then(function(response){
//     if(response.status !== 200){
//       console.log(response.status);
//       return;
//     }
//
//   })

let submit = document.querySelector('.submitbutton');
submit.addEventListener('click', function(){
  let input = document.querySelector('.searchword');
  console.log(input.value);
  searching(input.value);
  input.value = '';


});
function searching(ourInput){
let searchURL = "http://recipepuppyproxy.herokuapp.com/api/?q=" + ourInput;
fetch(searchURL)
  .then(function(response){
    if(response.status !== 200){
      console.log(response.status);
      return;
    }
  return response.json();

}).then(function(data){
  console.log(data);
  data.results.forEach(function(recipecard){
    console.log(recipecard.title);
  })
})
}
