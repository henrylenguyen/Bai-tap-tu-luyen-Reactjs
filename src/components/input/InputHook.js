import React from 'react';
import { useController } from 'react-hook-form';

const InputHook = ({control,...props}) => {
  const {field} = useController({
    control,
    name: props.name,
    defaultValue: ""
  })
  // console.log("field", field);
  return (
    <input className="p-7 boder border-gray-100 rounded-xl outline-none" {...field} {...props}></input>
  );
};

export default InputHook;