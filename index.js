
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let mainRow = document.createElement('div')
mainRow.setAttribute('class', 'main')
content.append(mainRow)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
mainRow.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
mainRow.append(dogDetails)

let descr = document.createElement('h3')
descr.setAttribute('class', 'descripcion')
descr.append('Description:')
dogDetails.append(descr)

let parrafillo = document.createElement('p')
parrafillo.setAttribute('class', 'parrafo')
parrafillo.append(`This gentle dog is aloof toward her owner, and never comes when called.
She always acts as though any stranger she meets will harm her,
and dislikes other animals.`)
dogDetails.append(parrafillo)

let lista = document.createElement('h3')
lista.setAttribute('class', 'alimentacion')
lista.append('Feeding Times:')
dogDetails.append(lista)

let unordered = document.createElement('ul')
unordered.setAttribute('class', 'sinOrden')
unordered.append('')
dogDetails.append(unordered)

let itemOne = document.createElement('li')
itemOne.append('09:00 am')
unordered.append(itemOne)

let itemTwo = document.createElement('li')
itemTwo.append('12:00 pm')
unordered.append(itemTwo)

let itemThree = document.createElement('li')
itemThree.append('05:00 pm')
unordered.append(itemThree)

document.querySelector('.main').style.display = 'flex';

document.querySelector('dog-image').style.width = '200px';
