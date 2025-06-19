import ListItem from './ListItem.tsx';

const listInfo = [
  { to: '/', title: 'Все котики' },
  { to: '/favorites', title: 'Любимые котики' }
];

const List = () => {
  return (
    <ul className={'flex justify-center max-md:flex-wrap md:justify-start'}>
      {listInfo.map(item => (
        <ListItem to={item.to} title={item.title} key={item.title} />
      ))}
    </ul>
  );
};

export default List;
