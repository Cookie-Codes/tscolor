/**
 * Testing Exceptions
 */
import { TagError, ColorOutboundValue } from '../exceptions'

test("Testing Color", ()=> {
  expect(() => {
    throw new ColorOutboundValue();
  }).toThrow(Error);
});

test("Testing TagError", ()=> {
  expect(()=> {
    throw new TagError()
  }).toThrow(Error);
})
