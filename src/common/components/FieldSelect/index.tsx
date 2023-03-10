import { forwardRef, SyntheticEvent} from 'react';

interface SelectProps {
  onChange: (event: SyntheticEvent<HTMLSelectElement>) => void,
  onBlur: (event: SyntheticEvent<HTMLSelectElement>) => void,
  name: string,
  options: { value: string, label: string, readonly?: boolean }[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ onChange, onBlur, name, options }, ref) => (
  <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} className="w-full border rounded-lg p-3 h-11 text-[#ADB5BD] text-xs border-[#CED4DA] transition duration-150 ease-in-out outline-none">
    {options.map((option, index) => (
      <option key={index} value={option.value} >{option.label}</option>
    ))}
  </select>
));

export default Select;
