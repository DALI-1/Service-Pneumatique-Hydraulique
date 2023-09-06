import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import enflag from '../../assets/images/en_flag.png';
import frflag from '../../assets/images/fr_flag.png';
import tnflag from '../../assets/images/tn_flag.png';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { LightMode, DarkMode } from '../../redux/actions/LightActions';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  IconButton,
} from '@material-tailwind/react';
export default function LanguageList() {
  const LightModeState = useSelector((state) => state.lightMode);
  const [SelectedLanguage, setSelectedLanguage] = React.useState('en');
  //=======Setting Translation-start=================//
  const { t, i18n } = useTranslation();
  const HandleLanguageChange = (SelectedLanguage) => {
    setSelectedLanguage(SelectedLanguage);
    i18n.changeLanguage(SelectedLanguage);
  };
  return (
    <>
      <Menu>
        <MenuHandler>
          <IconButton variant="text" className="rounded-full p-0">
            <img
              src={
                SelectedLanguage == 'en'
                  ? enflag
                  : SelectedLanguage == 'fr'
                  ? frflag
                  : tnflag
              }
              alt={'language'}
              className={`p-0`}
            />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem
            className="flex items-center gap-2"
            onClick={() => HandleLanguageChange('en')}
          >
            <img
              src={enflag}
              alt={'en'}
              className={`h-5 w-5 rounded-full object-cover`}
            />
            <Typography variant="small" className="font-normal">
              English
            </Typography>
          </MenuItem>

          <MenuItem
            className="flex items-center gap-2"
            onClick={() => HandleLanguageChange('fr')}
          >
            <img
              src={frflag}
              alt={'fr'}
              className={`h-5 w-5 rounded-full object-cover`}
            />
            <Typography variant="small" className="font-normal">
              Frencais
            </Typography>
          </MenuItem>

          <MenuItem
            className="flex items-center gap-2"
            onClick={() => HandleLanguageChange('ar')}
          >
            <img
              src={tnflag}
              alt={'ar'}
              className={`h-5 w-5 rounded-full object-cover`}
            />
            <Typography variant="small" className="font-normal">
              Arab
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
