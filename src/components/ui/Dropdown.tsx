'use client';
import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  rightImage?: {
    src: string;
    width: number;
    height: number;
  };
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select option",
  value,
  onChange,
  className = '',
  disabled = false,
  rightImage
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  const selectedOption = options.find(option => option.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full
          bg-dropdown-1
          border border-white
          rounded-[10px]
          pt-[12px] pr-[44px] pb-[12px] pl-[20px]
          text-[20px] font-inter font-normal leading-[26px] text-left text-global-1
          shadow-[1px_1px_25px_#d4d4ff7f]
          flex items-center justify-between
          gap-[10px]
          transition-all duration-200
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-opacity-90'}
          ${isOpen ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">{displayText}</span>
        {rightImage && (
          <img 
            src={rightImage.src} 
            alt="" 
            className={`w-[${rightImage.width}px] h-[${rightImage.height}px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-[10px] shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`
                w-full px-4 py-3 text-left text-[16px] font-inter
                hover:bg-gray-50 active:bg-gray-100
                transition-colors duration-150
                ${selectedValue === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-900'}
                first:rounded-t-[10px] last:rounded-b-[10px]
              `}
              role="option"
              aria-selected={selectedValue === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;