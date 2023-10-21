import TitleBar from "_/components/title-bar";
import SideBar from "_/components/side-bar";
import './main.sass';
function Main() {
    return (
        <div className="page-main">
            <TitleBar />
            <div className="page-body">
                <SideBar />
            </div>
        </div>
    )
}

export default Main;