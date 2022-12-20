async function getExchangeRate(baseCurrency, selectedOption, amount) {
  const response = await fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}&symbols=${selectedOption}&places=2&amount=${amount}`);
  const data = await response.json();
  return data.rates[selectedOption];
}

const amountInput = document.getElementById('amount-input');
const convertButton = document.getElementById('convert-button');

convertButton.addEventListener('click', async () => {
  const amount = amountInput.value;
  var convertedAmount = await getExchangeRate(baseCurrency, selectedOption, amount);
  // Display the converted amount to the user
  var paragraph = document.getElementById("p");
  output = 'Converted amount: <span id="converted-amount"></span>';
  if(currency_symbols[selectedOption]!==undefined) {
        output += currency_symbols[selectedOption];
  }
  output += convertedAmount;
  output += '<br><a href="https://www.flaticon.com/free-icons/currency" title="currency icons">Extenstion icons created by Freepik - Flaticon</a>'
  paragraph.innerHTML = output;
});
var currency_symbols = {
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: 'Arg$',
  AUD: 'A$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'KM',
  BBD: 'Bds$',
  BDT: '৳',
  BGN: 'лв',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: 'BD$',
  BND: 'BN$',
  BOB: 'Bs. ',
  BOV: 'BOV',
  BRL: 'R$',
  BSD: 'BS$',
  BTC: '₿',
  BTN: 'Nu.',
  BWP: 'P',
  BYN: 'Br',
  BYR: 'Br',
  BZD: 'BZ$',
  CAD: 'Can$',
  CDF: 'FC',
  CHE: 'CHE',
  CHF: 'CHF',
  CHW: 'CHW',
  CLF: 'CLF',
  CLP: 'CLP$',
  CNH: '¥',
  CNY: '¥',
  COP: 'Col$',
  COU: 'COU',
  CRC: '₡',
  CUC: 'CUC$',
  CUP: '₱',
  CVE: 'Esc ',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EEK: 'kr',
  EGP: '£',
  ERN: 'Nfk',
  ETB: 'Br',
  ETH: 'Ξ',
  EUR: '€',
  FJD: 'FJ$',
  FKP: '£',
  GBP: '£',
  GEL: '₾',
  GGP: '£',
  GHC: '₵',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: 'GY$',
  HKD: 'HK$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  IMP: '£',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JEP: '£',
  JMD: 'J$',
  JOD: 'JD',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'лв',
  KHR: '៛',
  KMF: 'CF',
  KPW: '₩',
  KRW: '₩',
  KWD: 'KD',
  KYD: 'CI$',
  KZT: '₸',
  LAK: '₭',
  LBP: '£',
  LKR: '₨',
  LRD: 'LD$',
  LSL: 'M',
  LTC: 'Ł',
  LTL: 'Lt',
  LVL: 'Ls',
  LYD: 'LD',
  MAD: 'MAD',
  MDL: 'lei',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'K',
  MNT: '₮',
  MOP: 'MOP$',
  MRO: 'UM',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: 'Mex$',
  MXV: 'MXV',
  MYR: 'RM',
  MZN: 'MT',
  NAD: 'N$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: 'NZ$',
  OMR: '﷼',
  PAB: 'B/.',
  PEN: 'S/.',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: 'Gs',
  QAR: '﷼',
  RMB: '￥',
  RON: 'lei',
  RSD: 'Дин.',
  RUB: '₽',
  RWF: 'R₣',
  SAR: '﷼',
  SBD: 'Si$',
  SCR: '₨',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: 'S$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'S',
  SRD: 'Sr$',
  SSP: '£',
  STD: 'Db',
  STN: 'Db',
  SVC: '₡',
  SYP: '£',
  SZL: 'E',
  THB: '฿',
  TJS: 'SM',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRL: '₤',
  TRY: '₺',
  TTD: 'TT$',
  TVD: 'TV$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  USD: 'US$',
  UYI: 'UYI',
  UYU: '$U ',
  UYW: 'UYW',
  UZS: 'лв',
  VEF: 'Bs',
  VES: 'Bs.S',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XBT: 'Ƀ',
  XCD: 'EC$',
  XOF: 'CFA',
  XPF: '₣',
  XSU: 'Sucre',
  XUA: 'XUA',
  YER: '﷼',
  ZAR: 'R',
  ZMW: 'ZK',
  ZWD: 'Z$',
  ZWL: 'Z$'
}
const currencyCodes = {
   "AED": {
     "description": "United Arab Emirates Dirham",
     "code": "AED"
   },
   "AFN": {
     "description": "Afghan Afghani",
     "code": "AFN"
   },
   "ALL": {
     "description": "Albanian Lek",
     "code": "ALL"
   },
   "AMD": {
     "description": "Armenian Dram",
     "code": "AMD"
   },
   "ANG": {
     "description": "Netherlands Antillean Guilder",
     "code": "ANG"
   },
   "AOA": {
     "description": "Angolan Kwanza",
     "code": "AOA"
   },
   "ARS": {
     "description": "Argentine Peso",
     "code": "ARS"
   },
   "AUD": {
     "description": "Australian Dollar",
     "code": "AUD"
   },
   "AWG": {
     "description": "Aruban Florin",
     "code": "AWG"
   },
   "AZN": {
     "description": "Azerbaijani Manat",
     "code": "AZN"
   },
   "BAM": {
     "description": "Bosnia-Herzegovina Convertible Mark",
     "code": "BAM"
   },
   "BBD": {
     "description": "Barbadian Dollar",
     "code": "BBD"
   },
   "BDT": {
     "description": "Bangladeshi Taka",
     "code": "BDT"
   },
   "BGN": {
     "description": "Bulgarian Lev",
     "code": "BGN"
   },
   "BHD": {
     "description": "Bahraini Dinar",
     "code": "BHD"
   },
   "BIF": {
     "description": "Burundian Franc",
     "code": "BIF"
   },
   "BMD": {
     "description": "Bermudan Dollar",
     "code": "BMD"
   },
   "BND": {
     "description": "Brunei Dollar",
     "code": "BND"
   },
   "BOB": {
     "description": "Bolivian Boliviano",
     "code": "BOB"
   },
   "BRL": {
     "description": "Brazilian Real",
     "code": "BRL"
   },
   "BSD": {
     "description": "Bahamian Dollar",
     "code": "BSD"
   },
   "BTC": {
     "description": "Bitcoin",
     "code": "BTC"
   },
   "BTN": {
     "description": "Bhutanese Ngultrum",
     "code": "BTN"
   },
   "BWP": {
     "description": "Botswanan Pula",
     "code": "BWP"
   },
   "BYN": {
     "description": "Belarusian Ruble",
     "code": "BYN"
   },
   "BZD": {
     "description": "Belize Dollar",
     "code": "BZD"
   },
   "CAD": {
     "description": "Canadian Dollar",
     "code": "CAD"
   },
   "CDF": {
     "description": "Congolese Franc",
     "code": "CDF"
   },
   "CHF": {
     "description": "Swiss Franc",
     "code": "CHF"
   },
   "CLF": {
     "description": "Chilean Unit of Account (UF)",
     "code": "CLF"
   },
   "CLP": {
     "description": "Chilean Peso",
     "code": "CLP"
   },
   "CNH": {
     "description": "Chinese Yuan (Offshore)",
     "code": "CNH"
   },
   "CNY": {
     "description": "Chinese Yuan",
     "code": "CNY"
   },
   "COP": {
     "description": "Colombian Peso",
     "code": "COP"
   },
   "CRC": {
     "description": "Costa Rican Colón",
     "code": "CRC"
   },
   "CUC": {
     "description": "Cuban Convertible Peso",
     "code": "CUC"
   },
   "CUP": {
     "description": "Cuban Peso",
     "code": "CUP"
   },
   "CVE": {
     "description": "Cape Verdean Escudo",
     "code": "CVE"
   },
   "CZK": {
     "description": "Czech Republic Koruna",
     "code": "CZK"
   },
   "DJF": {
     "description": "Djiboutian Franc",
     "code": "DJF"
   },
   "DKK": {
     "description": "Danish Krone",
     "code": "DKK"
   },
   "DOP": {
     "description": "Dominican Peso",
     "code": "DOP"
   },
   "DZD": {
     "description": "Algerian Dinar",
     "code": "DZD"
   },
   "EGP": {
     "description": "Egyptian Pound",
     "code": "EGP"
   },
   "ERN": {
     "description": "Eritrean Nakfa",
     "code": "ERN"
   },
   "ETB": {
     "description": "Ethiopian Birr",
     "code": "ETB"
   },
   "EUR": {
     "description": "Euro",
     "code": "EUR"
   },
   "FJD": {
     "description": "Fijian Dollar",
     "code": "FJD"
   },
   "FKP": {
     "description": "Falkland Islands Pound",
     "code": "FKP"
   },
   "GBP": {
     "description": "British Pound Sterling",
     "code": "GBP"
   },
   "GEL": {
     "description": "Georgian Lari",
     "code": "GEL"
   },
   "GGP": {
     "description": "Guernsey Pound",
     "code": "GGP"
   },
   "GHS": {
     "description": "Ghanaian Cedi",
     "code": "GHS"
   },
   "GIP": {
     "description": "Gibraltar Pound",
     "code": "GIP"
   },
   "GMD": {
     "description": "Gambian Dalasi",
     "code": "GMD"
   },
   "GNF": {
     "description": "Guinean Franc",
     "code": "GNF"
   },
   "GTQ": {
     "description": "Guatemalan Quetzal",
     "code": "GTQ"
   },
   "GYD": {
     "description": "Guyanaese Dollar",
     "code": "GYD"
   },
   "HKD": {
     "description": "Hong Kong Dollar",
     "code": "HKD"
   },
   "HNL": {
     "description": "Honduran Lempira",
     "code": "HNL"
   },
   "HRK": {
     "description": "Croatian Kuna",
     "code": "HRK"
   },
   "HTG": {
     "description": "Haitian Gourde",
     "code": "HTG"
   },
   "HUF": {
     "description": "Hungarian Forint",
     "code": "HUF"
   },
   "IDR": {
     "description": "Indonesian Rupiah",
     "code": "IDR"
   },
   "ILS": {
     "description": "Israeli New Sheqel",
     "code": "ILS"
   },
   "IMP": {
     "description": "Manx pound",
     "code": "IMP"
   },
   "INR": {
     "description": "Indian Rupee",
     "code": "INR"
   },
   "IQD": {
     "description": "Iraqi Dinar",
     "code": "IQD"
   },
   "IRR": {
     "description": "Iranian Rial",
     "code": "IRR"
   },
   "ISK": {
     "description": "Icelandic Króna",
     "code": "ISK"
   },
   "JEP": {
     "description": "Jersey Pound",
     "code": "JEP"
   },
   "JMD": {
     "description": "Jamaican Dollar",
     "code": "JMD"
   },
   "JOD": {
     "description": "Jordanian Dinar",
     "code": "JOD"
   },
   "JPY": {
     "description": "Japanese Yen",
     "code": "JPY"
   },
   "KES": {
     "description": "Kenyan Shilling",
     "code": "KES"
   },
   "KGS": {
     "description": "Kyrgystani Som",
     "code": "KGS"
   },
   "KHR": {
     "description": "Cambodian Riel",
     "code": "KHR"
   },
   "KMF": {
     "description": "Comorian Franc",
     "code": "KMF"
   },
   "KPW": {
     "description": "North Korean Won",
     "code": "KPW"
   },
   "KRW": {
     "description": "South Korean Won",
     "code": "KRW"
   },
   "KWD": {
     "description": "Kuwaiti Dinar",
     "code": "KWD"
   },
   "KYD": {
     "description": "Cayman Islands Dollar",
     "code": "KYD"
   },
   "KZT": {
     "description": "Kazakhstani Tenge",
     "code": "KZT"
   },
   "LAK": {
     "description": "Laotian Kip",
     "code": "LAK"
   },
   "LBP": {
     "description": "Lebanese Pound",
     "code": "LBP"
   },
   "LKR": {
     "description": "Sri Lankan Rupee",
     "code": "LKR"
   },
   "LRD": {
     "description": "Liberian Dollar",
     "code": "LRD"
   },
   "LSL": {
     "description": "Lesotho Loti",
     "code": "LSL"
   },
   "LYD": {
     "description": "Libyan Dinar",
     "code": "LYD"
   },
   "MAD": {
     "description": "Moroccan Dirham",
     "code": "MAD"
   },
   "MDL": {
     "description": "Moldovan Leu",
     "code": "MDL"
   },
   "MGA": {
     "description": "Malagasy Ariary",
     "code": "MGA"
   },
   "MKD": {
     "description": "Macedonian Denar",
     "code": "MKD"
   },
   "MMK": {
     "description": "Myanma Kyat",
     "code": "MMK"
   },
   "MNT": {
     "description": "Mongolian Tugrik",
     "code": "MNT"
   },
   "MOP": {
     "description": "Macanese Pataca",
     "code": "MOP"
   },
   "MRO": {
     "description": "Mauritanian Ouguiya (pre-2018)",
     "code": "MRO"
   },
   "MRU": {
     "description": "Mauritanian Ouguiya",
     "code": "MRU"
   },
   "MUR": {
     "description": "Mauritian Rupee",
     "code": "MUR"
   },
   "MVR": {
     "description": "Maldivian Rufiyaa",
     "code": "MVR"
   },
   "MWK": {
     "description": "Malawian Kwacha",
     "code": "MWK"
   },
   "MXN": {
     "description": "Mexican Peso",
     "code": "MXN"
   },
   "MYR": {
     "description": "Malaysian Ringgit",
     "code": "MYR"
   },
   "MZN": {
     "description": "Mozambican Metical",
     "code": "MZN"
   },
   "NAD": {
     "description": "Namibian Dollar",
     "code": "NAD"
   },
   "NGN": {
     "description": "Nigerian Naira",
     "code": "NGN"
   },
   "NIO": {
     "description": "Nicaraguan Córdoba",
     "code": "NIO"
   },
   "NOK": {
     "description": "Norwegian Krone",
     "code": "NOK"
   },
   "NPR": {
     "description": "Nepalese Rupee",
     "code": "NPR"
   },
   "NZD": {
     "description": "New Zealand Dollar",
     "code": "NZD"
   },
   "OMR": {
     "description": "Omani Rial",
     "code": "OMR"
   },
   "PAB": {
     "description": "Panamanian Balboa",
     "code": "PAB"
   },
   "PEN": {
     "description": "Peruvian Nuevo Sol",
     "code": "PEN"
   },
   "PGK": {
     "description": "Papua New Guinean Kina",
     "code": "PGK"
   },
   "PHP": {
     "description": "Philippine Peso",
     "code": "PHP"
   },
   "PKR": {
     "description": "Pakistani Rupee",
     "code": "PKR"
   },
   "PLN": {
     "description": "Polish Zloty",
     "code": "PLN"
   },
   "PYG": {
     "description": "Paraguayan Guarani",
     "code": "PYG"
   },
   "QAR": {
     "description": "Qatari Rial",
     "code": "QAR"
   },
   "RON": {
     "description": "Romanian Leu",
     "code": "RON"
   },
   "RSD": {
     "description": "Serbian Dinar",
     "code": "RSD"
   },
   "RUB": {
     "description": "Russian Ruble",
     "code": "RUB"
   },
   "RWF": {
     "description": "Rwandan Franc",
     "code": "RWF"
   },
   "SAR": {
     "description": "Saudi Riyal",
     "code": "SAR"
   },
   "SBD": {
     "description": "Solomon Islands Dollar",
     "code": "SBD"
   },
   "SCR": {
     "description": "Seychellois Rupee",
     "code": "SCR"
   },
   "SDG": {
     "description": "Sudanese Pound",
     "code": "SDG"
   },
   "SEK": {
     "description": "Swedish Krona",
     "code": "SEK"
   },
   "SGD": {
     "description": "Singapore Dollar",
     "code": "SGD"
   },
   "SHP": {
     "description": "Saint Helena Pound",
     "code": "SHP"
   },
   "SLL": {
     "description": "Sierra Leonean Leone",
     "code": "SLL"
   },
   "SOS": {
     "description": "Somali Shilling",
     "code": "SOS"
   },
   "SRD": {
     "description": "Surinamese Dollar",
     "code": "SRD"
   },
   "SSP": {
     "description": "South Sudanese Pound",
     "code": "SSP"
   },
   "STD": {
     "description": "São Tomé and Príncipe Dobra (pre-2018)",
     "code": "STD"
   },
   "STN": {
     "description": "São Tomé and Príncipe Dobra",
     "code": "STN"
   },
   "SVC": {
     "description": "Salvadoran Colón",
     "code": "SVC"
   },
   "SYP": {
     "description": "Syrian Pound",
     "code": "SYP"
   },
   "SZL": {
     "description": "Swazi Lilangeni",
     "code": "SZL"
   },
   "THB": {
     "description": "Thai Baht",
     "code": "THB"
   },
   "TJS": {
     "description": "Tajikistani Somoni",
     "code": "TJS"
   },
   "TMT": {
     "description": "Turkmenistani Manat",
     "code": "TMT"
   },
   "TND": {
     "description": "Tunisian Dinar",
     "code": "TND"
   },
   "TOP": {
     "description": "Tongan Pa'anga",
     "code": "TOP"
   },
   "TRY": {
     "description": "Turkish Lira",
     "code": "TRY"
   },
   "TTD": {
     "description": "Trinidad and Tobago Dollar",
     "code": "TTD"
   },
   "TWD": {
     "description": "New Taiwan Dollar",
     "code": "TWD"
   },
   "TZS": {
     "description": "Tanzanian Shilling",
     "code": "TZS"
   },
   "UAH": {
     "description": "Ukrainian Hryvnia",
     "code": "UAH"
   },
   "UGX": {
     "description": "Ugandan Shilling",
     "code": "UGX"
   },
   "USD": {
     "description": "United States Dollar",
     "code": "USD"
   },
   "UYU": {
     "description": "Uruguayan Peso",
     "code": "UYU"
   },
   "UZS": {
     "description": "Uzbekistan Som",
     "code": "UZS"
   },
   "VEF": {
     "description": "Venezuelan Bolívar Fuerte (Old)",
     "code": "VEF"
   },
   "VES": {
     "description": "Venezuelan Bolívar Soberano",
     "code": "VES"
   },
   "VND": {
     "description": "Vietnamese Dong",
     "code": "VND"
   },
   "VUV": {
     "description": "Vanuatu Vatu",
     "code": "VUV"
   },
   "WST": {
     "description": "Samoan Tala",
     "code": "WST"
   },
   "XAF": {
     "description": "CFA Franc BEAC",
     "code": "XAF"
   },
   "XAG": {
     "description": "Silver Ounce",
     "code": "XAG"
   },
   "XAU": {
     "description": "Gold Ounce",
     "code": "XAU"
   },
   "XCD": {
     "description": "East Caribbean Dollar",
     "code": "XCD"
   },
   "XDR": {
     "description": "Special Drawing Rights",
     "code": "XDR"
   },
   "XOF": {
     "description": "CFA Franc BCEAO",
     "code": "XOF"
   },
   "XPD": {
     "description": "Palladium Ounce",
     "code": "XPD"
   },
   "XPF": {
     "description": "CFP Franc",
     "code": "XPF"
   },
   "XPT": {
     "description": "Platinum Ounce",
     "code": "XPT"
   },
   "YER": {
     "description": "Yemeni Rial",
     "code": "YER"
   },
   "ZAR": {
     "description": "South African Rand",
     "code": "ZAR"
   },
   "ZMW": {
     "description": "Zambian Kwacha",
     "code": "ZMW"
   },
   "ZWL": {
     "description": "Zimbabwean Dollar",
     "code": "ZWL"
   },
};

const from = document.getElementById("currency-select");
const to = document.getElementById("to");

for (const [code, currency] of Object.entries(currencyCodes)) {
  const option = document.createElement("option");
  option.value = code;
  option.text = `${currency.description} (${currency.code})`;
  from.add(option);
}
for (const [code, currency] of Object.entries(currencyCodes)) {
  const option = document.createElement("option");
  option.value = code;
  option.text = `${currency.description} (${currency.code})`;
  to.add(option);
}

from.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  baseCurrency = selectedOption
});
to.addEventListener("change", (event) => {
  selectedOption = event.target.value;
});
