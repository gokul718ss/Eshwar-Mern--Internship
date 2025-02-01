import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import JournalPage from './pages/JournalPage';


import './styles/global.css';

// Error Boundary component to catch errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by Error Boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-message">Something went wrong!</div>;
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div>
         <map/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/journal" element={<JournalPage />} />
           
          </Routes>
         
   
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
