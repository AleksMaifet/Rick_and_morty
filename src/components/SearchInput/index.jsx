import {memo, useCallback, useState} from 'react';
import Button from "../Button";
import "./index.css";

const SearchInput = memo(({ onSearch }) => {
  const [value, setValue] = useState("");

  const onSearchChange = (e => setValue(e.target.value));
  const onSubmit = useCallback(() => onSearch(value), [value, onSearch]);

  return (
    <div className="SearchInput">
      <input value={value} onChange={onSearchChange} />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
});

export default SearchInput;
