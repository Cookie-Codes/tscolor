import { Tag } from './tag';

interface TagsList
{
  [index: number] : Tag;
  [index: string] : Tag;
}

/**
 * Standard Handler
 * TODO: tags
 * TODO: color
 * TODO: styles
 */
export class Terminal {

    // Default Const

    private tags: TagsList = {};

    private defualt_tag : Tag;

    constructor() {

      this.defualt_tag = new Tag('default', this);
    }

    default(): Tag{
      return this.defualt_tag;
    }

    tag(tag: string) {
      let _tag = new Tag(tag, this);
      this.tags[tag] = _tag;
      return _tag;
    }
}
