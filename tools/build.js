// More info on webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file
/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified prod version...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.erd));
  }

  if (jsonStats.hasWarnings) {
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log('Webpack stats: ' + stats);

  console.log('Compiled!'.green);

  return 0;
}) ;
