import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';
import {minify} from 'uglify-js-harmony';

export default {
  entry: 'main.js',
  dest: 'bundle.js',
  moduleName: 'styledComponentsTachyons',
  format: 'cjs',
  plugins: [
    commonjs(),
    resolve({jsnext: true, main: true}),
    uglify({}, minify),
    filesize(),
  ],
};
