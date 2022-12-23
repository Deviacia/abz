import { useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = (e) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    ...valid,
    isDirty,
  };
};
