import React from 'react';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => React.JSX.Element;

interface SelectableOptions {
    label: string | number;
    value: number | string;
}
interface SelectProps {
    /**
     * The width of the Selectable component.
     */
    width?: number;
    /**
     * The width of the Selectable component.
     */
    placeHolder: string;
    /**
     * The collection of options to select from.
     */
    options: SelectableOptions[];
    /**
     * The label of the value(s) that are selected by default. When multi is not specified or set to false, _default is a single string or number. Otherwise, it is an array.
     */
    _default: null | SelectableOptions | SelectableOptions[];
    /**
     * Whether Selectable can select multiple options. Defaults to false.
     */
    isSearchable?: boolean;
    /**
     * Whether Selectable can select multiple options. Defaults to false.
     */
    isMulti?: boolean;
    /**
     * Tracks changes to the selected options. When multi is not specified or set to false, values is a one-item array with the single selected option.
     */
    onChange: (values: null | SelectableOptions | SelectableOptions[]) => void;
}

declare const DozeeSelect: ({ placeHolder, options, isMulti, isSearchable, _default, onChange }: SelectProps) => React.JSX.Element;

export { Button as DozeeButton, DozeeSelect };
