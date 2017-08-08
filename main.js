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
  document.querySelector('.container').innerHTML = '';
  let input = document.querySelector('.searchword');
  console.log(input.value);
  searching(input.value);
  input.value = '';


});
function searching(ourInput){
fixedInput = ourInput.replace(/ /i, '&');
let searchURL = "http://recipepuppyproxy.herokuapp.com/api/?q=" + fixedInput;
console.log(searchURL);
fetch(searchURL)
  .then(function(response){
    if(response.status !== 200){
      console.log(response.status);
      return;
    }
  return response.json();

}).then(function(data){
  console.log(data);
  data.results.forEach(function(recipeInfo){
    console.log(recipeInfo.title);
    if (recipeInfo.thumbnail !== '') {
      let recipecard = `
      <img src=${recipeInfo.thumbnail}>
      <p>${recipeInfo.title}</p>
      <a href = ${recipeInfo.href}>See the recipe</a>`

    let newrecipecard = document.createElement('div');
    newrecipecard.className = 'recipe';
    newrecipecard.innerHTML = recipecard;
    document.querySelector('.container').appendChild(newrecipecard);
    }
    else{
      let recipecard = `
      <img src="http://via.placeholder.com/100x100">
      <p>${recipeInfo.title}</p>
      <a href = ${recipeInfo.href}>See the recipe</a>`

    let newrecipecard = document.createElement('div');
    newrecipecard.className = 'recipe';
    newrecipecard.innerHTML = recipecard;
    document.querySelector('.container').appendChild(newrecipecard);
    }
  })
})
}
