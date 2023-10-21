import './input.sass';
export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    status?: 'default' | 'success' | 'error' | 'warning';
    isize?: 'small' | 'default' | 'large' | 'extra';
}


function Input(props: InputProps) {
    return (
        <input type="text"
            {...props}
            className={`s-input s-input-status-${props.status || 'default'} s-input-size-${props.isize || 'default'}`} />
    )
}

export default Input;