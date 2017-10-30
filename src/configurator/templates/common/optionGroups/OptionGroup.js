import React from 'react';

const UngroupedOptionGroup = (props) => {
  return (
    <div>
      <h1>Ungrouped Option Group</h1>
      {props.children}
    </div>
  );
}

const SizeOptionGroup = (props) => {
  return (
    <div>
      <h1>Size Option Group</h1>
      {props.children}
    </div>
  );
};

export const optionGroups = [
  { name: 'Ungrouped', template: UngroupedOptionGroup },
  { name: 'Size', template: SizeOptionGroup },
];