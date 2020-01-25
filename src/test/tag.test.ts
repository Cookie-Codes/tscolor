/**
 * Testing Tags Here
 */

 import { Tag } from '../tag';

test("Testing Tag Blank", ()=>
{
  let tag: Tag = new Tag();
  expect(tag.toString()).toBe("\x1b[38;2;0;0;0m");
})

test("Testing With all Flags", ()=>
{
  let tag: Tag = new Tag();
  tag.bold();
  tag.italic();
  tag.indentation(1);
  tag.underline();
  tag.withhex("#ffffff");

  expect(tag.toString()).toBe("\x1b[1;3;4;38;2;255;255;255m    ")
});


test("Testing withRgb ", ()=>
{
  let ctag :Tag = new Tag();
  ctag.withrgb(3,4,54);
  expect(ctag.toString()).toBe('\x1b[38;2;3;4;54m');

});


test("Testing with Constructor",()=>
{
  let ctag: Tag = new Tag(true,true, 1, true, "#ffffff");
  expect(ctag.toString()).toBe("\x1b[1;3;4;38;2;255;255;255m    ")
});
