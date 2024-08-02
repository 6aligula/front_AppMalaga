import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import {
  HomeScreen,
  LoginScreen, 
  RegisterScreen, 
  ProfileScreen, 
  ForgotPasswordScreen, 
  ResetPasswordRequestSentScreen, 
  ResetPasswordScreen, 
  ResetPasswordResultScreen,
  ContactScreen,
  DatosComunidadScreen,
  DatosAguaScreen,
  ParcelasScreen,
  CultivosScreen,
  DocumentosScreen,
  ConsumosScreen,
  IncidenciaScreen

} from './screens'
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
            <Route path='/DatosComunidad' element={<DatosComunidadScreen />} />
            <Route path='/DatosAgua' element={<DatosAguaScreen />} />
            <Route path='/parcelario' element={<ParcelasScreen />} />
            <Route path='/cultivos' element={<CultivosScreen />} />
            <Route path='/registro-documentos' element={<DocumentosScreen />} />
            <Route path='/peticion-consumos' element={<ConsumosScreen />} />
            <Route path='/incidencias-mantenimiento' element={<IncidenciaScreen />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
