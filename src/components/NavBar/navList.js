import NavListMenu from './navListMenu';
import React from 'react';
import { Typography, MenuItem } from '@material-tailwind/react';
import {
  HomeIcon,
  PhoneIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { LightMode } from '../../redux/actions/LightActions';

import Translate from '../../utils/Translation';
const navListItems = [
  {
    value:"Home",
    label: <Translate TranslationPath="navbar.Menus.Home" />,
    icon: HomeIcon,
    route: '/',
  },
  {
    value:"Contact",
    label: <Translate TranslationPath="navbar.Menus.Contact" />,
    icon: PhoneIcon,
    route: '/Contact',
  },
  {
    value:"Login",
    label: <Translate TranslationPath="navbar.Menus.Login" />,
    icon: ArrowRightOnRectangleIcon,
    route: '/login',
  },
  {
    value:"Register",
    label: <Translate TranslationPath="navbar.Menus.Register" />,
    icon: ArrowLeftOnRectangleIcon,
    route: '/register',
  },
];

export default function NavList() {
  const LightModeState = useSelector((state) => state.lightMode);
  const isLoggedState =useSelector((state)=>state.isLogged)

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, route,value }, key) => {

        if(value==="Register" ||value==="Login")
        {
          if(isLoggedState)
          {
            return null
          }

        }
          return (
            <Typography
              key={"NAV"+key}
              as="a"
              href={route}
              variant="small"
              className={`font-normal  ${
                LightModeState == LightMode().type
                  ? 'tc-whiteTheme_T1'
                  : 'tc-darkTheme_T1'
              }`}
            >
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
                {React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
                {label}
              </MenuItem>
            </Typography>
          );
        
      })}
      <NavListMenu />
    </ul>
  );
}
