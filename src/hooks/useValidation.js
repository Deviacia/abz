import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isValid, setIsValid] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;

        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;

        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;

        case "isEmail":
          const emailReg =
            /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
          emailReg.test(String(value).toLowerCase())
            ? setEmailError(true)
            : setEmailError(false);
          break;

        case "isPhone":
          const phoneReg = /^[\\+]{0,1}380([0-9]{9})$/;
          phoneReg.test(String(value).toLowerCase())
            ? setPhoneError(true)
            : setPhoneError(false);
          break;

        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (
      isEmpty ||
      minLengthError ||
      maxLengthError ||
      emailError ||
      phoneError
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError, phoneError]);

  return {
    isValid,
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    phoneError,
  };
};
