import styled from "@emotion/styled";

interface PopHoverBottonProps {
    title: string
    onClick: () => void
}

const PopHoverBotton: React.FC<PopHoverBottonProps> = ({ title, onClick }) => {
    return <PopHoverBottonUi onClick={onClick}>{title}</PopHoverBottonUi>
}

export default PopHoverBotton

const PopHoverBottonUi = styled.div(() => ({
    width: '80px',
    height: '80px',
    backgroundColor: 'blueviolet',
    borderRadius: '50%',
    fontSize: '14px',
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: 'blue',
        color: 'white',
    }
}))