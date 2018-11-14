// Page setup
(function () {
  document.getElementById('tab-display').style.height = (window.innerHeight - document.getElementById('topbar').offsetHeight - document.getElementById('bottombar').offsetHeight) + 'px';
  document.getElementById('aiResponse').style.height = document.getElementById('sideBox').offsetHeight - document.getElementById('aiBox').offsetHeight - document.getElementById('aiCreds').offsetHeight -document.getElementById('bottombar').offsetHeight + 'px';
  for (let i = 0; i < document.getElementsByClassName('vertical-spacer').length; i++) {
    document.getElementsByClassName('vertical-spacer')[i].style.height = document.getElementsByClassName('vertical-spacer')[i].getAttribute('data-spacer-height');
  }
  
  for (let i = 0; i < document.getElementsByClassName('big-section').length; i++) {
    document.getElementsByClassName('big-section')[i].style.height = (window.innerHeight - document.getElementById('topbar').offsetHeight - document.getElementById('bottombar').offsetHeight) + 'px';
  }
  
  for (let i = 0; i < document.getElementsByClassName('tabbutton').length; i++) {
    document.getElementsByClassName('tabbutton')[i].addEventListener('click', function (element) {
      for (let j = 0; j < document.getElementsByClassName('tabbutton').length; j++) {
        document.getElementsByClassName('tabbutton')[j].classList.remove('selected');
      }
      this.classList.add('selected');
      for (let k = 0; k < document.getElementsByClassName('tab').length; k++) {
        document.getElementsByClassName('tab')[k].style.display = 'none';
      }
      document.getElementById(this.innerText.toLowerCase() + 'Section').style.display = 'block';
    });
  }
})();

function displayResponse (text) {
  document.getElementById('aiResponse').innerHTML += '<br><div class="from-bot roboto w3-padding">' + text + '</div>';
}

// Get session ID
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}
const sessionId = uuidv4();

function displayRequest (text) {
  document.getElementById('aiResponse').innerHTML += '<br><div class="from-user roboto w3-padding">' + text + '</div>';
}

// AI question management
(function () {
  new Typed('#placeholderText', {
    loop: true,
	  startDelay: 1000,
    smartBackspace: false,
	
	  strings: [
		  'What is the atomic mass of hydrogen?',
      'Which period is gold in?',
      'Is the symbol for antimony Sb?',
      'Is carbon a halogen?',
      'What is the atomic weight of NaCl?'
	  ],
	
    backSpeed: 50,
    typeSpeed: 75,
  });
  
  const placeholderCycle = setInterval(function () {
    document.getElementById('askBox').placeholder = document.getElementById('placeholderText').innerText;
  }, 10);
  
  document.getElementById('sendQuestion').addEventListener('click', function () {
    const request = new XMLHttpRequest();
    const requestText = document.getElementById('askBox').value;
    displayRequest(requestText);
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const dialogflowResponse = JSON.parse(this.responseText);
        displayResponse(dialogflowResponse.responseText);
      }
    };
    request.open('POST', 'https://lynx-chemistry.herokuapp.com/?q=' + encodeURI(requestText) + '&key=' + document.getElementById('accessToken').value + '&session=' + sessionId, true);
    request.send();
    document.getElementById('askBox').value = '';
  });
})();
