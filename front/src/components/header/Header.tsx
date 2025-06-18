import MainContainer from '../layouts/MainContainer.tsx';
import List from './list/List.tsx';

const Header = () => {
  return (
    <header className={'bg-primary-500'}>
      <MainContainer>
        <nav>
          <List/>
        </nav>
      </MainContainer>
    </header>
  );
};

export default Header;