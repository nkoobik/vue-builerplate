import moment from 'moment';

export function getTimezone() {
  return moment.tz.guess();
}

export function setLocale(locale) {
  moment.locale(locale);
}
