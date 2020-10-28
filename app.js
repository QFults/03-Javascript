// DOM (Document Object Model) Manipulation

// Grabbing an element from the HTML page
// document.querySelector('#myHeading')
// document.getElementById('myHeading')

// You can change the text content or inner HTML of an element
// document.getElementById('myHeading').textContent = 'Something Else'
// document.getElementById('myHeading').innerHTML = '<button>Click Me</button>'

// document.getElementById('name').textContent = 'John Doe'
// document.getElementById('bio').textContent = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo cumque voluptatum numquam aut nemo, quia libero esse dolor ducimus, tempora vero quasi? Adipisci rem nesciunt sapiente, commodi explicabo exercitationem. Aperiam, dolores.`
// document.getElementById('image').src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F05%2FSpongeBob-and-Patrick-Featured-Image.jpg&f=1&nofb=1'

// ------------------------

// Creating HTML elements through Javascript

// let nameElem = document.createElement('h1')
// nameElem.textContent = 'John Doe'

// let bioElem = document.createElement('p')
// bioElem.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo cumque voluptatum numquam aut nemo, quia libero esse dolor ducimus, tempora vero quasi? Adipisci rem nesciunt sapiente, commodi explicabo exercitationem. Aperiam, dolores.`

// let imgElem = document.createElement('img')
// imgElem.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F05%2FSpongeBob-and-Patrick-Featured-Image.jpg&f=1&nofb=1'

// document.getElementById('profile').append(nameElem)
// document.getElementById('profile').append(imgElem)
// document.getElementById('profile').append(bioElem)