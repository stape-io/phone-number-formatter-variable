const makeString = require('makeString');

/*==============================================================================
==============================================================================*/

return formatPhoneNumber(data.phoneNumber, data.country);

/*==============================================================================
==============================================================================*/

function formatPhoneNumber(phoneNum, country) {
  if (!phoneNum || phoneNum === 'undefined') return undefined;

  let phone = makeString(phoneNum);
  if (typeof phone !== 'string') return undefined;

  phone = phone.split(' ').join('');
  phone = phone.split('-').join('');
  phone = phone.split('(').join('');
  phone = phone.split(')').join('');

  // prettier-ignore
  const countryCodes = {
    'ca': '1', 'us': '1', 'ag': '1', 'ai': '1', 'as': '1', 'bb': '1', 'bm': '1', 'bs': '1',
    'dm': '1', 'do': '1', 'gd': '1', 'jm': '1', 'kn': '1', 'ky': '1', 'lc': '1', 'mp': '1',
    'ms': '1', 'pr': '1', 'sx': '1', 'tc': '1', 'tt': '1', 'vc': '1', 'vg': '1', 'vi': '1',
    'kz': '7',  'ru': '7',  'eg': '20', 'za': '27', 'gr': '30', 'nl': '31', 'be': '32', 'fr': '33',
    'es': '34', 'hu': '36', 'it': '39', 'ro': '40', 'ch': '41', 'at': '43', 'gb': '44', 'dk': '45',
    'se': '46', 'no': '47', 'pl': '48', 'de': '49', 'pe': '51', 'mx': '52', 'cu': '53', 'ar': '54',
    'br': '55', 'cl': '56', 'co': '57', 've': '58', 'my': '60', 'au': '61', 'cu': '53', 'ar': '54',
    'id': '62', 'ph': '63', 'nz': '64', 'sg': '65', 'th': '66', 'jp': '81', 'kr': '82', 'vn': '84',
    'cn': '86', 'tr': '90', 'in': '91', 'pk': '92', 'af': '93', 'lk': '94', 'mm': '95', 'ir': '98',
    'ss': '211', 'ma': '212', 'dz': '213', 'tn': '216', 'ly': '218', 'gm': '220', 'sn': '221',
    'mr': '222', 'ml': '223', 'gn': '224', 'ci': '225', 'bf': '226', 'ne': '227', 'tg': '228',
    'bj': '229', 'mu': '230', 'lr': '231', 'sl': '232', 'gh': '233', 'ng': '234', 'td': '235',
    'cf': '236', 'cm': '237', 'cv': '238', 'st': '239', 'gq': '240', 'ga': '241', 'cg': '242',
    'cd': '243', 'ao': '244', 'gw': '245', 'sc': '248', 'sd': '249', 'rw': '250', 'et': '251',
    'so': '252', 'dj': '253', 'ke': '254', 'tz': '255', 'ug': '256', 'bi': '257', 'mz': '258',
    'zm': '260', 'mg': '261', 're': '262', 'yt': '262', 'zw': '263', 'na': '264', 'mw': '265',
    'ls': '266', 'bw': '267', 'sz': '268', 'km': '269', 'er': '291', 'aw': '297', 'fo': '298',
    'gl': '299', 'gi': '350', 'pt': '351', 'lu': '352', 'ie': '353', 'is': '354', 'al': '355',
    'mt': '356', 'cy': '357', 'fi': '358', 'bg': '359', 'lt': '370', 'lv': '371', 'ee': '372',
    'md': '373', 'am': '374', 'by': '375', 'ad': '376', 'mc': '377', 'sm': '378', 'va': '379',
    'ua': '380', 'rs': '381', 'me': '382', 'hr': '385', 'si': '386', 'ba': '387', 'mk': '389',
    'cz': '420', 'sk': '421', 'li': '423', 'fk': '500', 'gs': '500', 'bz': '501', 'gt': '502',
    'sv': '503', 'hn': '504', 'ni': '505', 'cr': '506', 'pa': '507', 'pm': '508', 'ht': '509',
    'bl': '590', 'gp': '590', 'mf': '590', 'bo': '591', 'gy': '592', 'ec': '593', 'gf': '594',
    'py': '595', 'mq': '596', 'sr': '597', 'uy': '598', 'tl': '670', 'bn': '673', 'nr': '674',
    'pg': '675', 'to': '676', 'sb': '677', 'vu': '678', 'fj': '679', 'pw': '680', 'wf': '681',
    'ck': '682', 'nu': '683', 'ws': '685', 'ki': '686', 'nc': '687', 'tv': '688', 'pf': '689',
    'tk': '690', 'fm': '691', 'mh': '692', 'kp': '850', 'hk': '852', 'mo': '853', 'kh': '855',
    'la': '856', 'bd': '880', 'tw': '886', 'mv': '960', 'lb': '961', 'jo': '962', 'sy': '963',
    'iq': '964', 'kw': '965', 'sa': '966', 'ye': '967', 'om': '968', 'ps': '970', 'ae': '971',
    'il': '972', 'bh': '973', 'qa': '974', 'bt': '975', 'mn': '976', 'np': '977', 'tj': '992',
    'tm': '993', 'az': '994', 'ge': '995', 'kg': '996', 'uz': '998'
  };

  // prettier-ignore
  const countrySpecificTransformationTrunkPrefixes = {
    // Countries usually starting with 0 trunk prefix
    gb: ['0'], fr: ['0'], de: ['0'], nl: ['0'], be: ['0'], ch: ['0'], at: ['0'], dk: ['0'],
    se: ['0'], fi: ['0'], no: ['0'], ie: ['0'], au: ['0'], nz: ['0'], jp: ['0'], cn: ['0'],
    in: ['0'], id: ['0'], pk: ['0'], bd: ['0'], th: ['0'], vn: ['0'], my: ['0'], sg: ['0'],
    za: ['0'], ng: ['0'], eg: ['0'], ke: ['0'], gh: ['0'], tr: ['0'], sa: ['0'], ae: ['0'],
    il: ['0'], br: ['0'], co: ['0'], af: ['0'], al: ['0'], dz: ['0'], gm: ['0'], td: ['0'],
    mr: ['0'], ml: ['0'], ne: ['0'], sn: ['0'], tg: ['0'], tn: ['0'], ug: ['0'], zm: ['0'],
    zw: ['0'], bw: ['0'], ls: ['0'], sz: ['0'], mz: ['0'], ao: ['0'], na: ['0'], bi: ['0'],
    rw: ['0'], et: ['0'], so: ['0'], dj: ['0'], sd: ['0'], cm: ['0'], cf: ['0'], gq: ['0'],
    ga: ['0'], cg: ['0'], cd: ['0'], mg: ['0'], sc: ['0'], mu: ['0'], km: ['0'], yt: ['0'],
    re: ['0'], lk: ['0'], mm: ['0'], kh: ['0'], la: ['0'], pg: ['0'], sb: ['0'], vu: ['0'],
    fj: ['0'], to: ['0'], ws: ['0'], lv: ['0'], ee: ['0'], cy: ['0'], mt: ['0'], ba: ['0'],
    me: ['0'], mk: ['0'], rs: ['0'], si: ['0'], hr: ['0'], bg: ['0'], ro: ['0'], gr: ['0'],
    pl: ['0'], sk: ['0'], cz: ['0'], lu: ['0'], ua: ['0'], by: ['0'],

    hu: ['06'],

    // See: https://www.sent.dm/resources/lt#the-transition-from-8-to-0-what-you-need-to-know
    lt: ['0', '8']
  };

  country = country ? makeString(country).toLowerCase() : 'none';

  const countryCode = countryCodes[country];

  // Return phone if no area code found for the supplied country code.
  if (!countryCode) return phone[0] === '+' ? phone : '+' + phone;

  // If phone starts with +<countryCode>, return phone.
  if (phone.indexOf('+' + countryCode) === 0) return phone;

  // If phone start with 00<countryCode>, return phone.
  if (phone.indexOf('00' + countryCode) === 0) return '+' + phone.substring(2);

  const transformationTrunkPrefixes = countrySpecificTransformationTrunkPrefixes[country];
  if (transformationTrunkPrefixes) phone = removeLeading(transformationTrunkPrefixes, phone);

  return '+' + countryCode + phone;
}

/*==============================================================================
  Helpers
==============================================================================*/

function removeLeading(prefixList, phone) {
  for (let i = 0; i < prefixList.length; i++) {
    if (phone.indexOf(prefixList[i]) === 0) return phone.substring(prefixList[i].length);
  }
  return phone;
}
