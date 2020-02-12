//const addForm = document.querySelector('.add-text')
let developerSkills = []

const clickAddSkill = function() {
  const $inputField = $('.input')
  const textValue = $inputField.val()
  $inputField.val('')
  developerSkills.push(textValue)
  render()
  console.log(developerSkills)
}

const render = function() {
  const $ul = $('.wrapper-ul')
  $ul.html('')
  developerSkills.forEach(function(skill, i) {
    const li = document.createElement('li')
    li.setAttribute('class', 'li-wrapper')
    $ul.append(li)
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

const $button = $('.btn')
$button.click(clickAddSkill)
