/**
 * Tag File
 */

import { Color } from './color';
import { TerminalValues } from './values';

export class Tag{
  private _color: Color = new Color(0,0,0);
  private _bold : boolean ;
  private _italic: boolean;
  private _underline: boolean;
  private _indentation: number
  constructor( bold: boolean = false,
               underline: boolean = false,
               indentation: number = 0,
               italic: boolean = false,
               color:string = '#000000';
              )
  {

    this._bold = bold;
    this._underline = underline;
    this._indentation =indentation;
    this._italic = italic;

  }

  bold() {
    this._bold = !this._bold;
    return this;
  }

  italic() {
    this._italic = !this._italic;
    return this;
  }

  underline() {
    this._underline = !this._underline;
    return this;
  }

  indentation(indentation: number)
  {
    this._indentation = indentation;
    return this;
  }

  log(message: string) {
    console.log(this.toString() + message);
    this.reset();
  }

  reset() {
    console.log("\x1b[0m");
  }

  /**
   * Gives Terminal Configurations Depending Upon
   * Settings
   * @return Terminal Control Characters
   */
  toString(): string
  {
    let buffer: string = "";
    buffer += TerminalValues.ESCAPE;
    if(this._bold)
    {

      buffer += TerminalValues.BOLD;
      buffer += TerminalValues.SEPERATOR;
    }

    if(this._italic){
      buffer += TerminalValues.ITALIC;
      buffer += TerminalValues.SEPERATOR;
    }

    if(this._underline)
    {
      buffer += TerminalValues.UNDERLINE;
      buffer += TerminalValues.SEPERATOR;
    }
    buffer += this._color.toString();
    buffer += TerminalValues.ENDING;
    buffer += TerminalValues.INDENTATION.repeat(this._indentation);
    return buffer;
  }
}
