const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
// const config = {
//     resolver: {
//         alias: {
//             '@src': './src',
//         },
//     },
// };

module.exports = async () => {
    const defaultConfig = await getDefaultConfig(__dirname);
    return mergeConfig(defaultConfig, {
      resolver: {
        alias: {
          '@src': './src',
          // Add more aliases if needed
        },
      },
    });
  };
