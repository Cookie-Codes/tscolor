import { Color } from "../color";
import { ColorOutboundValue } from '../exceptions'


test("Color Test", () =>
{
  let color : Color = new Color(2,3,4);
  let newcolor: Color = new Color(3,4,5);
  expect(color.toString()).toBe('38;2;2;3;4');
  expect(newcolor.toString()).toBe('38;2;3;4;5');
})

test("Color Setter Getter Test", ()=>
{
  let color : Color = new Color(2,3,4);

  expect(color.toString()).toBe('38;2;2;3;4');

  color.b = 44;

  expect(color.toString()).toBe('38;2;2;3;44');

  color.r = 5;
  color.g = 3;

  expect(color.toString()).toBe('38;2;5;3;44')
})


test("Taking Exceptions", ()=>
{
  let color : Color = new Color(3,4,5);
  expect(() => {color.r = 444}).toThrow(Error);
})
