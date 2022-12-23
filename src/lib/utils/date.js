import moment from 'moment';

function setLocale(locale) {
  moment.locale(locale);
}

function getTimezone() {
  return moment.tz.guess();
}

function getTimezoneOffset() {
  return moment().utcOffset();
}

function getMomentDate(date) {
  return moment(date);
}

function getNativeObject(date) {
  return getMomentDate(date).toDate();
}

function getDateAsISOString(date) {
  return getMomentDate(date).format();
}

function formatDate(date, format) {
  return getMomentDate(date).format(format);
}

function getDaysInMonth(date) {
  return getMomentDate(date).daysInMonth();
}

function getDateStartTime(date) {
  return getMomentDate(date).startOf('day');
}

function getDateEndTime(date) {
  return getMomentDate(date).endOf('day');
}

function getMonthStartDate(date) {
  return getMomentDate(date).startOf('month');
}

function getMonthEndDate(date) {
  return getMomentDate(date).endOf('month');
}

function isDateAfter(firstDate, secondDate) {
  return getMomentDate(firstDate).isAfter(getMomentDate(secondDate));
}

function isDateBefore(firstDate, secondDate) {
  return getMomentDate(firstDate).isBefore(getMomentDate(secondDate));
}

function isDateSame(firstDate, secondDate) {
  return getMomentDate(firstDate).isSame(getMomentDate(secondDate));
}

function isSameDay(firstDate, secondDate) {
  return getMomentDate(firstDate).isSame(getMomentDate(secondDate), 'day');
}

function isSameMonth(firstDate, secondDate) {
  return getMomentDate(firstDate).isSame(getMomentDate(secondDate), 'month');
}

function isSameYear(firstDate, secondDate) {
  return getMomentDate(firstDate).isSame(getMomentDate(secondDate), 'year');
}

function getDatesDiffInSeconds(startDate, endDate) {
  return getMomentDate(startDate).diff(getMomentDate(endDate), 'seconds');
}

function getDatesDiffInMinutes(startDate, endDate) {
  return getMomentDate(startDate).diff(getMomentDate(endDate), 'minutes');
}

function getDatesDiffInDays(startDate, endDate) {
  return getMomentDate(startDate).diff(getMomentDate(endDate), 'days');
}

function getDatesDiffInYears(startDate, endDate) {
  return getMomentDate(startDate).diff(getMomentDate(endDate), 'years');
}

function getDiffFromNow(date) {
  return moment(date).fromNow(true);
}

function subtractSecondsFromDate(date, seconds) {
  return getMomentDate(date).subtract(seconds, 'seconds');
}

function subtractMinutesFromDate(date, minutes) {
  return getMomentDate(date).subtract(minutes, 'minutes');
}

function subtractDaysFromDate(date, days) {
  return getMomentDate(date).subtract(days, 'days');
}

function subtractMonthsFromDate(date, months) {
  return getMomentDate(date).subtract(months, 'months');
}

function addSecondsToDate(date, seconds) {
  return getMomentDate(date).add(seconds, 'seconds');
}

function addMinutesToDate(date, minutes) {
  return getMomentDate(date).add(minutes, 'minutes');
}

function addDaysToDate(date, days) {
  return getMomentDate(date).add(days, 'days');
}

function addMonthsToDate(date, months) {
  return getMomentDate(date).add(months, 'month');
}

function getCurrentMonth() {
  return getMomentDate().month();
}

function getCurrentYear() {
  return getMomentDate().year();
}

export default {
  setLocale,
  getTimezone,
  getTimezoneOffset,
  getMomentDate,
  getNativeObject,
  getDateAsISOString,
  formatDate,
  getDaysInMonth,
  getDateStartTime,
  getDateEndTime,
  getMonthStartDate,
  getMonthEndDate,
  isDateAfter,
  isDateBefore,
  isDateSame,
  isSameDay,
  isSameMonth,
  isSameYear,
  getDatesDiffInSeconds,
  getDatesDiffInMinutes,
  getDatesDiffInDays,
  getDatesDiffInYears,
  getDiffFromNow,
  subtractSecondsFromDate,
  subtractMinutesFromDate,
  subtractDaysFromDate,
  subtractMonthsFromDate,
  addSecondsToDate,
  addMinutesToDate,
  addDaysToDate,
  addMonthsToDate,
  getCurrentMonth,
  getCurrentYear,
};
