/**
 * Testing values.ts
 */

import {TerminalValues} from '../values'

test("Testing All Values", ()=> {
  expect(TerminalValues.INDENTATION).toBe('    ');
  expect(TerminalValues.BOLD).toBe('1');
  expect(TerminalValues.ENDING).toBe('m');
  expect(TerminalValues.ITALIC).toBe('3');
  expect(TerminalValues.UNDERLINE).toBe('4');
  expect(TerminalValues.ESCAPE).toBe('\x1b[');
  expect(TerminalValues.SEPERATOR).toBe(';')
})
