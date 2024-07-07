import { NavLink } from 'react-router-dom';
import { TSidebarItem, TUserPath } from '../../types';

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((elem) => ({
          key: elem.name,
          label: <NavLink to={`/${role}/${elem.path}`}>{elem.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
