// .eslintrc.js
module.exports = {
  env: {
    node: true, // เพิ่มตรงนี้
    es2021: true, // เพิ่มถ้าต้องการใช้ ES2021 features
  },
  parser: '@typescript-eslint/parser', // ถ้าใช้ TypeScript
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // ถ้าใช้ TS
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // เพิ่ม rule ได้ตามต้องการ
  },
};
