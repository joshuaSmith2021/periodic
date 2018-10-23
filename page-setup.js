// Page setup
(function () {
  document.getElementById('tab-display').style.height = (window.innerHeight - document.getElementById('topbar').offsetHeight - document.getElementById('bottombar').offsetHeight) + 'px';
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

// AI question management
(function () {
  document.getElementById('sendQuestion').addEventListener('click', function () {
    // This is where an apiai request is handled
  })
})();
