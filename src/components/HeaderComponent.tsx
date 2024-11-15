
interface HeaderProps {
    text1: string;
    text2: string
    color1: string;
    color2: string;
}

const HeaderComponent:React.FC<HeaderProps> = ({text1, text2, color1, color2}) => {
    return (
        <div className="text-center mb-2 mt-5">
            <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bolder'

            }}>
                <span style={{color: color1}}>{text1}</span> 
                <span style={{color: color2}}> {text2}</span>
            </h2>
        </div>
    )
}

export default HeaderComponent
