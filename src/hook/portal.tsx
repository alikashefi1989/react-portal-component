import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CSSProperties } from "@emotion/serialize";

interface PortalProps {
    children: React.ReactNode;
    style?: CSSProperties;
}

const Portal: React.FC<PortalProps> = ({ children, style }) => {
    const portalRoute = document.getElementById("portal-root")!;
    const elementParent = document.createElement("div");
    elementParent.setAttribute('style', generateStyleByCss(style));

    useEffect(() => {
        portalRoute.appendChild(elementParent);
        return () => {
            portalRoute.removeChild(elementParent)
        };
    }, [elementParent, portalRoute]);

    return createPortal(children, elementParent)
};

export default Portal;

export const generateStyleByCss = (css?: CSSProperties): string => {
    let style: string = '';
    if (!css) return style;
    const cssPairKeyValue: Array<[string, (string | number)]> = Object.entries(css);
    for (let i = 0; i < cssPairKeyValue.length; i++) {
        style = style + `${cssPairKeyValue[i][0]}:${cssPairKeyValue[i][1]};`;
    }
    return style;
}