const appData = [
  { name: "Hydrogen", atomicMass: 1.008, symbol: "H", number: 1 },
  { name: "Helium", atomicMass: 4.0026022, symbol: "He", number: 2 },
  { name: "Lithium", atomicMass: 6.94, symbol: "Li", number: 3 },
  { name: "Beryllium", atomicMass: 9.01218315, symbol: "Be", number: 4 },
  { name: "Boron", atomicMass: 10.81, symbol: "B", number: 5 },
  { name: "Carbon", atomicMass: 12.011, symbol: "C", number: 6 },
  { name: "Nitrogen", atomicMass: 14.007, symbol: "N", number: 7 },
  { name: "Oxygen", atomicMass: 15.999, symbol: "O", number: 8 },
  { name: "Fluorine", atomicMass: 18.9984031636, symbol: "F", number: 9 },
  { name: "Neon", atomicMass: 20.17976, symbol: "Ne", number: 10 },
  { name: "Sodium", atomicMass: 22.989769282, symbol: "Na", number: 11 },
  { name: "Magnesium", atomicMass: 24.305, symbol: "Mg", number: 12 },
  { name: "Aluminium", atomicMass: 26.98153857, symbol: "Al", number: 13 },
  { name: "Silicon", atomicMass: 28.085, symbol: "Si", number: 14 },
  { name: "Phosphorus", atomicMass: 30.9737619985, symbol: "P", number: 15 },
  { name: "Sulfur", atomicMass: 32.06, symbol: "S", number: 16 },
  { name: "Chlorine", atomicMass: 35.45, symbol: "Cl", number: 17 },
  { name: "Argon", atomicMass: 39.9481, symbol: "Ar", number: 18 },
  { name: "Potassium", atomicMass: 39.09831, symbol: "K", number: 19 },
  { name: "Calcium", atomicMass: 40.0784, symbol: "Ca", number: 20 },
  { name: "Scandium", atomicMass: 44.9559085, symbol: "Sc", number: 21 },
  { name: "Titanium", atomicMass: 47.8671, symbol: "Ti", number: 22 },
  { name: "Vanadium", atomicMass: 50.94151, symbol: "V", number: 23 },
  { name: "Chromium", atomicMass: 51.99616, symbol: "Cr", number: 24 },
  { name: "Manganese", atomicMass: 54.9380443, symbol: "Mn", number: 25 },
  { name: "Iron", atomicMass: 55.8452, symbol: "Fe", number: 26 },
  { name: "Cobalt", atomicMass: 58.9331944, symbol: "Co", number: 27 },
  { name: "Nickel", atomicMass: 58.69344, symbol: "Ni", number: 28 },
  { name: "Copper", atomicMass: 63.5463, symbol: "Cu", number: 29 },
  { name: "Zinc", atomicMass: 65.382, symbol: "Zn", number: 30 },
  { name: "Gallium", atomicMass: 69.7231, symbol: "Ga", number: 31 },
  { name: "Germanium", atomicMass: 72.6308, symbol: "Ge", number: 32 },
  { name: "Arsenic", atomicMass: 74.9215956, symbol: "As", number: 33 },
  { name: "Selenium", atomicMass: 78.9718, symbol: "Se", number: 34 },
  { name: "Bromine", atomicMass: 79.904, symbol: "Br", number: 35 },
  { name: "Krypton", atomicMass: 83.7982, symbol: "Kr", number: 36 },
  { name: "Rubidium", atomicMass: 85.46783, symbol: "Rb", number: 37 },
  { name: "Strontium", atomicMass: 87.621, symbol: "Sr", number: 38 },
  { name: "Yttrium", atomicMass: 88.905842, symbol: "Y", number: 39 },
  { name: "Zirconium", atomicMass: 91.2242, symbol: "Zr", number: 40 },
  { name: "Niobium", atomicMass: 92.906372, symbol: "Nb", number: 41 },
  { name: "Molybdenum", atomicMass: 95.951, symbol: "Mo", number: 42 },
  { name: "Technetium", atomicMass: 98, symbol: "Tc", number: 43 },
  { name: "Ruthenium", atomicMass: 101.072, symbol: "Ru", number: 44 },
  { name: "Rhodium", atomicMass: 102.905502, symbol: "Rh", number: 45 },
  { name: "Palladium", atomicMass: 106.421, symbol: "Pd", number: 46 },
  { name: "Silver", atomicMass: 107.86822, symbol: "Ag", number: 47 },
  { name: "Cadmium", atomicMass: 112.4144, symbol: "Cd", number: 48 },
  { name: "Indium", atomicMass: 114.8181, symbol: "In", number: 49 },
  { name: "Tin", atomicMass: 118.7107, symbol: "Sn", number: 50 },
  { name: "Antimony", atomicMass: 121.7601, symbol: "Sb", number: 51 },
  { name: "Tellurium", atomicMass: 127.603, symbol: "Te", number: 52 },
  { name: "Iodine", atomicMass: 126.904473, symbol: "I", number: 53 },
  { name: "Xenon", atomicMass: 131.2936, symbol: "Xe", number: 54 },
  { name: "Cesium", atomicMass: 132.905451966, symbol: "Cs", number: 55 },
  { name: "Barium", atomicMass: 137.3277, symbol: "Ba", number: 56 },
  { name: "Lanthanum", atomicMass: 138.905477, symbol: "La", number: 57 },
  { name: "Cerium", atomicMass: 140.1161, symbol: "Ce", number: 58 },
  { name: "Praseodymium", atomicMass: 140.907662, symbol: "Pr", number: 59 },
  { name: "Neodymium", atomicMass: 144.2423, symbol: "Nd", number: 60 },
  { name: "Promethium", atomicMass: 145, symbol: "Pm", number: 61 },
  { name: "Samarium", atomicMass: 150.362, symbol: "Sm", number: 62 },
  { name: "Europium", atomicMass: 151.9641, symbol: "Eu", number: 63 },
  { name: "Gadolinium", atomicMass: 157.253, symbol: "Gd", number: 64 },
  { name: "Terbium", atomicMass: 158.925352, symbol: "Tb", number: 65 },
  { name: "Dysprosium", atomicMass: 162.5001, symbol: "Dy", number: 66 },
  { name: "Holmium", atomicMass: 164.930332, symbol: "Ho", number: 67 },
  { name: "Erbium", atomicMass: 167.2593, symbol: "Er", number: 68 },
  { name: "Thulium", atomicMass: 168.934222, symbol: "Tm", number: 69 },
  { name: "Ytterbium", atomicMass: 173.0451, symbol: "Yb", number: 70 },
  { name: "Lutetium", atomicMass: 174.96681, symbol: "Lu", number: 71 },
  { name: "Hafnium", atomicMass: 178.492, symbol: "Hf", number: 72 },
  { name: "Tantalum", atomicMass: 180.947882, symbol: "Ta", number: 73 },
  { name: "Tungsten", atomicMass: 183.841, symbol: "W", number: 74 },
  { name: "Rhenium", atomicMass: 186.2071, symbol: "Re", number: 75 },
  { name: "Osmium", atomicMass: 190.233, symbol: "Os", number: 76 },
  { name: "Iridium", atomicMass: 192.2173, symbol: "Ir", number: 77 },
  { name: "Platinum", atomicMass: 195.0849, symbol: "Pt", number: 78 },
  { name: "Gold", atomicMass: 196.9665695, symbol: "Au", number: 79 },
  { name: "Mercury", atomicMass: 200.5923, symbol: "Hg", number: 80 },
  { name: "Thallium", atomicMass: 204.38, symbol: "Tl", number: 81 },
  { name: "Lead", atomicMass: 207.21, symbol: "Pb", number: 82 },
  { name: "Bismuth", atomicMass: 208.980401, symbol: "Bi", number: 83 },
  { name: "Polonium", atomicMass: 209, symbol: "Po", number: 84 },
  { name: "Astatine", atomicMass: 210, symbol: "At", number: 85 },
  { name: "Radon", atomicMass: 222, symbol: "Rn", number: 86 },
  { name: "Francium", atomicMass: 223, symbol: "Fr", number: 87 },
  { name: "Radium", atomicMass: 226, symbol: "Ra", number: 88 },
  { name: "Actinium", atomicMass: 227, symbol: "Ac", number: 89 },
  { name: "Thorium", atomicMass: 232.03774, symbol: "Th", number: 90 },
  { name: "Protactinium", atomicMass: 231.035882, symbol: "Pa", number: 91 },
  { name: "Uranium", atomicMass: 238.028913, symbol: "U", number: 92 },
  { name: "Neptunium", atomicMass: 237, symbol: "Np", number: 93 },
  { name: "Plutonium", atomicMass: 244, symbol: "Pu", number: 94 },
  { name: "Americium", atomicMass: 243, symbol: "Am", number: 95 },
  { name: "Curium", atomicMass: 247, symbol: "Cm", number: 96 },
  { name: "Berkelium", atomicMass: 247, symbol: "Bk", number: 97 },
  { name: "Californium", atomicMass: 251, symbol: "Cf", number: 98 },
  { name: "Einsteinium", atomicMass: 252, symbol: "Es", number: 99 },
  { name: "Fermium", atomicMass: 257, symbol: "Fm", number: 100 },
  { name: "Mendelevium", atomicMass: 258, symbol: "Md", number: 101 },
  { name: "Nobelium", atomicMass: 259, symbol: "No", number: 102 },
  { name: "Lawrencium", atomicMass: 266, symbol: "Lr", number: 103 },
  { name: "Rutherfordium", atomicMass: 267, symbol: "Rf", number: 104 },
  { name: "Dubnium", atomicMass: 268, symbol: "Db", number: 105 },
  { name: "Seaborgium", atomicMass: 269, symbol: "Sg", number: 106 },
  { name: "Bohrium", atomicMass: 270, symbol: "Bh", number: 107 },
  { name: "Hassium", atomicMass: 269, symbol: "Hs", number: 108 },
  { name: "Meitnerium", atomicMass: 278, symbol: "Mt", number: 109 },
  { name: "Darmstadtium", atomicMass: 281, symbol: "Ds", number: 110 },
  { name: "Roentgenium", atomicMass: 282, symbol: "Rg", number: 111 },
  { name: "Copernicium", atomicMass: 285, symbol: "Cn", number: 112 },
  { name: "Nihonium", atomicMass: 286, symbol: "Nh", number: 113 },
  { name: "Flerovium", atomicMass: 289, symbol: "Fl", number: 114 },
  { name: "Moscovium", atomicMass: 289, symbol: "Mc", number: 115 },
  { name: "Livermorium", atomicMass: 293, symbol: "Lv", number: 116 },
  { name: "Tennessine", atomicMass: 294, symbol: "Ts", number: 117 },
  { name: "Oganesson", atomicMass: 294, symbol: "Og", number: 118 },
  { name: "Ununennium", atomicMass: 315, symbol: "Uue", number: 119 }
];

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
  
  document.getElementById('sendQuestion').addEventListener('click', function () {
    const client = new ApiAi.ApiAiClient({
      accessToken: '7d60f0ee98594d4fbe55f595a9645a5d'
    });
    
    client.textRequest(document.getElementById('askBox').value).then((response) => {
      const intent = response.result.metadata.intentName;
      displayRequest(document.getElementById('askBox').value);
      document.getElementById('askBox').value = '';
      switch (intent) {
        case 'atomic_weight.get':
          displayResponse('The atomic mass of ' + response.result.parameters.elements + ' is ' + (function () {
            for (let i = 0; i < appData.length; i++) {
              if (appData[i].name.toUpperCase() === response.result.parameters.elements.toUpperCase()) {
                return appData[i].atomicMass;
              }
            }
          })() + '.');
          break;
        case 'group.check':
          break;
        case 'group.get':
          break;
        case 'information':
          break;
        case 'ionic_compund_weight.get':
          break;
        case 'period.check':
          break;
        case 'period.get':
          break;
        case 'symbol.get':
          break;
        default:
          displayResponse(response.result.fulfillment.speech);
          break;
      }
    }).catch((error) => {
      alert(error);
    });
  })
})();
