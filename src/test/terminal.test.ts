/**
 * Testing Terminal Here
 */
import { Terminal } from '../index';
import {Tag} from '../tag';

test('Testing Constructor', () => {
  let term : Terminal = new Terminal(true, true, 1, true, '#ffffff');
  expect(term.toString()).toBe("\x1b[1;3;4;38;2;255;255;255m    ");
});

test("Testing Inheritance ", () => {
  let term: Terminal = new Terminal();
  term.bold();
  term.underline();

  expect(term.toString()).toBe('\x1b[1;4;38;2;0;0;0m')
});

test("Testing Log", () => {
  let term : Terminal = new Terminal()
  expect(term.log("Log this")).toBe(term);
});


test("Testing Exception", () => {
  let term: Terminal =  new Terminal();
  expect(() => term.log("Dargvy", 'notag')).toThrow(Error);
});

test("Testing Log Object", () => {
  let term : Terminal = new Terminal();
  let stat: Tag = term.tag('killer');

  expect(term.log(" Kill it", 'killer')).toBe(stat);
});
