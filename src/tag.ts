import { Terminal } from './index';
import { Color } from './color';
/**
 * Tag File
 */

export class Tag {
  private terminal: Terminal;
  private name: string;
  private color: Color = new Color(0,0,0);
  private bold : boolean ;
  private italic: boolean;
  private underline: boolean;
  private indentation: number
  private direction: string;
  constructor(name: string,
              terminal: Terminal,
              bold: boolean = false,
              underline: boolean = false,
              indentation: number = 0,
              italic: boolean = false,
              direction = "left"
              )
  {
    this.name = name;
    this.terminal =terminal;
    this.bold = bold;
    this.underline = underline;
    this.indentation =indentation;
    this.italic = italic;
    this.direction = direction;

  }

  execute() {
    // TODO: Execute Tag Here
  }
}
