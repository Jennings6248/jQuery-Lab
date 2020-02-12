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

const clickAddSkill = function() {
  const inputField = document.querySelector('.input')
  const textValue = inputField.value
  inputField.value = ''
  developerSkills.push(textValue)
  render()
  console.log(developerSkills)
}

const render = function() {
  //   const removeButton = document.createElement('button')
  //   removeButton.setAttribute('class', 'remove-btn')
  //   removeButton.textContent = 'X'
  //   ul.appendChild(removeButton)
  const ul = document.querySelector('.wrapper-ul')
  ul.innerHTML = ''
  developerSkills.forEach(function(skill, i) {
    const li = document.createElement('li')  
    li.setAttribute('class', 'li-wrapper')
    ul.appendChild(li)
    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'remove-btn')
    removeButton.textContent = 'X'
    li.appendChild(removeButton)

    const span = document.createElement('span')
    span.setAttribute('class', 'skill')
    span.textContent = skill
    li.appendChild(span)

     removeButton.addEventListener('click', function() {
         developerSkills.splice(i, 1)
         console.log(developerSkills)
         render()
     })
  })
}



const button = document.querySelector('.btn')
button.addEventListener('click', clickAddSkill)

// const ulWrap = document.querySelector('.wrapper-ul')
// ulWrap.addEventListener('click', function(e) {
//   ulWrap.removeChild(ulWrap.childNodes[0])
//   ulWrap.removeChild(ulWrap.childNodes[0])
//   developerSkills.pop()
//   console.log(developerSkills)
// })
