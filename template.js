const makeString = require('makeString');

return formatPhoneNumber(data.phoneNumber, data.country);

function formatPhoneNumber(phoneNum, countryCode) {
  if (!phoneNum || phoneNum === 'undefined') return undefined;

  let phone = makeString(phoneNum);
  if (typeof phone !== 'string') return undefined;

  phone = phone.split(' ').join('');
  phone = phone.split('-').join('');
  phone = phone.split('(').join('');
  phone = phone.split(')').join('');

  // Mapping of country codes to their respective area codes
  let area_codes = {
    'eg': '20', 'za': '27', 'gr': '30', 'be': '32', 'fr': '33', 'es': '34', 'hu': '36',
    'it': '39', 'ro': '40', 'ch': '41', 'at': '43', 'dk': '45', 'se': '46', 'no': '47',
    'pl': '48', 'de': '49', 'pe': '51', 'mx': '52', 'cu': '53', 'ar': '54', 'br': '55',
    'cl': '56', 'co': '57', 'my': '60', 'au': '61', 'id': '62', 'ph': '63', 'nz': '64',
    'sg': '65', 'th': '66', 'jp': '81', 'cn': '86', 'in': '91', 'pk': '92', 'af': '93',
    'lk': '94', 'mm': '95', 'ss': '211', 'ma': '212', 'dz': '213', 'tn': '216', 'ly': '218',
    'gm': '220', 'sn': '221', 'mr': '222', 'ml': '223', 'gn': '224', 'bf': '226', 'ne': '227',
    'tg': '228', 'bj': '229', 'mu': '230', 'lr': '231', 'sl': '232', 'gh': '233', 'ng': '234',
    'td': '235', 'cf': '236', 'cm': '237', 'gq': '240', 'ga': '241', 'cg': '242', 'cd': '243',
    'ao': '244', 'gw': '245', 'sc': '248', 'sd': '249', 'rw': '250', 'et': '251', 'so': '252',
    'dj': '253', 'ke': '254', 'ug': '256', 'bi': '257', 'mz': '258', 'zm': '260', 'mg': '261',
    're': '262', 'zw': '263', 'na': '264', 'mw': '265', 'ls': '266', 'bw': '267', 'sz': '268',
    'km': '269', 'er': '291', 'aw': '297', 'fo': '298', 'gl': '299', 'gi': '350', 'pt': '351',
    'lu': '352', 'ie': '353', 'is': '354', 'al': '355', 'mt': '356', 'cy': '357', 'fi': '358',
    'bg': '359', 'lt': '370', 'lv': '371', 'ee': '372', 'am': '374', 'by': '375', 'ad': '376',
    'mc': '377', 'sm': '378', 'ua': '380', 'rs': '381', 'me': '382', 'hr': '385', 'si': '386',
    'ba': '387', 'mk': '389', 'sk': '421', 'li': '423', 'gs': '500', 'bz': '501', 'gt': '502',
    'sv': '503', 'hn': '504', 'ni': '505', 'cr': '506', 'pa': '507', 'pm': '508', 'ht': '509',
    'gp': '590', 'bl': '590', 'gy': '592', 'ec': '593', 'gf': '594', 'py': '595', 'mq': '596',
    'sr': '597', 'uy': '598', 'bn': '673', 'nr': '674', 'pg': '675', 'to': '676', 'sb': '677',
    'vu': '678', 'fj': '679', 'pw': '680', 'wf': '681', 'ck': '682', 'nu': '683', 'ws': '685',
    'ki': '686', 'nc': '687', 'tv': '688', 'pf': '689', 'tk': '690', 'mh': '692', 'hk': '852',
    'kh': '855', 'bd': '880', 'mv': '960', 'lb': '961', 'jo': '962', 'iq': '964', 'kw': '965',
    'sa': '966', 'ye': '967', 'om': '968', 'ps': '970', 'ae': '971', 'il': '972', 'bh': '973',
    'qa': '974', 'bt': '975', 'mn': '976', 'np': '977', 'tj': '992', 'tm': '993', 'az': '994',
    'ge': '995', 'kg': '996', 'uz': '998'
  };

  if (countryCode) {
    countryCode = makeString(countryCode);
  } else {
    countryCode = 'none';
  }

  let areaCode = area_codes[countryCode.toLowerCase()];

  if (!areaCode) {
    if (phone.indexOf('+') === 0) {
      return phone;
    }
    return '+' + phone;
  }


  if (phone.indexOf('+' + areaCode) === 0) {
    phone = phone.substring(areaCode.length + 1);
  } else if (phone.indexOf('00' + areaCode) === 0) {
    phone = phone.substring(areaCode.length + 2);
  }

  return '+' + areaCode + phone;
}
