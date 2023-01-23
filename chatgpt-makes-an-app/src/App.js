import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

const Home = React.lazy(() => import('./components/Home'));
const Login = React.lazy(() => import('./components/Login'));

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={<>Loading..</>}>
        <Routes>
          <Route index exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
