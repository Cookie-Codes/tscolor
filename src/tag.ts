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

  /**
   * Constructor
   * @param bold        bold
   * @param underline   underline
   * @param indentation indentation
   * @param italic      italics
   * @param color       color:hex like #ffffff
   */
  constructor( bold: boolean = false,
               underline: boolean = false,
               indentation: number = 0,
               italic: boolean = false,
               color:string = '#000000'
              )
  {

    this._bold = bold;
    this._underline = underline;
    this._indentation =indentation;
    this._italic = italic;
    this.withhex(color);

  }

  /**
   * Set Bold
   * @return void
   */
  bold() {
    this._bold = !this._bold;
    return this;
  }

  /**
   * Set Italics
   * @return void
   */
  italic() {
    this._italic = !this._italic;
    return this;
  }

  /**
   * Set Underline
   * @return void
   */
  underline() {
    this._underline = !this._underline;
    return this;
  }

  /**
   * Set Indentation in Multipe of Tabs
   * @param  indentation tabs * n indentation
   * @return             void
   */
  indentation(indentation: number)
  {
    this._indentation = indentation;
    return this;
  }

  /**
   * Logs Message As Per Configuration
   * @param  message message
   * @return         void
   */
  log(message: string): Tag {
    console.log(this.toString() + message);
    this.reset();
    return this;
  }

  /**
   * Reset Terminal Color Sceme
   * @return void
   */
  reset() {
    console.log("\x1b[0m");
    return this;
  }

  /**
   * Css Like Hex Color Representation #ffffff
   * @param  hex hex string
   * @return     void
   */
  withhex(hex: string)
  {
    let red = parseInt(hex.substr(1, 2), 16);
    let blue = parseInt(hex.substr(3, 2), 16);
    let green = parseInt(hex.substr(5, 2), 16);
    this._color = new Color(red, green, blue);
    return this;
  }

  /**
   * Sets Color with r g b as parementer
   * @param  r Red Decimal Value
   * @param  g Green Decimal Value
   * @param  b Blue Decimal Value
   * @return   void
   */
  withrgb(r: number, g: number, b:number)
  {
    this._color = new Color(r, g, b);
    return this;
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
