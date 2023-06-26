import 'bootstrap/dist/css/bootstrap.min.css';
import React, { lazy, } from 'react';
import AppLayout from "../../HOC/AppLayout";
import './App.css'
import { NextUIProvider } from '@nextui-org/react';
import theme from '../../theme/CustomizeTheme'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Home = lazy(() => import('../Home/index'));
const App = () => {
return (
  <NextUIProvider theme={theme}>
        <AppLayout>
            <Home/>
        </AppLayout>

    </NextUIProvider>
)

}

export default App;