import { Color } from './color';
import {Console} from 'console';
import { stdout , stderr } from 'process';
import { TerminalValues } from './values';
/**
 * Tag File
 */

export class Tag extends Console{
  private _color: Color = new Color(0,0,0);
  private _bold : boolean ;
  private _italic: boolean;
  private _underline: boolean;
  private _indentation: number
  constructor( bold: boolean = false,
               underline: boolean = false,
               indentation: number = 0,
               italic: boolean = false, )
  {
    super(stdout, stderr);
    this._bold = bold;
    this._underline = underline;
    this._indentation =indentation;
    this._italic = italic;
  }

  bold():void {
    this._bold = !this.bold;
  }

  italic():void {
    this._italic = !this.italic;
  }

  underline():void {
    this._underline = !this.underline;
  }

  indentation(indentation: number)
  {
    this._indentation = indentation;
  }

  log(message: string) {
    // TODO: Execute Tag Here
    super.log(this.toString() + message);
    this.reset();
  }

  reset() {
    this.log("\033[0m");
  }

  toString(): string
  {
    let buffer: string = "";
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

    buffer += TerminalValues.INDENTATION.repeat(this._indentation);
    buffer += this._color.toString();
    return buffer;
  }
}
