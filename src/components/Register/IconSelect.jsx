import React from 'react';
import Select, { components } from 'react-select';


// Define options with icons
const options = [
  { value: 'shopping', label: 'Shopping & Fashion', image:"../img/bascket.png" },
  { value: 'education', label: 'Education', image: "../img/solar_book-outline.png" },
  { value: 'travel', label: 'Travel & Hotels', image: "../img/material-symbols_travel.png" },
  { value: 'finance', label: 'Finance & Banking', image: "../img/material-symbols-light_finance.png" },
  { value: 'automotive', label: 'Automotive', image: "../img/carbon_ibm-elo-automotive-compliance.png" },
  { value: 'health', label: 'Health & Beauty', image: "../img/solar_health-linear.png" },
  { value: 'arts', label: 'Arts & Entertainment', image: "../img/material-symbols-light_art-track-outline.png" },
  { value: 'government', label: 'Government & Public Services', image: "../img/eos-icons_service-outlined.png" },
  { value: 'food', label: 'Food & Drinks', image: "../img/fluent_service-bell-20-regular.png" },
];

// Custom Option Component
const CustomOption = (props) => {
    return (
      <components.Option {...props}>
         <div className='flex gap-4 items-center'>
        <img
          src={props.data.image}
          alt={props.data.label}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        {props.data.label}
        </div>
      </components.Option>
    );
  };
  
  // Custom SingleValue Component
  const CustomSingleValue = (props) => {
    return (
      <components.SingleValue {...props}>
        <div className='flex gap-4 items-center'>
        <img
          src={props.data.image}
          alt={props.data.label}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        {props.data.label}

        </div>
      </components.SingleValue>
    );
  };
  
  const IconSelect = ({selectedOption , handleChange}) => {
    
  
  
    return (
      <div>
        <Select
          options={options}
          components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
          value={selectedOption}
          onChange={handleChange}
          defaultValue={options?.[0]?.value}
          placeholder="Business Type"
        />
        {/* You can display the selected option or use it elsewhere */}
      </div>
    );
  };

export default IconSelect;