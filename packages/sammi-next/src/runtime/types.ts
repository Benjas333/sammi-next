declare global {
    var SAMMIExtensions: Record<string, SAMMINextExtension | undefined>;
}

/**
 * Represents useful data from the sammi.config.js.
 */
export interface ExtensionConfig {
    /** Name of the extension. It is visible in SAMMI Bridge and SAMMI Core. */
    name: string;
    /** Unique id of the extension. */
    id: string;
    /** Descriptive text about the extension, e.g. what the extension does. Is displayed to the users in SAMMI Bridge-Extensions tab when they hover over the extension name inside the list of installed extensions. */
    info?: string;
    /** Extension version, using numbers and dots (e.g., 2.01). Used by the automatic version checker in Bridge, which can notify users of updates. */
    version: string;
}

/**
 * Interface that represents most of the structures built with SAMMI Next.
 */
export interface SAMMINextExtension {
    readonly default?: () => void;
    readonly _config?: ExtensionConfig;
    readonly [key: string]: unknown;
}
