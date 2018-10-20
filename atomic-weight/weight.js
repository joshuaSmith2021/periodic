var data = [];
const symbols = [];
var allElements = [];
var currentSymbol = '';

function initApp () {
  for (let i = 0; i < data.elements.length; i++) {
    document.getElementById('elementList').innerHTML += '<li>' + data.elements[i].name + ' - ' + data.elements[i].atomic_mass + '</li>';
    symbols.push(data.elements[i].symbol);
  }

  document.getElementById('elementInput').addEventListener('keyup', function () {
    const currentInput = String(document.getElementById('elementInput').value).toUpperCase();
    for (let i = 0; i < data.elements.length; i++) {
      const currentName = data.elements[i].name.toUpperCase();
      const currentElement = document.getElementById('elementList').getElementsByTagName('li')[i];
      if (currentName.indexOf(currentInput) === -1) {
        currentElement.style.display = 'none';
      } else if (currentName.indexOf(currentInput) !== -1 && currentElement.style.display === 'none') {
        currentElement.style.display = 'block';
      }
    }
  });

  document.getElementById('calculateCompound').addEventListener('click', function () {
    let weight = 0;
    allElements = [];
    currentSymbol = '';
    const currentEquation = document.getElementById('compoundInput').value;
    for (let i = 0; i < currentEquation.length; i++) {
      if (currentEquation[i].toUpperCase() === currentEquation[i] && isNaN(currentEquation[i])) {
        if (currentSymbol !== '') {
          allElements.push({
            symbol: currentSymbol.replace(/[0-9]/g, ''),
            quantity: (function () {
              if (!isNaN(parseInt(currentSymbol.replace(/[A-Z]/gi, ''), 10))) {
                return parseInt(currentSymbol.replace(/[A-Z]/gi, ''), 10);
              } else {
                return 1;
              }
            })()
          });
        }
        currentSymbol = '';
        currentSymbol += currentEquation[i];
      } else {
        currentSymbol += currentEquation[i];
      }
    }
    allElements.push({
      symbol: currentSymbol.replace(/[0-9]/g, ''),
      quantity: (function () {
        if (!isNaN(parseInt(currentSymbol.replace(/[A-Z]/gi, ''), 10))) {
          return parseInt(currentSymbol.replace(/[A-Z]/gi, ''), 10);
        } else {
          return 1;
        }
      })()
    });
    for (let i = 0; i < allElements.length; i++) {
      weight += Math.round(data.elements[symbols.indexOf(allElements[i].symbol)].atomic_mass * allElements[i].quantity);
    }
    document.getElementById('compoundDisplay').innerHTML = weight;
  });

  document.getElementById('resetCompound').addEventListener('click', function () {
    allElements = [];
    currentSymbol = '';
    document.getElementById('compoundInput').value = '';
    document.getElementById('compoundDisplay').innerHTML = 'null';
  });
}

(function () {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      data = JSON.parse(this.responseText);
    }
  };
  xhttp.open('GET', '../data/PeriodicTableJSON.json', true);
  xhttp.send();
})();
