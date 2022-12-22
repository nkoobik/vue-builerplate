import validate from 'lib/utils/validate';

export default {
  install(Vue) {
    Vue.prototype.$v = validate;
  },
};
