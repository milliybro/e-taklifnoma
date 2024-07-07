export const reactSelectConfigurationDate = {
  isSearchable: false,
  isMulti: false,
  styles: {
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      color: isSelected || isFocused ? "#fff" : "#fff",
      backgroundColor: "#092468!important",
      width: "100%",
      cursor: "pointer",
      fontSize: "16px",
      "@media (max-width: 768px)": {
        ...provided["@media (max-width: 768px)"],
        fontSize: "16px",
      },
      ":hover": {
        backgroundColor: "#3164F7!important",
      },
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    control: (provided, state) => ({
      ...provided,
      outline: "none",
      borderRadius: "12px",
      border:
        state?.isSelected || state?.isFocused
          ? "1px solid #3164F7!important"
          : "1px solid #FFFFFF4D",
      cursor: "pointer",
      color: "#fff",
      height: "54",
      margin: "0",
      padding: "10px",
      boxShadow: "",
      backgroundColor: "#2575FC1A!important",
      "@media (max-width: 768px)": {
        ...provided["@media (max-width: 768px)"],
        fontSize: "12px",
      },
      ":hover": {
        border: "1px solid #3164F7",
      },
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    menu: (provided) => ({
      ...provided,
      margin: 0,
      width: "100%",
      border: "0!important",
      borderRadius: "12px",
      boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.08)",
      backgroundColor: "#092468!important",
      overflow: "hidden",
      top: "60px",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      height: "auto",
      zIndex: 880,
      "::-webkit-scrollbar": {
        width: "4px",
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "#eee",
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#2575FC",
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        // background: '#555',
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    indicatorsContainer: (provided, { isFocused }) => ({
      ...provided,
      height: "100%",
      paddingRight: "0px",
    }),
    dropdownIndicator: (provided, { isFocused }) => ({
      ...provided,
      color: "#fff",
      paddingRight: isFocused ? "8px" : "0px",
      paddingLeft: isFocused ? "0px" : "8px",
      transform: isFocused ? "rotate(180deg)" : "",
      ":hover": {},
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0",
      fontWeight: "600",
      alignContent: "center",
      fontSize: "16px",
      "@media (max-width: 768px)": {
        ...provided["@media (max-width: 768px)"],
        fontSize: "16px",
      },
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: "#fff",
      width: "100%",
      cursor: "pointer",
      textAlign: "left",
      fontSize: "16px",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "16px",
      color: "#646A83!important",
    }),
  },
};
