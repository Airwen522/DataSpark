import './modal.sass';
interface ModalProps {
    children: any
}

/**
 * 拟态框
 */
function Modal(props: ModalProps) {
    const { children } = props;
    return (
        <div className="spark-modal">
            <header>这是内容</header>
            <div className="spark-content">
                {children}
            </div>

        </div>
    )
}

export default Modal;