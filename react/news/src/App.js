import './App.css';
import Router from './Router';

export const TOKEN="d2960fec-3431-11ee-b3e9-14dda9d4a5f0"

function App() {
    return (
        <div className="App">
            <h1>אתר חדשות שלי</h1>

            <Router />
        </div>
    );
}

export default App;