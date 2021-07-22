import { Prop } from "@stencil/core";
import { ISpacing } from "../interfaces/ISpacing";

export class SpacingProps {
    @Prop() margin?: ISpacing;
    @Prop() padding?: ISpacing;

    spacingClasses() {
        const { margin, padding } = this;
        return {
            margin,
            padding,
        };
    }
}
