import { Terminal } from './index';
/**
 * Tag File
 */

export class Tag {
  private terminal: Terminal;
  private name: string;
  private color: string;
  private bold : boolean;
  private italic: boolean
  private underline: boolean
  private indentation: number
  private direction: "left" | "right" | "center";
  constructor(tag: string, param: Terminal)
  {
    this.name = tag;
    this.terminal = param
  }

  execute() {
    // TODO: Execute Tag Here
  }
}
