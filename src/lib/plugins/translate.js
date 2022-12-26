import { translate } from 'lib/utils/translate';

export default {
  install(Vue) {
    Vue.prototype.$t = translate;
  },
};
