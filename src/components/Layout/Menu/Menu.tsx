import React from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { frontendRoutes } from '../../../consts';
const cx = classNames.bind(styles);

const menuItems = [
  {
    title: 'Главная',
    link: frontendRoutes.main,
    icon: <HomeIcon />,
  },
  {
    title: 'Занятия',
    link: frontendRoutes.lessons,
    icon: <SchoolIcon />,
  },
  {
    title: 'Коллектив',
    link: frontendRoutes.members,
    icon: <Diversity3Icon />,
  },
  {
    title: 'Документы',
    link: frontendRoutes.docs,
    icon: <DocumentScannerIcon />,
  },
];

export const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.menu}>
      <img src='/logo_big.png' alt='logo' className={styles.logo} />
      <div className={styles.items}>
        {menuItems.map((item) => (
          <div
            className={cx('item', {
              item_active: new RegExp(item.link).test(location.pathname),
            })}
            onClick={() => navigate(item.link)}
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
