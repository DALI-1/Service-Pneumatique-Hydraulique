import React from 'react';


import Multiselect from 'multiselect-react-dropdown';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { LightMode } from '../../redux/actions/LightActions';
import './MultiSelect.css';
import PropTypes from "prop-types"
MultiSelect.propTypes={
  Data:PropTypes.array.isRequired,
  DataLabelName:PropTypes.string.isRequired,
  SelectData:PropTypes.object.isRequired
}
export default function MultiSelect({ Data, DataLabelName, SelectData }) {
  const LightModeState = useSelector((state) => state.lightMode);
  const OnSubCategorySelect = (Selected) => {

    SelectData.current = Selected;
  };
  const OnSubCategoryRemove = (Selected) => {
    SelectData.current = Selected;

  };

  const setPlaceholderStyle = (placeholderColor) => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
          .multiSelectContainer input::placeholder {
            color: ${placeholderColor} !important;
          }
        `;
    document.head.appendChild(styleTag);
  };

  if (LightModeState == LightMode().type) {
    setPlaceholderStyle('black');
  } else {
    setPlaceholderStyle('white');
  }
  return (
    <div className=" relative w-full">
      <Multiselect
        placeholder="Product Sub-Categories"
        style={{
          multiselectContainer: {
            width: '100%',
          },
          searchBox: {
            borderColor: '#b0bec5',
            fontSize: '14px',
            minHeight: '50px',
          },
          inputField: {},
          chips: {
            background: '#e53935',
          },
          option: {
            color: 'inherit',
          },
          optionContainer: {
            background: `${
              LightModeState == LightMode().type
                ? 'white'
                : 'rgba(51, 51, 51, 1)'
            }`,
          },
        }}
        options={Data} // Options to display in the dropdown
        selectedValues={SelectData.current} // Preselected value to persist in dropdown
        onSelect={OnSubCategorySelect} // Function will trigger on select event
        onRemove={OnSubCategoryRemove} // Function will trigger on remove event
        displayValue={DataLabelName} // Property name to display in the dropdown options
      />

      <i className=" absolute top-4 right-3  text-blue-gray-500 fa-solid fa-arrow-down-short-wide"></i>
    </div>
  );
}
MultiSelect.propTypes = {
  Data: PropTypes.array.isRequired,
  DataLabelName: PropTypes.string.isRequired,
  SelectData: PropTypes.any,
};
