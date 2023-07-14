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

declare const DozeeSelect: () => React.JSX.Element;

export { Button as DozeeButton, DozeeSelect };
