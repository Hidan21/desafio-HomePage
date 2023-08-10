import logo from '../assets/images/logo.svg';
import NavBar from './NavBar';
const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>
      <img src={logo} alt='Logo' />
      <NavBar />
    </header>
  );
};

export default Header;
