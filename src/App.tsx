// src/App.tsx
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import UserListFromServer from './components/UserListFromServer';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <h1 className="title">React TypeScript Forms</h1>
            <div className="forms">
                <ControlledForm />
                <UncontrolledForm />
            </div>
            <UserListFromServer />
        </div>
    );
};

export default App;
