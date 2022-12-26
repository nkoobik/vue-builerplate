// eslint-disable-next-line
const REGEXP_COOKIE_NAME = /([\.$?*|{}\(\)\[\]\\\/\+^])/g;

export function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(REGEXP_COOKIE_NAME, '\\$1') + '=([^;]*)'
  ));

  return matches ? decodeURIComponent(matches[1]) : null;
}

export function setCookie(name, value, options = { path: '/' }) {
  let expires = options.expires;

  if (typeof expires === 'number' && expires) {
    let date = new Date();
    let time = date.getTime() + expires;

    date.setTime(time * 1000);
    expires = options.expires = date;
  }

  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  let updatedCookie = name + '=' + value;

  for (let propName in options) {
    let propValue = options[propName];

    updatedCookie += '; ' + propName;
    if (propValue) {
      updatedCookie += '=' + propValue;
    }
  }

  document.cookie = updatedCookie;
}
