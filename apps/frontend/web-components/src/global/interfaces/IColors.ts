import { ColorWeights } from '../types/Weights';
export interface IColors {
    brand: Record<ColorWeights, string>;
    secondary: Record<ColorWeights, string>;
    base: Record<ColorWeights, string>;
    system: IColorSystem;
    white: string;
    black: string;
}

export interface IColorSystem {
    success: Record<ColorWeights, string>;
    danger: Record<ColorWeights, string>;
    warning: Record<ColorWeights, string>;
    info: Record<ColorWeights, string>;
}
