import { CSSProperties } from "react";
import styled from "@emotion/styled";

interface InfoBoxProps extends InfoBoxUiProps {
    text: string
}

const InfoBox: React.FC<InfoBoxProps> = ({ text, style }) => {
    return <InfoBoxUi style={style}>{text}</InfoBoxUi>
}

export default InfoBox

interface InfoBoxUiProps {
    style?: CSSProperties
}

const InfoBoxUi = styled.div(({ style }: InfoBoxUiProps) => ({
    ...style,
}))