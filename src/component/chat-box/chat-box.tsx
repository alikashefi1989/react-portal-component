import { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { BsFillXSquareFill, BsSendCheckFill, BsMessenger } from 'react-icons/bs'

interface ChatBoxProps extends ChatBoxUiProps {
    onClose: () => void
}

const ChatBox: React.FC<ChatBoxProps> = ({ style, onClose }) => {
    const [userMessage, setUserMessage] = useState<string>('')
    const [messages, setMessages] = useState<Array<string>>(['hello dear']);
    const chatBoxUiInnerWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chatBoxUiInnerWrapperRef && chatBoxUiInnerWrapperRef.current !== null) {
            chatBoxUiInnerWrapperRef.current.scrollTop = chatBoxUiInnerWrapperRef.current.scrollHeight + 50;
        }
        if (messages.length % 2 !== 0) return
        setTimeout(() => {
            setMessages([...messages, `res from operator ${messages.length / 2}`]);
        }, 500)
    }, [messages, chatBoxUiInnerWrapperRef])

    const addMessage = () => {
        if (userMessage === '') return;
        setMessages([...messages, userMessage]);
        setUserMessage('');
    }

    return <ChatBoxUi style={style}>
        <IconWrapper
            style={{
                top: '10px',
                left: 0,
                right: 0,
                margin: 'auto',
                cursor: 'default',
            }}
        >
            <BsMessenger color="white" size='25px'></BsMessenger>
        </IconWrapper>
        <IconWrapper
            style={{
                top: '15px',
                right: '10px',
            }}
            onClick={onClose}
        >
            <BsFillXSquareFill color="white" size='20px'></BsFillXSquareFill>
        </IconWrapper>
        <ChatBoxUiInnerWrapper ref={chatBoxUiInnerWrapperRef}>
            {messages.map((message: string, index: number) => {
                return <MessageWrapper key={index.toString()} isOdd={index % 2 === 0 ? false : true}><Message>{message}</Message></MessageWrapper>
            })}
        </ChatBoxUiInnerWrapper>
        <Input value={userMessage} onChange={(event: any) => setUserMessage(event.target.value)} />
        <IconWrapper
            style={{
                bottom: '15px',
                right: '15px',
            }}
            onClick={addMessage}
        >
            <BsSendCheckFill color="white" size='20px'></BsSendCheckFill>
        </IconWrapper>
    </ChatBoxUi>
}

export default ChatBox

interface ChatBoxUiProps {
    style?: CSSProperties
}

const ChatBoxUi = styled.div(({ style }: ChatBoxUiProps) => ({
    boxSizing: 'border-box',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '10px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingInline: '10px',
    paddingTop: '45px',
    paddingBottom: '55px',
    ...style,
}))

const ChatBoxUiInnerWrapper = styled.div(() => ({
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    overflow: 'auto',
}))

interface MessageWrapperProps {
    isOdd: boolean
}

const MessageWrapper = styled.div(({ isOdd }: MessageWrapperProps) => ({
    width: '100%',
    height: 'max-content',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: !isOdd ? 'flex-start' : 'flex-end',
    alignItems: 'flex-start',
    padding: '5px',
    color: 'white',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    textAlign: 'start',
}))

const Message = styled.div(() => ({
    width: '250px',
    height: 'max-content',
    boxSizing: 'border-box',
    backgroundColor: 'grey',
    padding: '5px',
    color: 'white',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    textAlign: 'start',
    borderRadius: '5px',
}))

interface IconWrapperProps {
    style?: CSSProperties
}

const IconWrapper = styled.div((props: IconWrapperProps) => ({
    width: 'max-content',
    height: 'max-content',
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    ...props.style
}))

const Input = styled.input(() => ({
    boxSizing: 'border-box',
    width: '85%',
    height: '35px',
    backgroundColor: 'white',
    color: 'black',
    position: 'absolute',
    bottom: '10px',
    margin: 'auto',
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
    paddingInline: '15px',
}))