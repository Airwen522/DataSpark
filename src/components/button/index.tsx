import './button.sass'
interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    status?: 'default' | 'success' | 'error' | 'warning' | 'common';
    isize?: 'small' | 'default' | 'large' | 'extra';
}

function Button(props: ButtonProps) {
    const btnClass = `a-button a-button-status-${props.status || 'default'} a-button-size-${props.isize || 'default'}`;
    return (
        <button {...props} className={btnClass}>
            {props.children}
        </button>
    )
}

export default Button;