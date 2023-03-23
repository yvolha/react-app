export type IEmptyProps = Record<string, never>

export interface IInputValue {
  inputValue: string;
}

export interface IBook {
  title: string;
  author: string;
  img: string;
  year: number;
  desc: string;
  genre: string;
}

export interface IButtonProps {
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
}

export interface IPropsError {
  isError?: null | true;
}

export interface IErrorText {
  errorText?: string;
}