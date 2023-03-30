// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articleHeart = document.querySelectorAll('.like-glyph');

function clickHeart(e){
  const heart = e.target
  mimicServerCall()
  .then(serverMessage => {
    alert("You notified the server")
    alert(serverMessage)
    if (heart.textContent == EMPTY_HEART){
      heart.textContent = FULL_HEART
    } else if (heart.textContent == FULL_HEART){
      heart.textContent = EMPTY_HEART
    }
  })
  .catch(() => {
    alert('Something went wrong');
    let modal = document.querySelector('#modal')
    modal.classList.remove('hidden')
    setTimeout(() => modal.className = 'hidden', 3000)
    
    // setTimeout(() => unhideModal.className = '.hidden', 3000)
  })
  }

for (const glyph of articleHeart){
  glyph.addEventListener('click',clickHeart)
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
