import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { EventProvider } from './contexts/EventContext';
import PrivateRoute from './components/common/PrivateRoute';

import Catalog from "./components/Catalog/Catalog";
import CreateEvent from "./components/Create/CreateEvent";
import Details from "./components/Details/Details";
import EditEvent from "./components/Edit/EditEvent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from './components/logout/Logout';
import Error from './components/errorPage/Error';


function App() {
    return (
        <AuthProvider>
            <>
                <Header />
                <EventProvider >

                    <Routes>
                        <Route path='/' element={<Home />} />

                        <Route element={<PrivateRoute />} >
                            <Route path='/create' element={<CreateEvent />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/events/:eventId/edit' element={<EditEvent />} />
                        </Route>

                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/details/:eventId' element={<Details />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/*' element={<Error />} />
                    </Routes>

                </EventProvider>
                <Footer />
            </>
        </AuthProvider>
    );
}

export default App;
