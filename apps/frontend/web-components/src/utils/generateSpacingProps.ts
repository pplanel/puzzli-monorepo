import { ISpacing } from "../global/interfaces/ISpacing";
import { SpacingDirections } from "../global/types/SpacingDirections";

function addDirections(props: ISpacing, attrName: "margin" | "padding") {
    if (!props) {
        return;
    }

    var tmpStyles: any;

    Object.keys(props).forEach((direction: SpacingDirections) => {
        const value = props[direction];

        if (!value) {
            return;
        }

        switch (direction) {
            case "top":
                tmpStyles[`${attrName}Top`] = value;
                return;

            case "bottom":
                tmpStyles[`${attrName}Bottom`] = value;
                return;

            case "right":
                tmpStyles[`${attrName}Right`] = value;
                return;

            case "left":
                tmpStyles[`${attrName}Left`] = value;
                return;

            default:
                return;
        }
    });
}

export default function generateSpacingProps(props: {
    margin?: ISpacing;
    padding?: ISpacing;
}): { margin: any; padding: any } {
    if (!props) {
        return;
    }

    const margin = addDirections(props?.margin, "margin");
    const padding = addDirections(props?.padding, "padding");

    return { margin, padding };
}
