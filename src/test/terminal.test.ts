/**
 * Testing Terminal Here
 */
import { Terminal } from '../index';

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

});

test("Testing Tag Generator", ()=> {

});

test("Else Part of Log", ()=>
{

});
