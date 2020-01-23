import { Console } from 'console'
import { Tag } from './tag';
/**
 * Standard Handler
 * TODO: tags
 * TODO: color
 * TODO: styles
 */
export class Terminal {

    // Default Const

    buffer = "";
    tags: Tag[] = [];
    private defualt_tag : Tag;

    constructor() {

      this.defualt_tag = new Tag('default', this);
    }

    bold() {
      // define bold hrere
    }

    strike() {
      // define strike here
    }

    underline() {
      // define underline Here
    }

    indentation() {
      // define indentation here
    }


    italic () {
      // define italic here
    }

    /**
     * Color Are Below
     */

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
