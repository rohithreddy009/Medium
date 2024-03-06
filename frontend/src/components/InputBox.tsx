
// export function InputBox({label, placeholder, onChange}) {
//     return <div>
//       <div className="text-sm font-medium text-left py-2">
//         {label}
//       </div>
//       <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
//     </div>
// }



import React from 'react';

// Define a type for the props that InputBox will receive
type InputBoxProps = {
  label: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export function InputBox({ label, placeholder, onChange, type = "text" }: InputBoxProps) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input
        type={type} // Use the type prop here
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}
