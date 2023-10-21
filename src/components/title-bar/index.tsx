import logo from '_/assets/logo.svg';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './titlebar.sass';

function TitleBar() {
    const { sparkApi } = window;

    /**
     * 开发者工具 开启 点击
     */
    const devtoolOpenClickHandle = () => {
        sparkApi.openDevTool();
    }

    /**
     * 关于 开启 点击
     */
    const aboutOpenClickHandle = () => {
        sparkApi.openAbout();
    }

    /**
     * star我们 开启 点击
     */
    const startUsOpenClickHandle = () => {
        sparkApi.openStarUs();
    }

    /**
     * 数据源点击打开按钮
     */
    const datasourceOpenClickHandle = () => {
        sparkApi.openDatasource('MySQL')
    }

    return (
        <div className="title-bar">
            <div className="title-bar__logo">
                <img src={logo} alt="" />
            </div>
            <div className="title-bar__options">
                {/* 文件 */}
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <div className="option-item" aria-label="File">
                            文件(F)
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="option-item__options" align='start'>
                            <DropdownMenu.Item onClick={datasourceOpenClickHandle}>
                                <span>新建数据源...</span>
                                <span>Ctrl + N</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <span>导入配置</span>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
                {/* 帮助 */}
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <div className="option-item" aria-label="File">
                            帮助(H)
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="option-item__options" align='start'>
                            <DropdownMenu.Item>
                                <span>检查更新</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={devtoolOpenClickHandle}>
                                <span>开启开发者工具</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={startUsOpenClickHandle}>
                                <span>Start我们</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={aboutOpenClickHandle}>
                                <span>关于...</span>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>

            </div>
        </div>
    )
}

export default TitleBar;