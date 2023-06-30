/*
 * @Date: 2023-06-17 16:56:28
 * @Author: liufan
 * @Description:
 */
// require('@rushstack/eslint-patch/modern-module-resolution')

// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  // env: {
  //   'vue/setup-compiler-macros': true
  // },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
