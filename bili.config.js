// import { Config } from 'bili'

// const config: Config = {
//     input: 'src/index.js',
//     output: {
//       format: ['cjs', 'esm']
//     },
//     plugins: {
//         vue: {
//         css: true
//         }
//     }
//   };
  
//   export default config;

module.exports = {
    banner: true,
    output: {
      extractCSS: false,
    },
    plugins: {
      vue: {
        css: true
      }
    }
};