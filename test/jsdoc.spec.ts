import * as assert from 'assert'
import { removeWhiteSpace } from './util'
import JsonToTS from '../src'
import { Options } from '../src/model'

const options:Options = {
    rootName: 'RootObject',
    outputType: 'jsdoc'
}
describe('JSDoc', function(){
    it('should work', function(){
        const actual = JsonToTS({name: 'ipcjs', count: 1, optional: null}, options).pop()
        const expected = `
/**
 * @typedef {object} RootObject
 * @property {string} name
 * @property {number} count
 * @property {any=} optional
 */
`.trim()
        assert.strictEqual(actual, expected)
    })
})