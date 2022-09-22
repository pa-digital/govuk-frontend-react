import React from 'react';

interface RadioButtonDividerProps {
  text?: string;
}

function RadioButtonDivider({ text = 'or' }: RadioButtonDividerProps) {
  return <div className="govuk-radios__divider">{text}</div>;
}

export default RadioButtonDivider;
