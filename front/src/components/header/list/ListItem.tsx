import { Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';

interface ListItemProps {
  to: string
  title: string
}

const ListItem = ({to, title}: ListItemProps) => {
  const {pathname} = useLocation()
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === to) setIsActive(true)
    else setIsActive(false)
  }, [pathname]);

  return (
    <li>
      <Link className={`inline-block px-5 py-[23px] duration-400 tracking-wide ${isActive ? 'bg-primary-600 text-white-400' : 'bg-primary-500 text-white-400/70'}`} to={to}>{title}</Link>
    </li>
  );
};

export default ListItem;