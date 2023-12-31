
import React, { useEffect, useRef, useState } from "react";

import "./DozeeSelect.css";
import { SelectableOptions, SelectProps } from "./DozeeSelect.types";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
    </svg>
  );
};

const DozeeSelect = ({
  placeHolder,
  options,
  isMulti,
  isSearchable,
  _default,
  onChange
}: SelectProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<null | SelectableOptions | SelectableOptions[]>(isMulti ? [] : null);
  const [searchValue, setSearchValue] = useState<string>("");
  const searchRef = useRef<null | HTMLInputElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };


  const getDisplay = () => {
    if (!selectedValue  || (Array.isArray(selectedValue) && selectedValue.length === 0)) {
      return placeHolder;
    } 
    if (isMulti && Array.isArray(selectedValue)) {
      return (
        <div className="dropdown-tags">
          {selectedValue.map((option) => (
            <div key={option.value} className="dropdown-tag-item">
              {option.label}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="dropdown-tag-close"
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
      );
    }
    if (!isMulti && !Array.isArray(selectedValue)) {
      return selectedValue.label;
    }
    return placeHolder;

  };

  const removeOption = (option) => {
    if (selectedValue && Array.isArray(selectedValue)) {
      return selectedValue.filter((o) => o.value !== option.value);
    } else {
      return null
    }
  };

  const onTagRemove = (e, option : SelectableOptions) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const onItemClick = (option : SelectableOptions) => {
    let newValue : SelectableOptions | SelectableOptions[] | null;
    if (isMulti && Array.isArray(selectedValue)) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option : SelectableOptions) => {
    if (isMulti && Array.isArray(selectedValue)) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }
    if (!isMulti && !Array.isArray(selectedValue)) {
      return selectedValue.value === option.value;
    }
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) => {
        if (typeof option.label === "string"){
          return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        }
        else {
          return option.label.toString().indexOf(searchValue) >= 0
        }
      }

    );
  };

  return (
    <div className="dropdown-container">
      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {isSearchable && (
            <div className="search-box">
              <input onChange={onSearch} value={searchValue} ref={searchRef} />
            </div>
          )}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DozeeSelect;
