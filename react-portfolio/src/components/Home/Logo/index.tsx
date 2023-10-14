import './index.scss';
import LogoImage from '../../../assets/images/logo-no-background.png';

export const LogoComponent = () => {

  return (
    <div className='logo-container'>
      <img className='solid-logo' src={LogoImage} alt="A" />
    </div>
  );
};

