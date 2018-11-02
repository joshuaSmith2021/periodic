// Page setup
(function () {
  document.getElementById('tab-display').style.height = (window.innerHeight - document.getElementById('topbar').offsetHeight - document.getElementById('bottombar').offsetHeight) + 'px';
  document.getElementById('aiResponse').style.height = document.getElementById('sideBox').offsetHeight - document.getElementById('aiBox').offsetHeight - document.getElementById('bottombar').offsetHeight + 'px';
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

// Google authentication
document.getElementById('gSignIn').addEventListener('click', function () {
  if (firebase.auth().currentUser) {
    //user is signed in
  } else {
    //user is not signed in
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      alert(result.user.email + '\n' + result.user.uid);
    }).catch((e) => {
      console.log(e);
    });
  }
});

function displayResponse (text) {
  document.getElementById('aiResponse').innerHTML += '<br><div class="from-bot roboto w3-padding">' + text + '</div>';
}

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
      'How many valence electrons does silver have?',
      'Is carbon a halogen?'
	  ],
	
    backSpeed: 50,
    typeSpeed: 75,
  });
  
  const placeholderCycle = setInterval(function () {
    document.getElementById('askBox').placeholder = document.getElementById('placeholderText').innerText;
  }, 10);
})();
