import React, { useState, useContext, useEffect } from 'react';
import OnOutsiceClick from 'react-outclick';
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '~/api/contexts/authContext';
import { ButtonTrinus } from '~/components/ButtonTrinus';
import {
  LoginWrapper,
  FormWrapper,
  FormImgWrapper,
  FormImgTheme,
  LabelLogin,
  DivMarginTop,
  DivImg,
  TripleDotsOption,
  TripleDotsIcon,
  FormWrapperFather,
  Ballon,
  DivMicrosoft,
  LabelStrong,
  LabelOption,
  FooterLogin,
  ForgotPass,
  DivLogo,
} from './styles';
import Logo from '~/assets/images/logo-trinus.svg';
import ImageTheme from '~/assets/images/bg.svg';
import { Input } from '~/components/Input';
import { Icon } from '~/components/Icon';
import { iconList, listImages } from '~/components/Icon/icon-list';
import { TechFeedbackForm } from '~/components/TechFeedbackForm';
import { LoginMicrosoft } from '~/components/Microsoft';
import { authenticate } from '~/api/service/auth';
import { Loading } from '~/components/Loading';
import { themes } from '~/themes';
import { Alert } from '~/components/Alert';
import { useFeedbackContext } from '~/api/contexts/feedbackContext';

export const Login = () => {
  const theme = useTheme();
  const history = useHistory();
  const [user, setUser] = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [errorAuthMsg, setErrorAuthMsg] = useState();
  const [password, setPassword] = useState();
  const [hide, setHide] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openOrClose, setOpenOrClose] = useState(false);
  const isntAuth = true;
  const {
    isSuccess,
    isError,
    feedbackSucess,
    setFeedbackSucess,
    feedbackError,
    setFeedbackError,
    data,
  } = useFeedbackContext();
  const [alertMsg, setAlertMsg] = useState(false);
  const [msg, setMsg] = useState('');
  const [typeAlertMsg, setTypeAlertMsg] = useState('sucess');

  useEffect(() => {
    setAlertMsg(false);
    if (data && feedbackSucess && !alertMsg) {
      setAlertMsg(true);
      setMsg('Feedback Enviado!');
      setTypeAlertMsg('sucess');
      setFeedbackSucess(false);
    }
  }, [isSuccess]);

  useEffect(() => {
    setAlertMsg(false);
    if (data && feedbackError && !alertMsg) {
      setAlertMsg(true);
      setMsg('Algum campo foi preenchido errado!');
      setTypeAlertMsg('danger');
      setFeedbackError(false);
    }
  }, [isError]);

  const formTech = () => {
    setOpenOrClose(oldState => !oldState);
  };

  function passwordState(evt) {
    const currentPassword = evt.target.value;
    setPassword(currentPassword);
  }
  function emailState(evt) {
    const currentEmail = evt.target.value;
    setEmail(currentEmail);
  }
  const userGetted = {
    email,
    password,
    isMicrosoftLogin: false,
  };
  const redirectUserLogged = () => {
    history.push('/app');
  };
  async function loginSubmit(evt) {
    evt.preventDefault();

    if (email === undefined || password === undefined) {
      setErrorAuthMsg('Email ou senha invalidos');
      return;
    }

    setIsLoading(state => !state);
    const result = await authenticate(userGetted);
    if (result.status === 200) {
      const auth = {
        user: result.data.user,
        token: result.data.token,
      };
      if (user) {
        setUser(prevState => ({ ...prevState, auth }));
        redirectUserLogged();
      }
    } else {
      setIsLoading(state => !state);
      setErrorAuthMsg('Email ou senha invalidos');
      localStorage.clear();
      sessionStorage.clear();
    }
  }
  const handleOutSide = async (evt) => {
    if (evt) {
      evt.preventDefault();
    }
    setHide(false);
  };
  const handleselect = async (evt) => {
    if (evt === 1) {
      setIsAdmin(true);
    }
    if (evt === 2) {
      setIsAdmin(false);
    }
    setHide(false);
  };

  return (
    <>
      {alertMsg
        && (
          <Alert setFlagFalse={() => setAlertMsg(false)} timeOpen="1000" type={typeAlertMsg}>
            {msg}
          </Alert>
        )}
      <LoginWrapper>
        <OnOutsiceClick onOutsideClick={() => setOpenOrClose(false)}>
          <FormWrapperFather>
            <TripleDotsIcon>
              <Icon
                name={iconList.trnMoreVerticalLogin}
                size={25}
                color={themes.color.blueTertiaryTrinus}
                onClick={() => setHide(!hide)}
                display="inline"
              />
              {hide
                && (
                  <OnOutsiceClick onOutsideClick={handleOutSide}>
                    <TripleDotsOption>
                      <LabelOption
                        onKeyDown={() => handleselect(1)}
                        onClick={() => handleselect(1)}
                      >
                        <Icon
                          name={iconList.lock}
                          size={14}
                          color={themes.color.blueSecundaryTrinus}
                        />
                        <span
                          tabIndex={0}
                          role="button"
                        >
                          Administrador
                        </span>
                      </LabelOption>
                      <LabelOption
                        onKeyDown={() => handleselect(2)}
                        onClick={() => handleselect(2)}
                      >
                        <Icon
                          name={iconList.user}
                          size={14}
                          color={themes.color.blueSecundaryTrinus}
                        />
                        <span
                          tabIndex={0}
                          role="button"
                        >
                          Colaborador
                        </span>
                      </LabelOption>
                    </TripleDotsOption>
                  </OnOutsiceClick>
                )}
            </TripleDotsIcon>
            <DivLogo><FormImgWrapper src={Logo} /></DivLogo>
            <FormWrapper onSubmit={() => loginSubmit}>
              {!isAdmin
                && (
                  <>
                    <DivMarginTop center>
                      <LabelStrong>Fazer login</LabelStrong>
                      <LabelLogin>ir para Workspace</LabelLogin>
                    </DivMarginTop>
                    <DivMicrosoft center onClick={() => setAlertMsg(false)}>
                      <LoginMicrosoft />
                    </DivMicrosoft>

                    <Ballon id="ballon" onClick={() => formTech()}>
                      <Icon
                        name={listImages.techtech}
                        size={100}
                        height={100}
                        color="none"
                      />
                      <Icon
                        name={listImages.ballonChat}
                        size={150}
                        height={100}
                        color="none"
                      />
                    </Ballon>
                  </>
                )}

              {isAdmin
                && (
                  <>
                    <DivMarginTop>
                      <LabelLogin htmlFor="Login"><b>Login</b></LabelLogin>
                      <div style={{ marginTop: '8px' }}>
                        <Input
                          onChange={() => emailState}
                          id="email"
                          errorMsg={errorAuthMsg}
                          name="E-mail"
                          placeholder="E-mail"
                          placeholderOpacity={theme.opacity.value3}
                          type="email"
                        />
                      </div>
                    </DivMarginTop>
                    <DivMarginTop marginTop="20px">
                      <LabelLogin htmlFor="Password"><b>Senha</b></LabelLogin>
                      <div style={{ marginTop: '8px' }}>
                        <Input
                          onChange={() => passwordState}
                          id="password"
                          errorMsg={errorAuthMsg}
                          name="Digite sua senha de acesso"
                          placeholder="Digite sua senha de acesso"
                          placeholderOpacity={theme.opacity.value3}
                          type="password"
                        />
                      </div>
                    </DivMarginTop>
                    <DivMarginTop marginTop="20px">
                      <ButtonTrinus type="submit" theme="login" align="center">
                        {isLoading ? (
                          <Loading size={30} />
                        )
                          : ('Entrar')}
                      </ButtonTrinus>
                      <ForgotPass>Esqueceu a senha?</ForgotPass>
                    </DivMarginTop>
                  </>
                )}
            </FormWrapper>
            <FooterLogin>
              <span>Política de privacidade</span>
              <span>Notas de atualização</span>
            </FooterLogin>
          </FormWrapperFather>
          <TechFeedbackForm
            active={openOrClose}
            formTech={() => formTech()}
            isntAuth={isntAuth}
          />
        </OnOutsiceClick>
      </LoginWrapper>
      <DivImg>
        <FormImgTheme alt="icon" src={ImageTheme} />
      </DivImg>
    </>
  );
};
