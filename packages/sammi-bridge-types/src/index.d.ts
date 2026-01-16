import SAMMIWebSocket from 'sammi-websocket-types/dist/SAMMIWebSocket';
import type { SAMMICommands as Commands } from './SAMMICommands';

declare class SAMMICommands extends Commands {
    /**
     * send extension command to SAMMI
     * @param name - name of the extension command
     * @param color - box color, accepts hex/dec colors (include # for hex), default 3355443
     * @param height - height of the box in pixels, 52 for regular or 80 for resizable box, default 52
     * @param boxes
     * - one object per box, key = boxVariable, value = array of box params
     * - boxVariable = variable to save the box value under
     * - boxName = name of the box shown in the user interface
     * - boxType = type of the box, 0 = resizable, 2 = checkbox (true/false), 14 = regular box, 15 = variable box, 18 = select box, see extension guide for more
     * - defaultValue = default value of the variable
     * - (optional) sizeModifier = horizontal box size, 1 is normal
     * - (optional) [] selectOptions = array of options for the user to select (when using Select box type)
     * @param boxes.boxVariable
     * */
    extCommand(name?: string, color?: string | number, height?: string | number, boxes?: {
        [boxVariable: string]: [boxName: string, boxType: number, defaultValue: (string | number), sizeModifier: (number | undefined), selectOptions: any[] | undefined];
    }, triggerButton?: boolean, hidden?: boolean): Promise<any>;
}

declare global {
        const SAMMI: SAMMICommands
        const sammiclient: SAMMIWebSocket
}
export {};
