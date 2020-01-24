import { Terminal } from '../index';

const t = new Terminal();
t.tag('warning', true, true, 0, true, '#ff0000');
t.log("Killer", 'warning');
