import _get from "lodash/get";

export default function generateClasses(classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
