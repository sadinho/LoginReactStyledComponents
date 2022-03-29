import styled from 'styled-components';
import img from '~/assets/images/background.png';
import { themes } from '~/themes';

export const LoginWrapper = styled.div`
   display: flex;
   align-items: ${themes.align.center};
   justify-content: ${themes.align.center};
    
   height: 100vh;
   width: 50vw;
   background: ${themes.color.whiteTrinus};
   @media only screen and (max-width:969px){
      width: 100%;
      background-image: url(${img});
      background-size: cover;
   }
`;

export const FormWrapperFather = styled.div`
   display: flex;
   flex-direction: column;
   align-items: ${themes.align.center};
   justify-content: ${themes.align.center};

   width: 16vw;
   height: auto;
   color: ${themes.color.blueSecundaryTrinus};
   background: ${themes.color.whiteTrinus};
   border: 1px solid ${themes.color.blueTertiary1};
   border-radius: 10px;

   @media only screen and (max-width:1920px){
      width: 28vw;
   }
   @media only screen and (max-width:969px){
      width: 50vw;
      height: 80vh;
      position: relative;
   }
`;

export const TripleDotsIcon = styled.div`
   display: flex;
   align-items: ${themes.align.center};
   justify-content: ${themes.align.center};
   align-self: flex-end;

   position: relative;
   margin: 15px 15px 0 0;
   padding: 4px;
   cursor: pointer;
   border: 1px solid ${themes.color.blueTertiary1};
   border-radius: 4px;

   @media only screen and (max-width:969px){
      margin: 10px 10px 0 0;
      position: absolute;
      top: 5px;
      right: 5px;
      svg{
         position: relative;
      }
   };
`;

export const TripleDotsOption = styled.div`
   display: flex;
   flex-direction: column;
   align-items: ${themes.align.center};
   justify-content: ${themes.align.spaceBetween};

   position: absolute;
   left: 0;
   top: 100%;
   width: 157px;
   height: 50px;

   padding: 8px 16px;
   background: ${themes.color.whiteTrinus};
   border-radius: 4px;
   border: 1px solid ${themes.color.blueSecundaryTrinus};
   box-shadow: 0px 4px 6px ${themes.color.shadow};
   z-index: 101;
`;

export const LabelOption = styled.span`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   font-size: ${themes.fontSizeTrinus.size16};
   color: ${themes.color.grey2};
   cursor: pointer;

   span{
      margin-left: 12px;
   };
`;

export const DivLogo = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   margin-bottom: 30px;
   @media only screen and (max-width:969px){
      margin-bottom: 15px;
   };
`;

export const FormImgWrapper = styled.img`
   width: 50%;
   @media only screen and (max-width:969px){
      width: 40%;
      margin-top: 25px;
   };
`;

export const FormWrapper = styled.form`
   display: flex;
   flex-direction: column;

   width: 80%;
   color: ${themes.color.blueSecundaryTrinus};
   background:  ${themes.color.whiteTrinus};
`;

export const DivMarginTop = styled.div`
   display: flex;
   flex-direction: ${props => (props.center != null ? 'column' : 'row')};
   width: 100%;
   margin-top: ${props => (props.marginTop != null ? props.marginTop : '0px')};
   display: ${props => (props.center != null ? 'flex' : 'block')};
   align-items: ${props => (props.center != null ? 'center' : '')};
   justify-content: ${props => (props.center != null ? 'center' : '')};
`;

export const Ballon = styled.div`
   margin-top: 25px;
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   justify-content: center;
   cursor: pointer;
`;

export const ForgotPass = styled.span`
   display:flex;
   right: 0px;
   justify-content: center;
   margin-top: 8px;
   cursor: pointer;
   position: relative;
   color: ${themes.color.cyanTrinus};
   font-size: ${themes.fontSizeTrinus.size14};
   text-decoration-line: underline;
`;

export const LabelStrong = styled.span`
   font-size: ${themes.fontSizeTrinus.size12};
   color: ${themes.color.blackTrinus};
   font-weight: normal;
`;

export const FormRecover = styled.form`
   margin-top: 30%;
   margin-left: 25%;
   color: ${themes.color.blueSecundaryTrinus};
   max-width: 350px;
   opacity: 0.7;
   background: red;
`;
export const FormRecoverTitle = styled.div`
   color: ${themes.color.blueSecundaryTrinus};
   font-size: ${themes.fontSizeTrinus.size20};
   font-weight: bold;
`;
export const FormInput = styled.input`
    border: 1px solid ${themes.color.blueTertiary2};
    border-radius: 4px;
`;
export const FormLink = styled.a`
    color: ${props => props.theme.color.cyanTrinus};
    font-size: ${themes.fontSizeTrinus.size12};
    font-weight: bold;
    font-family: 'Asap';
    cursor: pointer;
    margin-top:15px;
`;
export const LabelLogin = styled.span`
   margin-top: 5px;
   color: #55678B;
   font: normal normal ${themes.fontSizeTrinus.size12}/${themes.fontLineHeight.lineHeight19} ${themes.tipography.fontAsap};
`;

export const DivMicrosoft = styled.div`
   margin-top: 25px;
   display: ${props => (props.center != null ? 'flex' : 'block')};
   align-items: ${props => (props.center != null ? 'center' : '')};
   justify-content: ${props => (props.center != null ? 'center' : '')};

   @media only screen and (max-width:969px){
      margin-top: 10px;
   };
`;

export const FooterLogin = styled.div`
   display: flex;
   justify-content: space-around;

   width: 100%;
   padding: 20px 0;
   color: ${themes.color.cyanTrinus};
   font-size: ${themes.fontSizeTrinus.size12};
   text-decoration-line: underline;
   margin-bottom: 2%;
   margin-top: 5px;
   margin-left: 20px;
   margin-right: 20px;
   span{
      cursor: pointer;
   }
   @media only screen and (max-width:969px){
      font-size: ${themes.fontSizeTrinus.size12};
      padding: 20px 0;
   }
`;

export const DivImg = styled.div`
   width: 50vw;
   display: inline-block;
   @media only screen and (max-width:969px){
      display:none;
   }
`;

export const FormImgTheme = styled.img`
   height: 100vh;
   width: 50vw;
   object-fit: cover;
`;
