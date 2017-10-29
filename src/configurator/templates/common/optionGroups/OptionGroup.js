import React from 'react';

const UngroupedOptionGroup = (props) => {
  return (
    <div>
      <p>Ungrouped Option Group</p>
      {props.children}
    </div>
  );
}

const SizeOptionGroup = (props) => {
  return (
    <div>
      <p>Size Option Group</p>
      {props.children}
    </div>
  );
};

export const optionGroups = [
  { name: 'Ungrouped', template: UngroupedOptionGroup },
  { name: 'Size', template: SizeOptionGroup },
];