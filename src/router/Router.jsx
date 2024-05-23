
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <p>home</p>
            },
            {
                path: '/contact',
                element: <p>contact</p>
            }
        ]
    }
])

export default Router;