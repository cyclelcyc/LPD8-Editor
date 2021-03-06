import React from 'react';
import './editorInput.css';

interface Props {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  min?: string;
  max?: string;
  step?: string;
}

export const EditorInput: React.FC<Props> = ({ value, label, onChange, ...props }) => (
  <div className="editor-input">
    <label>{label}</label>
    <input type="number" value={value} onChange={onChange} {...props} />
  </div>
)