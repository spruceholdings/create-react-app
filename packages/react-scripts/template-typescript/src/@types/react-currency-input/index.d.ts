declare module 'react-currency-input' {
  export class CurrencyInput extends React.Component<ICurrencyInputProps, any> {}

  export interface ICurrencyInputProps extends React.HTMLAttributes<HTMLInputElement> {
    allowEmpty?: boolean;
    allowNegative?: boolean;
    autoFocus?: boolean;
    name?: string;
    value?: number | string | null;
    onChange?: (e: any) => void;
    ref?: (elem: any) => void;
    onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    precision?: number;
    thousandSeparator?: ',' | '.' | ' ' | '';
    decimalSeparator?: ',' | '.';
    disabled?: boolean;
    prefix?: string;
    suffix?: string;
  }

  export default CurrencyInput;
}
