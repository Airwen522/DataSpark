import './about.sass'
/**
 * 关于
 */
function About() {
    const { sparkApi } = window;
    const appInfo = sparkApi.getAppInfo();
    return (
        <div className='page-about'>
            <div className="page-about__title">
                <h2>Dataspark</h2>
                ver {appInfo.dataspark}
            </div>

            <div className="page-about__content">
                <div className='about_item'>
                    <span>Chromium</span>
                    <span>{appInfo.chrome}</span>
                </div>
                <div className='about_item'>
                    <span>Electron</span>
                    <span>{appInfo.electron}</span>
                </div>
                <div className='about_item'>
                    <span>Node</span>
                    <span>{appInfo.node}</span>
                </div>
                <div className='about_item'>
                    <span>V8</span>
                    <span>{appInfo.v8}</span>
                </div>
                <div className='about_item'>
                    <span>Platform</span>
                    <span>{appInfo.platform}</span>
                </div>
            </div>
        </div>
    )
}

export default About;