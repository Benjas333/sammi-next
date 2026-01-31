import type { CommandBoxTypes as box } from "sammi-bridge-types";

/**
 * Object that contains helper functions to generate command boxes easier with its proper types.
 *
 * @example
 * ```ts
 * await SAMMI.extCommand("Example", 3355443, 52, {
 *     variable: CommandBoxes.resizableText("Example Variable", "")
 * })
 * ```
 */
const CommandBoxes = {
    /**
     * Resizable text box that allows for newline, defaultValue should be a string.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    resizableText: (
        name: string,
        defaultValue: string,
        sizeModifier?: number
    ): box.ResizableTextBox => [name, 0, defaultValue, sizeModifier],

    /**
     * Check box, defaultValue must be set to true or false, will return true or false when triggered.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    check: (
        name: string,
        defaultValue: boolean,
        sizeModifier?: number
    ): box.CheckBox => [name, 2, defaultValue, sizeModifier],

    /**
     * OBS Scenes box - allows user to select an OBS scene from a dropdown.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    obsScenes: (
        name: string,
        defaultValue?: unknown,
        sizeModifier?: number
    ): box.ObsScenesBox => [name, 4, defaultValue, sizeModifier],

    /**
     * OBS Sources box - allows user to select an OBS source from a dropdown.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    obsSources: (
        name: string,
        defaultValue?: unknown,
        sizeModifier?: number
    ): box.ObsSourcesBox => [name, 5, defaultValue, sizeModifier],

    /**
     * OBS Filters box - allows user to select an OBS filter from a dropdown.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    obsFilters: (
        name: string,
        defaultValue?: unknown,
        sizeModifier?: number
    ): box.ObsFiltersBox => [name, 6, defaultValue, sizeModifier],

    /**
     * Keyboard button, defaultValue should be 0, returns the select key code.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    keyboardButton: (
        name: string,
        sizeModifier?: number
    ): box.KeyboardButtonBox => [name, 7, 0, sizeModifier],

    /**
     * Compare box, defaultValue should be `==`, returns a string from the compare box, such as `=|` or `>=`
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    compare: (
        name: string,
        sizeModifier?: number
    ): box.CompareBox => [name, 8, "==", sizeModifier],

    /**
     * Math box, defaultValue should be `=`, returns a string from the compare box, such as `|` or `+=`.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    math: (
        name: string,
        sizeModifier?: number
    ): box.MathBox => [name, 9, "=", sizeModifier],

    /**
     * Sound path box, defaultValue should be `""`, returns its path.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    soundPath: (
        name: string,
        sizeModifier?: number
    ): box.SoundPathBox => [name, 10, "", sizeModifier],

    /**
     * Slider 0 to 100%, defaultValue should be 0-1, returns a float 0 to 1.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    slider: (
        name: string,
        defaultValue: number,
        sizeModifier?: number
    ): box.SliderBox => {
        if (defaultValue < 0 || defaultValue > 1)
            throw new Error(`SliderBox "${name}": defaultValue must be between 0 and 1 (received: ${defaultValue})`);

        return [name, 11, defaultValue, sizeModifier];
    },

    /**
     * Normal white box, defaultValue can be anything.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    white: (
        name: string,
        defaultValue: NonNullable<unknown>,
        sizeModifier?: number
    ): box.WhiteBox => [name, 14, defaultValue, sizeModifier],

    /**
     * Variable box (yellow box), defaultValue should be a string, returns whatever variable is in the yellow box.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    variable: (
        name: string,
        defaultValue: string,
        sizeModifier?: number
    ): box.VariableBox => [name, 15, defaultValue, sizeModifier],

    /**
     * Color box, defaultValue should be a number, returns the selected color.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    color: (
        name: string,
        defaultValue: number,
        sizeModifier?: number
    ): box.ColorBox => [name, 17, defaultValue, sizeModifier],

    /**
     * Select box value, defaultValue should be `0`,
     * shows a list of all the options you provided when clicked and returns a numeric value of the selected option.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @param options An array of options a user picks from.
     * @returns The box with the format required by SAMMI Bridge.
     */
    selectValue: (
        name: string,
        sizeModifier: number | undefined,
        options: string[]
    ): box.SelectBoxValue => [name, 18, 0, sizeModifier, options],

    /**
     * Select box string, defaultValue should be a string, returns a string the user selected.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @param options An array of options a user picks from.
     * @returns The box with the format required by SAMMI Bridge.
     */
    selectString: (
        name: string,
        defaultValue: string,
        sizeModifier: number | undefined,
        options: string[]
    ): box.SelectBoxString => [name, 19, defaultValue, sizeModifier, options],

    /**
     * Select box string typeable, defaultValue should be a string, returns a string the user selected or typed in the box.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @param options An array of options a user picks from.
     * @returns The box with the format required by SAMMI Bridge.
     */
    selectTypeable: (
        name: string,
        defaultValue: string,
        sizeModifier: number | undefined,
        options: string[]
    ): box.SelectBoxTypeable => [name, 20, defaultValue, sizeModifier, options],

    /**
     * File path, defaultValue should be a string, returns the selected file path.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    filePath: (
        name: string,
        defaultValue: string,
        sizeModifier?: number
    ): box.FilePathBox => [name, 22, defaultValue, sizeModifier],

    /**
     * Image path, defaultValue should be a string, returns the selected image path.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    imagePath: (
        name: string,
        defaultValue: string,
        sizeModifier?: number
    ): box.ImagePathBox => [name, 23, defaultValue, sizeModifier],

    /**
     * Twitch reward redeem ID, defaultValue should be a number, returns the selected reward ID.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    twitchRewardID: (
        name: string,
        defaultValue: number,
        sizeModifier?: number
    ): box.TwitchRewardID => [name, 24, defaultValue, sizeModifier],

    /**
     * Option Box, allows you to specify an array of extension command names,
     * which are used to swap the command to the selected option.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @param options An array of options a user picks from.
     * @returns The box with the format required by SAMMI Bridge.
     */
    option: (
        name: string,
        defaultValue: string,
        sizeModifier: number | undefined,
        options: string[]
    ): box.OptionBox => [name, 25, defaultValue, sizeModifier, options],

    /**
     * No box at all, only label is present.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    label: (
        name: string,
        sizeModifier?: number
    ): box.LabelBox => [name, 30, "", sizeModifier],

    /**
     * OBS Pull Box.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    obsPull: (
        name: string,
        defaultValue?: unknown,
        sizeModifier?: number
    ): box.ObsPullBox => [name, 32, defaultValue, sizeModifier],

    /**
     * Select Deck Box, defaultValue should be a number.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    selectDeck: (
        name: string,
        defaultValue: number,
        sizeModifier?: number
    ): box.SelectDeckBox => [name, 33, defaultValue, sizeModifier],

    /**
     * Password Box, same as whiteBox, except the string is displayed as *****.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    password: (
        name: string,
        defaultValue: NonNullable<unknown>,
        sizeModifier?: number
    ): box.PasswordBox => [name, 34, defaultValue, sizeModifier],

    /**
     * Twitch Account Box, select box with all linked Twitch accounts, returns the selected option.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @returns The box with the format required by SAMMI Bridge.
     */
    twitchAccount: (
        name: string,
        defaultValue?: unknown,
        sizeModifier?: number
    ): box.TwitchAccountBox => [name, 35, defaultValue, sizeModifier],

    /**
     * Save Variable Box, used when you need to set a variable to the button instance this command was called in.
     * SAMMI will timeout after 30s and return undefined if you have not returned a value by then,
     * so it is crucial that you always return a value even on fail.
     *
     * Options:
     * - `timeoutAfter`: sets a custom timeout duration in milliseconds for the command to wait. default: `30000`.
     *
     * @param name A string that serves as a friendly name for the box, displayed to the user in SAMMI Core.
     * @param defaultValue The default value for the variable associated with this box.
     * @param sizeModifier An optional parameter that adjusts the horizontal size of the box.
     * It defaults to `1`. `0.5` is half the size, `2` is double the size, etc.
     * Note that by changing the size of one box, you will also change the size of all other boxes in the extension command,
     * as the total sum of all boxes' sizes must be equal to the number boxes themselves to fit in the extension command.
     * @param options An object of options for the box.
     * @returns The box with the format required by SAMMI Bridge.
     */
    saveVariable: (
        name: string,
        defaultValue: NonNullable<unknown>,
        sizeModifier?: number,
        options: {
            timeoutAfter: number
        } = {
            timeoutAfter: 30000
        },
    ): box.SaveVariableBox => [name, 37, defaultValue, sizeModifier, options],
}

export default CommandBoxes;
