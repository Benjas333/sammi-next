/**
 * [insert_script]
 * In this section, you’re encouraged to write your own TypeScript code.
 * 
 * We recommend having one main function that runs as soon as SAMMI connects to Bridge, and which you call from [insert_command] section.
 * Inside this function, you can set up listeners for extension commands coming from SAMMI, e.g. when a user actually runs a button containing your extension command you defined in [insert_command] section.
 * 
 * Learn more about Listening to Extension Commands in the SAMMI Bridge documentation.
 * 
 * SAMMI Bridge provides premade helper functions for you to use, such as retrieving variables, setting variables, triggering buttons and more. You can find all the helper functions in the SAMMI Bridge documentation
 */
import "sammi-bridge-types";
import { multiply } from "./utils/utils";
import { getExternal, initConfig, insertCommand } from "sammi-next";
import sammi_config from '../sammi.config.json';

const CONFIG = initConfig(sammi_config);

// Use getExternal() to retrieve your [insert_external].
const EXTERNAL = getExternal(CONFIG.id);

const title = EXTERNAL.querySelector('#title') as HTMLTitleElement;
title.innerText = CONFIG.name;

const inputA = EXTERNAL.querySelector("#number-a") as HTMLInputElement;
const inputB = EXTERNAL.querySelector("#number-b") as HTMLInputElement;
const resultEl = EXTERNAL.querySelector('#result') as HTMLSpanElement;

// The default export is [insert_command]. It has to be a function.
export default insertCommand(() => {
    /** 
     * [insert_command]
     * In this section, you can define Extension Commands.
     * These commands will be available to users in SAMMI Core when they install your extension.
     * You can define multiple commands in this section. Refer to the SAMMI Bridge documentation for Extension Command details.
     * In this section, you can also automatically call your main extension function that should run as soon as SAMMI connects to Bridge.
     */
    welcome();

    SAMMI.extCommand("Extension Sample", 3355443, 52);
    sammiclient.on("Extension Sample", () => {
        const handler = async () => {
            await SAMMI.notification('Command Sample');
        };
        handler().catch((e) => console.error(e));
    });
});

const message = `Hello world from ${CONFIG.name}!`;

// Export the functions you want to access from [insert_external]
export function welcome() {
    console.log(message);
}

export function multiplyButton() {
    const result = multiply(parseInt(inputA.value), parseInt(inputB.value));
    resultEl.innerText = result.toString();
}
