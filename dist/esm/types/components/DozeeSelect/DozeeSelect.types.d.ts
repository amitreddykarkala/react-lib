import { ReactNode } from "react";
interface SelectableOptions {
    label: string | number;
    content?: ReactNode | string;
}
export interface DozeeSelectProps {
    /**
     * The width of the Selectable component.
     */
    width: number;
    /**
     * The collection of options to select from.
     */
    options: SelectableOptions;
    /**
     * The label of the value(s) that are selected by default. When multi is not specified or set to false, _default is a single string or number. Otherwise, it is an array.
     */
    _default: string | number | string[] | number[];
    /**
     * Whether Selectable can select multiple options. Defaults to false.
     */
    multi?: boolean;
    /**
     * Tracks changes to the selected options. When multi is not specified or set to false, values is a one-item array with the single selected option.
     */
    onClick?: (values: SelectableOptions) => void;
}
export {};
