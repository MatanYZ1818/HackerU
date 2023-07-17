import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import Gallery from './Gallery';
import Settings from './Settings';
import Users from './Users';
import UsersCards from './UsersCards';
import Clients from './Clients';
import Contact from './Contact';
import ViewMessages from './ViewMessages';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<Users />} />
            <Route path='/usersCards' element={<UsersCards />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Messages' element={<ViewMessages />} />
        </Routes>
    )
}

export default Router;