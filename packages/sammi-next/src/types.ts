
/**
 * Represents you extension config from sammi.config.json.
 */
export interface ExtensionConfig {
    /** This section names your extension, and is visible in SAMMI Bridge and SAMMI Core. Please use alphanumeric characters and spaces only. */
    name: string;
    /** Specify a unique id for your extension here. Please use alphanumeric characters, dashes, and underscores only. */
    id: string;
    /** This section is for descriptive text about the extension, e.g. what the extension does. This information is displayed to the users in SAMMI Bridge-Extensions tab when they hover over the extension name inside the list of installed extensions. */
    info?: string;
    /** Specify your extension version here, using numbers and dots (e.g., 2.01). This is crucial for the automatic version checker in Bridge, which can notify users of updates. */
    version: string;
    /** Specify your script.ts path here. In [insert_script], you’re encouraged to write your own TypeScript code. */
    entry: string;
    /** Specify your external.html path here. [insert_external] appears inside the extension’s tab in Bridge, and it provides a visual interface for the extension if needed. It’s written in HTML and CSS. */
    external?: string;
    /** Specify your over.json path here. In [insert_over] you simply copy and paste your deck from SAMMI Core you wish to distribute with your extension. When users install your extension, the deck will be automatically added to their SAMMI Core. */
    over?: string;
    /** Configuration related with the extension building. */
    out: {
        /** The path where the extension will build to. */
        dir: string;
        /** The file name of the final JavaScript file. */
        js: string;
        /** The file name of the final SAMMI Extension File. */
        sef: string;
    }
}