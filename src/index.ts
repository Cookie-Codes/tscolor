import { Tag } from './tag';

interface TagsList {
  [index: number]: Tag;
  [index: string]: Tag;
}

/**
 * Standard Handler My way of Default
 * TODO: tags
 * TODO: color
 * TODO: styles
 */
export class Terminal extends Tag {

  // Default Const

  private tags: TagsList = {};


  constructor(
    bold: boolean = false,
    underline: boolean = false,
    indentation: number = 0,
    italic: boolean = false,
    color: string = '#000000'
  ) {
    super(
      bold = bold,
      underline = underline,
      indentation = indentation,
      italic = italic,
      color = color
    );
  }

  tag(tag: string) {
    let _tag = new Tag();
    this.tags[tag] = _tag;
    return _tag;
  }
}
