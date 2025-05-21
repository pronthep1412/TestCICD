// .eslintrc.js
module.exports = {
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
