import { useLocation } from "react-router-dom";
import Input from "_/components/input";
import Button from "_/components/button";
import './datasource.sass';

/**
 * 数据源添加窗口
 */
function Datasource() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const mode = query.get('mode');
    document.title = '数据源添加';
    const { sparkApi } = window;
    
    const cancelClickHandle = () => {
        console.log(sparkApi);
        
        sparkApi.closeDatasource();
    }

    return (
        <div className="datasource-add-page">
            <h1>{mode}</h1>
            <div className="datasource-form">
                <div className="form-item">
                    <Input placeholder="数据源名称" />
                </div>
                <div className="form-item">
                    <Input placeholder="地址" />
                </div>
                <div className="form-item">
                    <Input placeholder="端口号" />
                </div>
                <div className="form-item">
                    <Input placeholder="用户名" />
                </div>
                <div className="form-item">
                    <Input placeholder="密码" />
                </div>
            </div>
            <div className="form-button-group">
                <Button status="common">测试连接</Button>
                <Button>保存</Button>
                <Button status="error" onClick={cancelClickHandle}>取消</Button>
            </div>
        </div>
    )
}

export default Datasource;