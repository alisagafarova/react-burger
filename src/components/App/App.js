import '../../styles/main.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ProfilePage from '../../pages/profile/profile';
import MainPage from '../../pages/main/main';
import AppHeader from '../AppHeader/AppHeader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { checkUserAccess } from '../../services/actions/userForm';
import IngredientPage from '../../pages/ingredient/ingredient';
import getItems from '../../services/actions/ingredients';
import Modal from '../Modals/Modal/Modal';
import IngredientDetails from '../Modals/IngredientDetails/IngredientDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const storeSelector = useSelector((state) => state);
  const isAuth = useSelector((store) => store.userReducer.isAuth);
  const resetEmailSent = useSelector((store) => store.userReducer.resetEmailSent);
  const location = useLocation();
  const background = location.state?.locationIngredient || location;
  //sconsole.log(storeSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkUserAccess());
  }, []);

  return (
    <>
      <AppHeader />
      <Routes location={background}>
        <Route path="/" element={<MainPage />} />
        <Route path="ingredients/:id" element={<IngredientPage />} />
        <Route
          path="ingredients/:id"
          element={
            <ProtectedRoute isAuth={!isAuth} to="/">
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute isAuth={!isAuth} to="/">
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute isAuth={!isAuth} to="/">
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <ProtectedRoute isAuth={!isAuth} to="/">
              <ForgotPasswordPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="reset-password"
          element={
            <ProtectedRoute isAuth={resetEmailSent} to="/login">
              <ResetPasswordPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute isAuth={isAuth} to="/login">
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="ingredients/:id" element={<IngredientPage />}/>
      </Routes>
      {location.state?.locationIngredient && (
        <Routes>
          <Route
            path="ingredients/:id"
            element={
              <Modal>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
