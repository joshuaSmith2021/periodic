const appData = [
  {
    "name":"Hydrogen",
    "atomicMass":1.008,
    "symbol":"H",
    "number":1,
    "period":1,
    "group":1,
    "boilingPoint":20.271,
    "category":"diatomic nonmetal",
    "meltingPoint":13.99
  },
  {
    "name":"Helium",
    "atomicMass":4.0026022,
    "symbol":"He",
    "number":2,
    "period":1,
    "group":18,
    "boilingPoint":4.222,
    "category":"noble gas",
    "meltingPoint":0.95
  },
  {
    "name":"Lithium",
    "atomicMass":6.94,
    "symbol":"Li",
    "number":3,
    "period":2,
    "group":1,
    "boilingPoint":1603,
    "category":"alkali metal",
    "meltingPoint":453.65
  },
  {
    "name":"Beryllium",
    "atomicMass":9.01218315,
    "symbol":"Be",
    "number":4,
    "period":2,
    "group":2,
    "boilingPoint":2742,
    "category":"alkaline earth metal",
    "meltingPoint":1560
  },
  {
    "name":"Boron",
    "atomicMass":10.81,
    "symbol":"B",
    "number":5,
    "period":2,
    "group":13,
    "boilingPoint":4200,
    "category":"metalloid",
    "meltingPoint":2349
  },
  {
    "name":"Carbon",
    "atomicMass":12.011,
    "symbol":"C",
    "number":6,
    "period":2,
    "group":14,
    "boilingPoint":null,
    "category":"polyatomic nonmetal",
    "meltingPoint":null
  },
  {
    "name":"Nitrogen",
    "atomicMass":14.007,
    "symbol":"N",
    "number":7,
    "period":2,
    "group":15,
    "boilingPoint":77.355,
    "category":"diatomic nonmetal",
    "meltingPoint":63.15
  },
  {
    "name":"Oxygen",
    "atomicMass":15.999,
    "symbol":"O",
    "number":8,
    "period":2,
    "group":16,
    "boilingPoint":90.188,
    "category":"diatomic nonmetal",
    "meltingPoint":54.36
  },
  {
    "name":"Fluorine",
    "atomicMass":18.9984031636,
    "symbol":"F",
    "number":9,
    "period":2,
    "group":17,
    "boilingPoint":85.03,
    "category":"diatomic nonmetal",
    "meltingPoint":53.48
  },
  {
    "name":"Neon",
    "atomicMass":20.17976,
    "symbol":"Ne",
    "number":10,
    "period":2,
    "group":18,
    "boilingPoint":27.104,
    "category":"noble gas",
    "meltingPoint":24.56
  },
  {
    "name":"Sodium",
    "atomicMass":22.989769282,
    "symbol":"Na",
    "number":11,
    "period":3,
    "group":1,
    "boilingPoint":1156.09,
    "category":"alkali metal",
    "meltingPoint":370.944
  },
  {
    "name":"Magnesium",
    "atomicMass":24.305,
    "symbol":"Mg",
    "number":12,
    "period":3,
    "group":2,
    "boilingPoint":1363,
    "category":"alkaline earth metal",
    "meltingPoint":923
  },
  {
    "name":"Aluminium",
    "atomicMass":26.98153857,
    "symbol":"Al",
    "number":13,
    "period":3,
    "group":13,
    "boilingPoint":2743,
    "category":"post-transition metal",
    "meltingPoint":933.47
  },
  {
    "name":"Silicon",
    "atomicMass":28.085,
    "symbol":"Si",
    "number":14,
    "period":3,
    "group":14,
    "boilingPoint":3538,
    "category":"metalloid",
    "meltingPoint":1687
  },
  {
    "name":"Phosphorus",
    "atomicMass":30.9737619985,
    "symbol":"P",
    "number":15,
    "period":3,
    "group":15,
    "boilingPoint":null,
    "category":"polyatomic nonmetal",
    "meltingPoint":null
  },
  {
    "name":"Sulfur",
    "atomicMass":32.06,
    "symbol":"S",
    "number":16,
    "period":3,
    "group":16,
    "boilingPoint":717.8,
    "category":"polyatomic nonmetal",
    "meltingPoint":388.36
  },
  {
    "name":"Chlorine",
    "atomicMass":35.45,
    "symbol":"Cl",
    "number":17,
    "period":3,
    "group":17,
    "boilingPoint":239.11,
    "category":"diatomic nonmetal",
    "meltingPoint":171.6
  },
  {
    "name":"Argon",
    "atomicMass":39.9481,
    "symbol":"Ar",
    "number":18,
    "period":3,
    "group":18,
    "boilingPoint":87.302,
    "category":"noble gas",
    "meltingPoint":83.81
  },
  {
    "name":"Potassium",
    "atomicMass":39.09831,
    "symbol":"K",
    "number":19,
    "period":4,
    "group":1,
    "boilingPoint":1032,
    "category":"alkali metal",
    "meltingPoint":336.7
  },
  {
    "name":"Calcium",
    "atomicMass":40.0784,
    "symbol":"Ca",
    "number":20,
    "period":4,
    "group":2,
    "boilingPoint":1757,
    "category":"alkaline earth metal",
    "meltingPoint":1115
  },
  {
    "name":"Scandium",
    "atomicMass":44.9559085,
    "symbol":"Sc",
    "number":21,
    "period":4,
    "group":3,
    "boilingPoint":3109,
    "category":"transition metal",
    "meltingPoint":1814
  },
  {
    "name":"Titanium",
    "atomicMass":47.8671,
    "symbol":"Ti",
    "number":22,
    "period":4,
    "group":4,
    "boilingPoint":3560,
    "category":"transition metal",
    "meltingPoint":1941
  },
  {
    "name":"Vanadium",
    "atomicMass":50.94151,
    "symbol":"V",
    "number":23,
    "period":4,
    "group":5,
    "boilingPoint":3680,
    "category":"transition metal",
    "meltingPoint":2183
  },
  {
    "name":"Chromium",
    "atomicMass":51.99616,
    "symbol":"Cr",
    "number":24,
    "period":4,
    "group":6,
    "boilingPoint":2944,
    "category":"transition metal",
    "meltingPoint":2180
  },
  {
    "name":"Manganese",
    "atomicMass":54.9380443,
    "symbol":"Mn",
    "number":25,
    "period":4,
    "group":7,
    "boilingPoint":2334,
    "category":"transition metal",
    "meltingPoint":1519
  },
  {
    "name":"Iron",
    "atomicMass":55.8452,
    "symbol":"Fe",
    "number":26,
    "period":4,
    "group":8,
    "boilingPoint":3134,
    "category":"transition metal",
    "meltingPoint":1811
  },
  {
    "name":"Cobalt",
    "atomicMass":58.9331944,
    "symbol":"Co",
    "number":27,
    "period":4,
    "group":9,
    "boilingPoint":3200,
    "category":"transition metal",
    "meltingPoint":1768
  },
  {
    "name":"Nickel",
    "atomicMass":58.69344,
    "symbol":"Ni",
    "number":28,
    "period":4,
    "group":10,
    "boilingPoint":3003,
    "category":"transition metal",
    "meltingPoint":1728
  },
  {
    "name":"Copper",
    "atomicMass":63.5463,
    "symbol":"Cu",
    "number":29,
    "period":4,
    "group":11,
    "boilingPoint":2835,
    "category":"transition metal",
    "meltingPoint":1357.77
  },
  {
    "name":"Zinc",
    "atomicMass":65.382,
    "symbol":"Zn",
    "number":30,
    "period":4,
    "group":12,
    "boilingPoint":1180,
    "category":"transition metal",
    "meltingPoint":692.68
  },
  {
    "name":"Gallium",
    "atomicMass":69.7231,
    "symbol":"Ga",
    "number":31,
    "period":4,
    "group":13,
    "boilingPoint":2673,
    "category":"post-transition metal",
    "meltingPoint":302.9146
  },
  {
    "name":"Germanium",
    "atomicMass":72.6308,
    "symbol":"Ge",
    "number":32,
    "period":4,
    "group":14,
    "boilingPoint":3106,
    "category":"metalloid",
    "meltingPoint":1211.4
  },
  {
    "name":"Arsenic",
    "atomicMass":74.9215956,
    "symbol":"As",
    "number":33,
    "period":4,
    "group":15,
    "boilingPoint":null,
    "category":"metalloid",
    "meltingPoint":null
  },
  {
    "name":"Selenium",
    "atomicMass":78.9718,
    "symbol":"Se",
    "number":34,
    "period":4,
    "group":16,
    "boilingPoint":958,
    "category":"polyatomic nonmetal",
    "meltingPoint":494
  },
  {
    "name":"Bromine",
    "atomicMass":79.904,
    "symbol":"Br",
    "number":35,
    "period":4,
    "group":17,
    "boilingPoint":332,
    "category":"diatomic nonmetal",
    "meltingPoint":265.8
  },
  {
    "name":"Krypton",
    "atomicMass":83.7982,
    "symbol":"Kr",
    "number":36,
    "period":4,
    "group":18,
    "boilingPoint":119.93,
    "category":"noble gas",
    "meltingPoint":115.78
  },
  {
    "name":"Rubidium",
    "atomicMass":85.46783,
    "symbol":"Rb",
    "number":37,
    "period":5,
    "group":1,
    "boilingPoint":961,
    "category":"alkali metal",
    "meltingPoint":312.45
  },
  {
    "name":"Strontium",
    "atomicMass":87.621,
    "symbol":"Sr",
    "number":38,
    "period":5,
    "group":2,
    "boilingPoint":1650,
    "category":"alkaline earth metal",
    "meltingPoint":1050
  },
  {
    "name":"Yttrium",
    "atomicMass":88.905842,
    "symbol":"Y",
    "number":39,
    "period":5,
    "group":3,
    "boilingPoint":3203,
    "category":"transition metal",
    "meltingPoint":1799
  },
  {
    "name":"Zirconium",
    "atomicMass":91.2242,
    "symbol":"Zr",
    "number":40,
    "period":5,
    "group":4,
    "boilingPoint":4650,
    "category":"transition metal",
    "meltingPoint":2128
  },
  {
    "name":"Niobium",
    "atomicMass":92.906372,
    "symbol":"Nb",
    "number":41,
    "period":5,
    "group":5,
    "boilingPoint":5017,
    "category":"transition metal",
    "meltingPoint":2750
  },
  {
    "name":"Molybdenum",
    "atomicMass":95.951,
    "symbol":"Mo",
    "number":42,
    "period":5,
    "group":6,
    "boilingPoint":4912,
    "category":"transition metal",
    "meltingPoint":2896
  },
  {
    "name":"Technetium",
    "atomicMass":98,
    "symbol":"Tc",
    "number":43,
    "period":5,
    "group":7,
    "boilingPoint":4538,
    "category":"transition metal",
    "meltingPoint":2430
  },
  {
    "name":"Ruthenium",
    "atomicMass":101.072,
    "symbol":"Ru",
    "number":44,
    "period":5,
    "group":8,
    "boilingPoint":4423,
    "category":"transition metal",
    "meltingPoint":2607
  },
  {
    "name":"Rhodium",
    "atomicMass":102.905502,
    "symbol":"Rh",
    "number":45,
    "period":5,
    "group":9,
    "boilingPoint":3968,
    "category":"transition metal",
    "meltingPoint":2237
  },
  {
    "name":"Palladium",
    "atomicMass":106.421,
    "symbol":"Pd",
    "number":46,
    "period":5,
    "group":10,
    "boilingPoint":3236,
    "category":"transition metal",
    "meltingPoint":1828.05
  },
  {
    "name":"Silver",
    "atomicMass":107.86822,
    "symbol":"Ag",
    "number":47,
    "period":5,
    "group":11,
    "boilingPoint":2435,
    "category":"transition metal",
    "meltingPoint":1234.93
  },
  {
    "name":"Cadmium",
    "atomicMass":112.4144,
    "symbol":"Cd",
    "number":48,
    "period":5,
    "group":12,
    "boilingPoint":1040,
    "category":"transition metal",
    "meltingPoint":594.22
  },
  {
    "name":"Indium",
    "atomicMass":114.8181,
    "symbol":"In",
    "number":49,
    "period":5,
    "group":13,
    "boilingPoint":2345,
    "category":"post-transition metal",
    "meltingPoint":429.7485
  },
  {
    "name":"Tin",
    "atomicMass":118.7107,
    "symbol":"Sn",
    "number":50,
    "period":5,
    "group":14,
    "boilingPoint":2875,
    "category":"post-transition metal",
    "meltingPoint":505.08
  },
  {
    "name":"Antimony",
    "atomicMass":121.7601,
    "symbol":"Sb",
    "number":51,
    "period":5,
    "group":15,
    "boilingPoint":1908,
    "category":"metalloid",
    "meltingPoint":903.78
  },
  {
    "name":"Tellurium",
    "atomicMass":127.603,
    "symbol":"Te",
    "number":52,
    "period":5,
    "group":16,
    "boilingPoint":1261,
    "category":"metalloid",
    "meltingPoint":722.66
  },
  {
    "name":"Iodine",
    "atomicMass":126.904473,
    "symbol":"I",
    "number":53,
    "period":5,
    "group":17,
    "boilingPoint":457.4,
    "category":"diatomic nonmetal",
    "meltingPoint":386.85
  },
  {
    "name":"Xenon",
    "atomicMass":131.2936,
    "symbol":"Xe",
    "number":54,
    "period":5,
    "group":18,
    "boilingPoint":165.051,
    "category":"noble gas",
    "meltingPoint":161.4
  },
  {
    "name":"Cesium",
    "atomicMass":132.905451966,
    "symbol":"Cs",
    "number":55,
    "period":6,
    "group":1,
    "boilingPoint":944,
    "category":"alkali metal",
    "meltingPoint":301.7
  },
  {
    "name":"Barium",
    "atomicMass":137.3277,
    "symbol":"Ba",
    "number":56,
    "period":6,
    "group":2,
    "boilingPoint":2118,
    "category":"alkaline earth metal",
    "meltingPoint":1000
  },
  {
    "name":"Lanthanum",
    "atomicMass":138.905477,
    "symbol":"La",
    "number":57,
    "period":6,
    "group":3,
    "boilingPoint":3737,
    "category":"lanthanide",
    "meltingPoint":1193
  },
  {
    "name":"Cerium",
    "atomicMass":140.1161,
    "symbol":"Ce",
    "number":58,
    "period":6,
    "group":4,
    "boilingPoint":3716,
    "category":"lanthanide",
    "meltingPoint":1068
  },
  {
    "name":"Praseodymium",
    "atomicMass":140.907662,
    "symbol":"Pr",
    "number":59,
    "period":6,
    "group":5,
    "boilingPoint":3403,
    "category":"lanthanide",
    "meltingPoint":1208
  },
  {
    "name":"Neodymium",
    "atomicMass":144.2423,
    "symbol":"Nd",
    "number":60,
    "period":6,
    "group":6,
    "boilingPoint":3347,
    "category":"lanthanide",
    "meltingPoint":1297
  },
  {
    "name":"Promethium",
    "atomicMass":145,
    "symbol":"Pm",
    "number":61,
    "period":6,
    "group":7,
    "boilingPoint":3273,
    "category":"lanthanide",
    "meltingPoint":1315
  },
  {
    "name":"Samarium",
    "atomicMass":150.362,
    "symbol":"Sm",
    "number":62,
    "period":6,
    "group":8,
    "boilingPoint":2173,
    "category":"lanthanide",
    "meltingPoint":1345
  },
  {
    "name":"Europium",
    "atomicMass":151.9641,
    "symbol":"Eu",
    "number":63,
    "period":6,
    "group":9,
    "boilingPoint":1802,
    "category":"lanthanide",
    "meltingPoint":1099
  },
  {
    "name":"Gadolinium",
    "atomicMass":157.253,
    "symbol":"Gd",
    "number":64,
    "period":6,
    "group":10,
    "boilingPoint":3273,
    "category":"lanthanide",
    "meltingPoint":1585
  },
  {
    "name":"Terbium",
    "atomicMass":158.925352,
    "symbol":"Tb",
    "number":65,
    "period":6,
    "group":11,
    "boilingPoint":3396,
    "category":"lanthanide",
    "meltingPoint":1629
  },
  {
    "name":"Dysprosium",
    "atomicMass":162.5001,
    "symbol":"Dy",
    "number":66,
    "period":6,
    "group":12,
    "boilingPoint":2840,
    "category":"lanthanide",
    "meltingPoint":1680
  },
  {
    "name":"Holmium",
    "atomicMass":164.930332,
    "symbol":"Ho",
    "number":67,
    "period":6,
    "group":13,
    "boilingPoint":2873,
    "category":"lanthanide",
    "meltingPoint":1734
  },
  {
    "name":"Erbium",
    "atomicMass":167.2593,
    "symbol":"Er",
    "number":68,
    "period":6,
    "group":14,
    "boilingPoint":3141,
    "category":"lanthanide",
    "meltingPoint":1802
  },
  {
    "name":"Thulium",
    "atomicMass":168.934222,
    "symbol":"Tm",
    "number":69,
    "period":6,
    "group":15,
    "boilingPoint":2223,
    "category":"lanthanide",
    "meltingPoint":1818
  },
  {
    "name":"Ytterbium",
    "atomicMass":173.0451,
    "symbol":"Yb",
    "number":70,
    "period":6,
    "group":16,
    "boilingPoint":1469,
    "category":"lanthanide",
    "meltingPoint":1097
  },
  {
    "name":"Lutetium",
    "atomicMass":174.96681,
    "symbol":"Lu",
    "number":71,
    "period":6,
    "group":17,
    "boilingPoint":3675,
    "category":"lanthanide",
    "meltingPoint":1925
  },
  {
    "name":"Hafnium",
    "atomicMass":178.492,
    "symbol":"Hf",
    "number":72,
    "period":6,
    "group":4,
    "boilingPoint":4876,
    "category":"transition metal",
    "meltingPoint":2506
  },
  {
    "name":"Tantalum",
    "atomicMass":180.947882,
    "symbol":"Ta",
    "number":73,
    "period":6,
    "group":5,
    "boilingPoint":5731,
    "category":"transition metal",
    "meltingPoint":3290
  },
  {
    "name":"Tungsten",
    "atomicMass":183.841,
    "symbol":"W",
    "number":74,
    "period":6,
    "group":6,
    "boilingPoint":6203,
    "category":"transition metal",
    "meltingPoint":3695
  },
  {
    "name":"Rhenium",
    "atomicMass":186.2071,
    "symbol":"Re",
    "number":75,
    "period":6,
    "group":7,
    "boilingPoint":5869,
    "category":"transition metal",
    "meltingPoint":3459
  },
  {
    "name":"Osmium",
    "atomicMass":190.233,
    "symbol":"Os",
    "number":76,
    "period":6,
    "group":8,
    "boilingPoint":5285,
    "category":"transition metal",
    "meltingPoint":3306
  },
  {
    "name":"Iridium",
    "atomicMass":192.2173,
    "symbol":"Ir",
    "number":77,
    "period":6,
    "group":9,
    "boilingPoint":4403,
    "category":"transition metal",
    "meltingPoint":2719
  },
  {
    "name":"Platinum",
    "atomicMass":195.0849,
    "symbol":"Pt",
    "number":78,
    "period":6,
    "group":10,
    "boilingPoint":4098,
    "category":"transition metal",
    "meltingPoint":2041.4
  },
  {
    "name":"Gold",
    "atomicMass":196.9665695,
    "symbol":"Au",
    "number":79,
    "period":6,
    "group":11,
    "boilingPoint":3243,
    "category":"transition metal",
    "meltingPoint":1337.33
  },
  {
    "name":"Mercury",
    "atomicMass":200.5923,
    "symbol":"Hg",
    "number":80,
    "period":6,
    "group":12,
    "boilingPoint":629.88,
    "category":"transition metal",
    "meltingPoint":234.321
  },
  {
    "name":"Thallium",
    "atomicMass":204.38,
    "symbol":"Tl",
    "number":81,
    "period":6,
    "group":13,
    "boilingPoint":1746,
    "category":"post-transition metal",
    "meltingPoint":577
  },
  {
    "name":"Lead",
    "atomicMass":207.21,
    "symbol":"Pb",
    "number":82,
    "period":6,
    "group":14,
    "boilingPoint":2022,
    "category":"post-transition metal",
    "meltingPoint":600.61
  },
  {
    "name":"Bismuth",
    "atomicMass":208.980401,
    "symbol":"Bi",
    "number":83,
    "period":6,
    "group":15,
    "boilingPoint":1837,
    "category":"post-transition metal",
    "meltingPoint":544.7
  },
  {
    "name":"Polonium",
    "atomicMass":209,
    "symbol":"Po",
    "number":84,
    "period":6,
    "group":16,
    "boilingPoint":1235,
    "category":"post-transition metal",
    "meltingPoint":527
  },
  {
    "name":"Astatine",
    "atomicMass":210,
    "symbol":"At",
    "number":85,
    "period":6,
    "group":17,
    "boilingPoint":610,
    "category":"metalloid",
    "meltingPoint":575
  },
  {
    "name":"Radon",
    "atomicMass":222,
    "symbol":"Rn",
    "number":86,
    "period":6,
    "group":18,
    "boilingPoint":211.5,
    "category":"noble gas",
    "meltingPoint":202
  },
  {
    "name":"Francium",
    "atomicMass":223,
    "symbol":"Fr",
    "number":87,
    "period":7,
    "group":1,
    "boilingPoint":950,
    "category":"alkali metal",
    "meltingPoint":300
  },
  {
    "name":"Radium",
    "atomicMass":226,
    "symbol":"Ra",
    "number":88,
    "period":7,
    "group":2,
    "boilingPoint":2010,
    "category":"alkaline earth metal",
    "meltingPoint":1233
  },
  {
    "name":"Actinium",
    "atomicMass":227,
    "symbol":"Ac",
    "number":89,
    "period":7,
    "group":3,
    "boilingPoint":3500,
    "category":"actinide",
    "meltingPoint":1500
  },
  {
    "name":"Thorium",
    "atomicMass":232.03774,
    "symbol":"Th",
    "number":90,
    "period":7,
    "group":4,
    "boilingPoint":5061,
    "category":"actinide",
    "meltingPoint":2023
  },
  {
    "name":"Protactinium",
    "atomicMass":231.035882,
    "symbol":"Pa",
    "number":91,
    "period":7,
    "group":5,
    "boilingPoint":4300,
    "category":"actinide",
    "meltingPoint":1841
  },
  {
    "name":"Uranium",
    "atomicMass":238.028913,
    "symbol":"U",
    "number":92,
    "period":7,
    "group":6,
    "boilingPoint":4404,
    "category":"actinide",
    "meltingPoint":1405.3
  },
  {
    "name":"Neptunium",
    "atomicMass":237,
    "symbol":"Np",
    "number":93,
    "period":7,
    "group":7,
    "boilingPoint":4447,
    "category":"actinide",
    "meltingPoint":912
  },
  {
    "name":"Plutonium",
    "atomicMass":244,
    "symbol":"Pu",
    "number":94,
    "period":7,
    "group":8,
    "boilingPoint":3505,
    "category":"actinide",
    "meltingPoint":912.5
  },
  {
    "name":"Americium",
    "atomicMass":243,
    "symbol":"Am",
    "number":95,
    "period":7,
    "group":9,
    "boilingPoint":2880,
    "category":"actinide",
    "meltingPoint":1449
  },
  {
    "name":"Curium",
    "atomicMass":247,
    "symbol":"Cm",
    "number":96,
    "period":7,
    "group":10,
    "boilingPoint":3383,
    "category":"actinide",
    "meltingPoint":1613
  },
  {
    "name":"Berkelium",
    "atomicMass":247,
    "symbol":"Bk",
    "number":97,
    "period":7,
    "group":11,
    "boilingPoint":2900,
    "category":"actinide",
    "meltingPoint":1259
  },
  {
    "name":"Californium",
    "atomicMass":251,
    "symbol":"Cf",
    "number":98,
    "period":7,
    "group":12,
    "boilingPoint":1743,
    "category":"actinide",
    "meltingPoint":1173
  },
  {
    "name":"Einsteinium",
    "atomicMass":252,
    "symbol":"Es",
    "number":99,
    "period":7,
    "group":13,
    "boilingPoint":1269,
    "category":"actinide",
    "meltingPoint":1133
  },
  {
    "name":"Fermium",
    "atomicMass":257,
    "symbol":"Fm",
    "number":100,
    "period":7,
    "group":14,
    "boilingPoint":null,
    "category":"actinide",
    "meltingPoint":1800
  },
  {
    "name":"Mendelevium",
    "atomicMass":258,
    "symbol":"Md",
    "number":101,
    "period":7,
    "group":15,
    "boilingPoint":null,
    "category":"actinide",
    "meltingPoint":1100
  },
  {
    "name":"Nobelium",
    "atomicMass":259,
    "symbol":"No",
    "number":102,
    "period":7,
    "group":16,
    "boilingPoint":null,
    "category":"actinide",
    "meltingPoint":1100
  },
  {
    "name":"Lawrencium",
    "atomicMass":266,
    "symbol":"Lr",
    "number":103,
    "period":7,
    "group":17,
    "boilingPoint":null,
    "category":"actinide",
    "meltingPoint":1900
  },
  {
    "name":"Rutherfordium",
    "atomicMass":267,
    "symbol":"Rf",
    "number":104,
    "period":7,
    "group":4,
    "boilingPoint":5800,
    "category":"transition metal",
    "meltingPoint":2400
  },
  {
    "name":"Dubnium",
    "atomicMass":268,
    "symbol":"Db",
    "number":105,
    "period":7,
    "group":5,
    "boilingPoint":null,
    "category":"transition metal",
    "meltingPoint":null
  },
  {
    "name":"Seaborgium",
    "atomicMass":269,
    "symbol":"Sg",
    "number":106,
    "period":7,
    "group":6,
    "boilingPoint":null,
    "category":"transition metal",
    "meltingPoint":null
  },
  {
    "name":"Bohrium",
    "atomicMass":270,
    "symbol":"Bh",
    "number":107,
    "period":7,
    "group":7,
    "boilingPoint":null,
    "category":"transition metal",
    "meltingPoint":null
  },
  {
    "name":"Hassium",
    "atomicMass":269,
    "symbol":"Hs",
    "number":108,
    "period":7,
    "group":8,
    "boilingPoint":null,
    "category":"transition metal",
    "meltingPoint":126
  },
  {
    "name":"Meitnerium",
    "atomicMass":278,
    "symbol":"Mt",
    "number":109,
    "period":7,
    "group":9,
    "boilingPoint":null,
    "category":"unknown, probably transition metal",
    "meltingPoint":null
  },
  {
    "name":"Darmstadtium",
    "atomicMass":281,
    "symbol":"Ds",
    "number":110,
    "period":7,
    "group":10,
    "boilingPoint":null,
    "category":"unknown, probably transition metal",
    "meltingPoint":null
  },
  {
    "name":"Roentgenium",
    "atomicMass":282,
    "symbol":"Rg",
    "number":111,
    "period":7,
    "group":11,
    "boilingPoint":null,
    "category":"unknown, probably transition metal",
    "meltingPoint":null
  },
  {
    "name":"Copernicium",
    "atomicMass":285,
    "symbol":"Cn",
    "number":112,
    "period":7,
    "group":12,
    "boilingPoint":3570,
    "category":"transition metal",
    "meltingPoint":null
  },
  {
    "name":"Nihonium",
    "atomicMass":286,
    "symbol":"Nh",
    "number":113,
    "period":7,
    "group":13,
    "boilingPoint":1430,
    "category":"unknown, probably transition metal",
    "meltingPoint":700
  },
  {
    "name":"Flerovium",
    "atomicMass":289,
    "symbol":"Fl",
    "number":114,
    "period":7,
    "group":14,
    "boilingPoint":420,
    "category":"post-transition metal",
    "meltingPoint":340
  },
  {
    "name":"Moscovium",
    "atomicMass":289,
    "symbol":"Mc",
    "number":115,
    "period":7,
    "group":15,
    "boilingPoint":1400,
    "category":"unknown, probably post-transition metal",
    "meltingPoint":670
  },
  {
    "name":"Livermorium",
    "atomicMass":293,
    "symbol":"Lv",
    "number":116,
    "period":7,
    "group":16,
    "boilingPoint":1085,
    "category":"unknown, probably post-transition metal",
    "meltingPoint":709
  },
  {
    "name":"Tennessine",
    "atomicMass":294,
    "symbol":"Ts",
    "number":117,
    "period":7,
    "group":17,
    "boilingPoint":883,
    "category":"unknown, probably metalloid",
    "meltingPoint":723
  },
  {
    "name":"Oganesson",
    "atomicMass":294,
    "symbol":"Og",
    "number":118,
    "period":7,
    "group":18,
    "boilingPoint":350,
    "category":"unknown, predicted to be noble gas",
    "meltingPoint":null
  },
  {
    "name":"Ununennium",
    "atomicMass":315,
    "symbol":"Uue",
    "number":119,
    "period":8,
    "group":1,
    "boilingPoint":630,
    "category":"unknown, but predicted to be an alkali metal",
    "meltingPoint":null
  }
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
      console.log(JSON.stringify(response));
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
          if (response.result.parameters.groups !== '') {
            
          } else if (response.result.parameters.number !== '') {
            const groupNumber = parseInt(response.result.parameters.number, 10);
            if (groupNumber === (function () {
              for (let i = 0; i < appData.length; i++) {
                if (appData[i].name.toUpperCase() === response.result.parameters.elements.toUpperCase()) {
                  return appData[i].group;
                }
              }
            })()) {
              displayResponse('Yes, ' + response.result.parameters.elements + ' is in group ' + response.result.parameters.number);
            } else {
              displayResponse('No, ' + response.result.parameters.elements + ' is in group ' + (function () {
                for (let i = 0; i < appData.length; i++) {
                if (appData[i].name.toUpperCase() === response.result.parameters.elements.toUpperCase()) {
                  return appData[i].group;
                }
              }
              })());
            }
          }
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
