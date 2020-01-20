import { Color } from "../values";

test('basic', () => {
    expect((3 + 4)).toBe(7)
})

test("Color Test", () =>
{
  let color : Color = new Color(2,3,4);
  expect(color.toString()).toBe(';2;3;4')
})
