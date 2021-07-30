const $formResponseMessage = document.querySelector('.form__response-message')

export function submitForm (form) {
  //get inputs data from form
  let data = Object.fromEntries(new FormData(form).entries())
  //format data for server
  data = formatData(data)
  //make post request
  fetch('/order', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
    .then(res => {
    //positive response
      if(res.ok) {
        return res.json()
      }
      //negative response
      return res.text().then(text => {
        $formResponseMessage.classList.add('error-submit')
        $formResponseMessage.innerHTML = text.message
        //remove validation class and reset form
        form.classList.remove('was-validated')
        form.reset()
      })
    })
    .then(data => {
      //add success submit class to the form message request div
      $formResponseMessage.classList.add('success-submit')
      $formResponseMessage.innerHTML = data.message
      //remove validation class and reset form
      form.classList.remove('was-validated')
      form.reset()
      //remove response message from DOM
      setTimeout(()=>{
        $formResponseMessage.innerHTML= ''
      }, 5000)
    })
}

function formatData (data) {
  const newData = {...data}
  //make acceptable data formats for phoneNumber
  let phone = newData.phone.match(/\d/g).join('')
  newData.phone = phone
  //make acceptable data formats for cart number
  let creditCard = newData.creditCard.match(/\d/g).join('')
  newData.creditCard = creditCard

  return newData
}
