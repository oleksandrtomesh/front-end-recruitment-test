const $button = document.querySelector('button')
const $image = document.querySelector('img')

$button.addEventListener('click', cloningBacon)

function cloningBacon (e){
  $image.insertAdjacentHTML('beforebegin', imgHTML())
}

function imgHTML (){
  return '<img src="/images/bacon.jpg" alt="picture og bacon">'
}
