import { Tag } from './tag';
/**
 * Standard Handler
 * TODO: tags
 * TODO: color
 * TODO: styles
 */
export class Terminal {

    // Default Const

    private defualt_tag : Tag;

    constructor() {

      this.defualt_tag = new Tag('default', this);
    }


    withcolor(color: string)
    {
        // Color Impl
    }

    tag(tag: string) {
      let _tag = new Tag(tag, this);
      this.tags.push(_tag);
      return _tag;
    }
}
