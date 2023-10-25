import React from "react";
import { AutoComplete } from "antd";
const options = [
  {
    value: "Burns Bay Road",
  },
  {
    value: "Downing Street",
  },
  {
    value: "Wall Street",
  },
];
const App = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder="Hôm nay bạn cần gì?"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
    className="searchInput"
  />
);
export default App;
