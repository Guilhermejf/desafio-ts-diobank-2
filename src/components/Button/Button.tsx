import './Button.css'

interface IButton{
    text: string,
    click : () => {}
}

export default ({ text, click }: IButton) => {
    return (
        <button onClick={click}>{text}</button>
    )
}