import { getDefaultConfig, mergeConfig } from '@react-native/metro-config';

const config = {};

export default mergeConfig(await getDefaultConfig(), config);
