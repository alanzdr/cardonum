import React, {
  useState,
  useEffect,
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useImperativeHandle,
} from 'react';

import { maskValue, InputMaskType } from 'utils/mask';
import classNames from 'classnames';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string,
  mask?: InputMaskType,
  notifyChange?: (value: string) => void
  hideOptionalLabel?: boolean
}

export interface InputRef {
  value: string,
  setValue: (value: string) => void,
  setError: (error: string) => void,
  input?: HTMLTextAreaElement
}

const Input: React.ForwardRefRenderFunction<InputRef, Props> = ({
  label,
  required = true,
  mask,
  children,
  notifyChange,
  hideOptionalLabel,
  className,
  ...rest
}, ref) => {
  const [input, setInput] = useState<HTMLTextAreaElement>();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const name = useMemo(() => {
    if (rest.name) {
      return rest.name;
    }
    return label.toLocaleLowerCase().replace(/ /g, '-');
  }, [label, rest.name]);

  const onRefSetValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  const onRefSetError = useCallback((error: string) => {
    setError(error);
    if (error) {
      input?.focus();
    }
  }, [input]);

  useImperativeHandle(
      ref,
      () => ({
        value,
        setValue: onRefSetValue,
        setError: onRefSetError,
        input,
      }),
      [value, input, onRefSetValue, onRefSetError],
  );

  const inputRef = useCallback(
      (item: HTMLTextAreaElement) => {
        setInput(item);
      },
      [],
  );

  useEffect(() => {
    if (!input || mask === undefined) return;
    const onBlur = () => {
      input.value = maskValue(mask, input.value);
    };
    input.addEventListener('blur', onBlur);
    return () => {
      input.removeEventListener('blur', onBlur);
    };
  }, [input, mask]);

  const onChangeValue = useCallback(
      (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (notifyChange) {
          notifyChange(ev.target.value);
        }
        if (mask) {
          setValue(maskValue(mask, ev.target.value));
        } else {
          setValue(ev.target.value);
        }
      },
      [notifyChange, mask]);

  return (
    <div className={classNames("flex flex-col", className)}>
      <label 
        htmlFor={`input-${name}`}
        className="text-xs font-extrabold"  
      >
        {label}
        {required && 
          <span className='text-primary'> *</span>
        }
      </label>
      <textarea
        ref={inputRef as React.LegacyRef<HTMLTextAreaElement> }
        id={`input-${name}`}
        type="text"
        name={name}
        value={value}
        onChange={onChangeValue}
        required={required === false ? undefined : true}
        className="py-2 h-24 resize-none mt-1 border-b-[1px] font-light text-sm border-gray-light focus:outline-0 focus"
        {...rest}
      />
    </div>
  );
};

export default React.forwardRef(Input);
