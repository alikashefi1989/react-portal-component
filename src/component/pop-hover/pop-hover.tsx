import { CSSProperties, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { generateStyleByCss } from "../../hook/portal";

interface PopHoverProps {
    button: React.ReactElement
    body: React.ReactElement
    bodyStyle: CSSProperties
}

const PopHover: React.FC<PopHoverProps> = ({ button, body, bodyStyle }) => {
    const popHoverUiRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (popHoverUiRef.current === null) return
        if (popHoverUiRef.current.children.length < 2) return
        popHoverUiRef.current.children[1].setAttribute('style', `${generateStyleByCss(bodyStyle)}`)
    }, [popHoverUiRef, bodyStyle])

    return <PopHoverUi ref={popHoverUiRef}>{button}{body}</PopHoverUi>;
}

export default PopHover

const PopHoverUi = styled.div(() => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'max-content',
    height: 'max-content',
}))