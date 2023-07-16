import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import Gallery from './Gallery';
import Settings from './Settings';
import Users from './Users';
import UsersCards from './UsersCards';
import Clients from './Clients';

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
        </Routes>
    )
}

export default Router;