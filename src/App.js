import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordRequestSentScreen from './screens/ResetPasswordRequestSentScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import ResetPasswordResultScreen from './screens/ResetPasswordResultScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className='flex-grow-1 py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/ForgotPasswordScreen' element={<ForgotPasswordScreen />} />
            <Route path='/ResetPasswordRequestSentScreen' element={<ResetPasswordRequestSentScreen />} />
            <Route path='/reset-password/:uid/:token' element={<ResetPasswordScreen />} />
            <Route path='/ResetPasswordResultScreen' element={<ResetPasswordResultScreen />} />
            <Route path='/ContactScreen' element={<ContactScreen />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
