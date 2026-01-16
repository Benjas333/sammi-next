import "sammi-bridge-types";
import { ExtensionConfig } from "./types";


/**
 * Parses a raw config object into an ExtensionConfig
 * @param config Unparsed config object.
 * @returns Parsed config.
 */
export function initConfig(config: {[key: string]: any}): ExtensionConfig {
    return config as ExtensionConfig;
}

/**
 * Retrieves the [insert_external] section. This section appears inside the extension’s tab in Bridge, and it provides a visual interface for the extension if needed. It’s written in HTML and CSS.
 * @returns 
 */
export function getExternal(extension_id: string) {
    return document.querySelector(`#${extension_id}-external`)!;
}

/**
 * Generates the [insert_command] section. This should be used in the default export of your extension.
 * 
 * In this section, you can define Extension Commands.
 * These commands will be available to users in SAMMI Core when they install your extension.
 * You can define multiple commands in this section.
 * Refer to the SAMMI Bridge documentation for Extension Command details.
 * In this section, you can also automatically call your main extension function that should run as soon as SAMMI connects to Bridge.
 * @param callback A callback with the logic that you will insert in the [insert_command] section.
 * @returns default callback
 */
export function insertCommand(callback: () => void) {
    const wrapper = () => {
        if (!sammiclient) {
            setTimeout(wrapper, 1);
            return;
        }

        callback();
    };

    return wrapper;
}
