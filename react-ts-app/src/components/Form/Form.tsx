import React from "react";

import "./Form.css";
import { DateInput } from "./DateInput";
import { TextInput } from "./TextInput";
import { Select } from "./Select";
import Button from "../Utils/Button";
import { IEmptyProps, IErrorText } from "../../types/types";
import { RadioInput } from "./RadioInput";

const ErrorElement = (props: IErrorText) => {
  return <div className="form-error">{props.errorText}</div>;
};

export class Form extends React.Component {
  textInputRef: React.RefObject<HTMLInputElement>;
  dateInputRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  radioInputRefs: React.RefObject<HTMLInputElement>[];

  constructor(props: IEmptyProps) {
    super(props);
    this.textInputRef = React.createRef();
    this.dateInputRef = React.createRef();
    this.selectRef = React.createRef();
    this.radioInputRefs = [
      React.createRef<HTMLInputElement>(),
      React.createRef<HTMLInputElement>(),
      React.createRef<HTMLInputElement>(),
    ];
  }

  handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      this.textInputRef.current?.value,
      this.dateInputRef.current?.value,
      this.selectRef.current?.value,
      this.radioInputRefs[0].current?.checked,
      this.radioInputRefs[1].current?.checked,
      this.radioInputRefs[2].current?.checked
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit} className="form-form">
        <div>
          <TextInput ref={this.textInputRef} isError={null} />
        </div>
        <div>
          <DateInput ref={this.dateInputRef} isError={null} />
        </div>
        <div>
          <Select ref={this.selectRef} isError={null} />
        </div>
        <div>
          <RadioInput forwardedRefs={this.radioInputRefs} isError={null} />
        </div>
        <div></div>
        <div></div>
        <Button buttonText="Submit" buttonType="submit" />
      </form>
    );
  }
}

export { ErrorElement };
