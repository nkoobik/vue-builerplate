import date from 'lib/utils/date';

export default {
  install(Vue) {
    Vue.prototype.$date = date;
  },
};
