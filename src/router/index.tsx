import { createHashRouter } from "react-router-dom";
import Main from "_/page/main";
import About from "_/page/about";
import Datasource from "_/page/datasource";
const router = createHashRouter(
    [
        {
            path: '/',
            element: <Main />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/datasource',
            element: <Datasource />
        }
    ]
);

export default router;