import { submitForm } from './submitForm'

(function () {
  //select form
  var form = document.querySelector('.needs-validation')

  form.addEventListener('submit', function (event) {
    //valid form
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      form.classList.add('was-validated')
    } else {
      event.preventDefault()
      form.classList.add('was-validated')
      //if form valid make submit
      submitForm(form)
    }
  }, false)
})()
