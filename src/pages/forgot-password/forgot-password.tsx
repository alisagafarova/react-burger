import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from "../../services/hooks";
import { Link, useNavigate } from "react-router-dom";
import styles from './forgot-password.module.css';
import { useState } from 'react';
import { forgotPassword } from '../../services/actions/userForm';
import { ChangeEvent, FormEvent } from 'react';

export const ForgotPassword = (): JSX.Element => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [forgotPasswordForm, setforgotPasswordFormValue] = useState({ email: '' });

  const onForgotPasswordFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setforgotPasswordFormValue({ ...forgotPasswordForm, [e.target.name]: e.target.value });
  };

  function forgotPasswordFormSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(forgotPassword(forgotPasswordForm, () => navigate('/reset-password')));
  }

  return (
    <>
      <main className={styles.forgot__main}>
        <div className={styles.forgot__content}>
          <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
          <form className={styles.forgot_form} onSubmit={forgotPasswordFormSubmit}>
            <EmailInput
              placeholder="Укажите e-mail"
              name="email"
              onChange={onForgotPasswordFormChange}
              value={forgotPasswordForm.email}
            />
            <div className={styles.forgot_button}>
              <Button htmlType="submit" type="primary" size="medium">
                Восстановить
              </Button>
            </div>
          </form>
          <div className={`mt-20 ${styles.forgot_links}`}>
            <p className="text text_type_main-default">
              Вспомнили пароль?
              <Link to="/login" className="text text_type_main-default ml-1">
                Войти
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
