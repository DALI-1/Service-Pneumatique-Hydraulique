import React from 'react';
import { useCountries } from 'use-react-countries';
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { LightMode } from '../../redux/actions/LightActions';
import PropTypes from "prop-types"
PhoneInput.propTypes={
  internationalDialRef:PropTypes.object.isRequired,
  phoneNumberRef:PropTypes.object.isRequired
}
export default function PhoneInput({ internationalDialRef,phoneNumberRef }) {
  const LightModeState = useSelector((state) => state.lightMode);
  const { countries } = useCountries();

  // Find the index of Tunisia in the countries array
  const tunisiaIndex = countries.findIndex(
    (country) => country.name === 'Tunisia',
  );

  // Initialize the country state with the index of Tunisia
  const [country, setCountry] = React.useState(tunisiaIndex);

  const { name, flags, countryCallingCode } = countries[country];

  React.useEffect(()=>{
const callingCode=parseInt(countries[country].countryCallingCode.slice(1),10)
    internationalDialRef.current=callingCode
  },[country])
  return (
    <div className="relative flex w-full">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <img loading="lazy"
              src={flags.svg}
              alt={name}
              className="h-4 w-4 rounded-full object-cover"
            />
            {countryCallingCode}
          </Button>
        </MenuHandler>
        <MenuList
          className={`${
            LightModeState == LightMode().type
              ? 'bg-whiteTheme_T2'
              : 'bg-darkTheme_T2'
          } max-h-[20rem] max-w-[18rem]`}
        >
          {countries.map(({ name, flags, countryCallingCode }, index) => {
            return (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => setCountry(index)}
              >
                <img loading="lazy"
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
      
        inputRef={phoneNumberRef}
        type="number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder={""}
        label={""}
        variant='outlined'
        className={`rounded-l-none !border-t-blue-gray-200 focus:!border-t-blue-500`}
        labelProps={{
          className: `before:content-none after:content-none`,
        }}
        containerProps={{
          style: {
            maxWidth: '100%',
            minWidth: '10px',
          },
        }}
      />
    </div>
  );
}

