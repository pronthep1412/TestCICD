/* eslint-disable @typescript-eslint/no-require-imports */
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
/* eslint-enable @typescript-eslint/no-require-imports */

const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
