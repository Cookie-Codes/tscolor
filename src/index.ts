import { stdout , stderr } from 'process';
import { Console } from 'console'
/**
 * Standard Handler
 * TODO: tags
 * TODO: color
 * TODO: styles
 */
class Terminal extends Console {

    // Default Const
    constructor() { super(stdout, stderr); }
}
