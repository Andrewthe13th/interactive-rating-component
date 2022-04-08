/* assign selected to rating-value clicked 
  also remove selected from all previous
*/
function changeRating(e)
{
  if(e.target.classList.contains('selected'))
    return;
  let selected = document.getElementsByClassName('selected')[0];
  selected.classList.remove('selected');
  e.target.classList.add('selected');
  
}

function submitRating()
{
  let ratingStart = document.querySelector(".rating-start");
  ratingStart.style.display = 'none';
  let ratingEnd = document.querySelector(".rating-end");
  let ratingValue = document.querySelector(".rating-value-selected");
  ratingValue.innerText = document.querySelector('.selected').innerText;
  ratingEnd.style.display = 'flex';
}

// Main 

var ratingValues = document.getElementsByClassName("rating-value");
for(let i = 0; i < ratingValues.length; i++){
  ratingValues[i].addEventListener('click', e => {
    changeRating(e);
  });
}

var ratingSubmitButton = document.querySelector(".rating-start .btn");
ratingSubmitButton.addEventListener('click', e => {
  submitRating();
});