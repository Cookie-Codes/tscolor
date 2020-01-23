import { Color } from './color';
import { TerminalValues } from './values';
/**
 * Tag File
 */

export class Tag{
  private _color: Color = new Color(0,0,0);
  private _bold : boolean ;
  private _italic: boolean;
  private _underline: boolean;
  private _indentation: number
  constructor( bold: boolean = false,
               underline: boolean = false,
               indentation: number = 0,
               italic: boolean = false )
  {

    this._bold = bold;
    this._underline = underline;
    this._indentation =indentation;
    this._italic = italic;
  }

  bold() {
    this._bold = !this.bold;
    return this;
  }

  italic() {
    this._italic = !this.italic;
    return this;
  }

  underline() {
    this._underline = !this.underline;
    return this;
  }

  indentation(indentation: number)
  {
    this._indentation = indentation;
    return this;
  }

  log(message: string) {
    // TODO: Execute Tag Here
    console.log(this.toString() + message);
    this.reset();
  }

  reset() {
    console.log("\x1b[0m");
  }

  toString(): string
  {
    let buffer: string = "";
    buffer+= TerminalValues.ESCAPE;
    if(this._bold)
    {
      buffer += TerminalValues.BOLD;
    }

    if(this._italic){
      buffer += TerminalValues.ITALIC;
    }

    if(this._underline)
    {
      buffer += TerminalValues.ITALIC;
    }
    buffer += this._color.toString();
    buffer += TerminalValues.ENDING;
    buffer += TerminalValues.INDENTATION.repeat(this._indentation);

    return buffer;
  }
}
