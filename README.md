# vue-builerplate
Simple boilerplate for Vue projects.

## Features:
* webpack-dev-server
* Api core `src/lib/system/api`
* Example structure
* Simple plugins
  * **date plugin** to work with dates, based on `lib/utils/date`
  * **validate plugin** to handle type errors, based on `lib/utils/validate`
  * **translate plugin** to display all the phrases and create a system of translation, based on `lib/utils/translate`
    * Use translate func and $t plugin to output all phrases.
    * For creating a translation system, simply fill out the `translate` function with the necessary functionality.
* Utils (fill this files with necessary functions)
  * `array`
  * `cookie`
  * `date`
  * `localStorage`
  * `object`
  * `translate`
  * `validate`

## How to use page examples
Check directory `src/containers/app/example`.
You can copy the contents of this folder to create new pages quickly.
* `components/` 
  * directory of local components;
* `const/`
  * directory of necessary local constants. Try not to use literals;
* `helpers/`
  * directory of local functions, contains helper functions not assigned to the context of the component. Use to store functions containing business logic;
* `App.vue`
  * main page file. Each directory can contain only one App.vue file;
* `data.js`
  * file contains functions for working with the api

## Libraries:
* [Semantic UI](https://semantic-ui-vue.github.io/)
* [Axios](https://axios-http.com/)
* [moment, moment-timezone](https://momentjs.com/)

## Additional libraries:
* [vue-router](https://router.vuejs.org/)
* [less](https://lesscss.org/)
* [babel](https://babeljs.io/)
* [eslint](https://eslint.org/)
