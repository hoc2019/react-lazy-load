import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';
const outputFile = isProd ? './lib/index.js' : './dev/index.js';
const uglifyCheck = isProd ? [uglify()] : [];

export default {
    // 入口 可以是一个字符串，也可以是对象
    input: 'src/component/react-lazy-load.js',
    // 出口
    output: {
        file: outputFile,
        format: 'cjs'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        ...uglifyCheck
    ],
    external: id => /^react/.test(id)
};
