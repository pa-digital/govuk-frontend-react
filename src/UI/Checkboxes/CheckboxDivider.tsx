import React from 'react';

export interface CheckBoxDividerProps {
  text?: string;
}

export function CheckBoxDivider({ text = 'or' }: CheckBoxDividerProps) {
  return <div className="govuk-checkboxes__divider">{text}</div>;
}
