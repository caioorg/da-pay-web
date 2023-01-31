import { forwardRef } from 'react';

interface Props {
  type: string,
  label: string,
  error?: string
}
export type Ref = HTMLInputElement;

const Field = forwardRef<Ref, Props>(({ type, label, error, ...rest }, ref) => {
  return (
    <div className="mb-3 w-full">
      <input
        placeholder={label}
        type={type}
        ref={ref}
        className="w-full border rounded-lg p-3 text-[#ADB5BD] text-xs border-[#CED4DA] transition duration-150 ease-in-out focus:border-[#35025a]"
        {...rest}
      />
      {error && <p className='text-xs font-semibold mt-1 text-red-700'>{error}</p>}
    </div>
  )
})

export default Field;
