import { Tag } from './tag';
import { TagError } from './exceptions';

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

  log(message: string, tag?: string): Tag
  {
    if(tag == undefined)
    {
      super.log(message);
      return this;
    }else if(tag in this.tags)
    {
      let _tag = this.tags[tag];
      _tag.log(message);
      return _tag;
    }else{
      throw new TagError();
    }
  }

  tag(
    tag: string,
    bold: boolean = false,
    underline: boolean = false,
    indentation: number = 0,
    italic: boolean = false,
    color: string = '#000000'
  ) {
    let _tag = new Tag(
      bold = bold,
      underline=underline,
      indentation = indentation,
      italic = italic,
      color=color
    );
    this.tags[tag] = _tag;
    return _tag;
  }
}
