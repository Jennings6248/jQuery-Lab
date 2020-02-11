//const addForm = document.querySelector('.add-text')
let developerSkills = []

// const $inputField = $('.input')
// const $button = $('.btn')

// $button.click(function(e) {
//   const inputValue = $inputField.val()
//   developerSkills.push(inputValue)
//   console.log(developerSkills)

//   render()
// })

// //set up render

// const render = function() {
//   const $renderInputValue = $inputField.val()
//     const $listItem = $('list')
//    const $child = $listItem.append('$renderInputValue')
//    const $container = $('sub-container')
//    $container.append($child)

// }

// const button = document.querySelector('.btn')

// button.addEventListener('click', function(e) {
//   const ul = document.querySelector('.wrapper-ul')
//   const inputField = document.querySelector('.input')
//   const textValue = inputField.value

//   const removeButton = document.createElement('button')
//   removeButton.setAttribute('class', 'btn')
//   removeButton.textContent = 'X'
//   ul.appendChild(removeButton)
//   const li = document.createElement('li')
//   li.setAttribute('class', 'list')
//   li.textContent = textValue
//   ul.appendChild(li)

//   developerSkills.push(textValue)
//   console.log(developerSkills)
// })

const render = function() {
  const ul = document.querySelector('.wrapper-ul')
  const inputField = document.querySelector('.input')
  const textValue = inputField.value
  inputField.value = ''
  developerSkills.push(textValue)
  console.log(developerSkills)

  const removeButton = document.createElement('button')
  removeButton.setAttribute('class', 'remove-btn')
  removeButton.textContent = 'X'
  ul.appendChild(removeButton)
  const li = document.createElement('li')
  li.setAttribute('class', 'list')
  li.textContent = textValue
  ul.appendChild(li)
}

const button = document.querySelector('.btn')
button.addEventListener('click', render)

const ulWrap = document.querySelector('.wrapper-ul')
ulWrap.addEventListener('click', function(e) {
  ulWrap.removeChild(ulWrap.childNodes[0])
  ulWrap.removeChild(ulWrap.childNodes[0])
  developerSkills.pop()
  console.log(developerSkills)
})
