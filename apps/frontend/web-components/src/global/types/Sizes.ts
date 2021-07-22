export const BasicSizes = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
} as const;

export type BasicSize = typeof BasicSizes[keyof typeof BasicSizes];
