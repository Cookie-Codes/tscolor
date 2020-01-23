import { Terminal } from './index';
import { Color } from './color';
/**
 * Tag File
 */

export class Tag {
  private _terminal: Terminal;
  private _name: string;
  private _color: Color = new Color(0,0,0);
  private _bold : boolean ;
  private _italic: boolean;
  private _underline: boolean;
  private _indentation: number
  private _direction: string;
  constructor(name: string,
              terminal: Terminal,
              bold: boolean = false,
              underline: boolean = false,
              indentation: number = 0,
              italic: boolean = false,
              )
  {
    this._name = name;
    this._terminal =terminal;
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

  execute() {
    // TODO: Execute Tag Here
  }

  reset() {

  }
}
