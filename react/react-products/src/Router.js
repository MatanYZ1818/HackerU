import { Route, Routes } from 'react-router-dom';

export default function Router(){
    return(
        <Routes>
            <Router path="/" element={<Home />} />
        </Routes>
    )
}