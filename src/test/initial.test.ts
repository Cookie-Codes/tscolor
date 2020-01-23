import { Color } from "../color";

test('basic', () => {
    expect((3 + 4)).toBe(7)
})

test("Color Test", () =>
{
  let color : Color = new Color(2,3,4);
  let newcolor: Color = new Color(3,4,5);
  expect(color.toString()).toBe('38;2;2;3;4');
  expect(newcolor.toString()).toBe('38;2;3;4;5');
})
