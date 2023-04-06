import { UseFormRegister } from "react-hook-form";

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

export interface IErrorText {
  errorText?: string;
}

export interface INewCard {
  title?: string;
  year?: string;
  genre?: string;
  popularity?: string;
  cover?: string;
}

export interface IFormPageState {
  cards: Array<INewCard>;
  showPopup: boolean;
}

export interface IFormProps {
  renderCards: (newCard: INewCard) => void;
}

export interface IFormValues {
  textInput: string;
  dateInput: string;
  select: string;
  radioInput: string;
  fileInput: FileList;
  checkboxInput: boolean;
}

export interface IInputProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

export interface ISearchElemProps {
  renderResults: (result: ISearchResult[]) => void;
}

export interface ISearchResult {
  id: string;
  title: string;
  imageUrl: string;
  date: Date;
  author: string;
  location: string;
}