import React from 'react';

const ChoiceLabel = ({choiceLabel, isSelected}) => {
  return (
    <div>
      {choiceLabel} {isSelected && <b>*</b>}
    </div>
  );
};

class NullTemplate extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.optionLabel}</h4>
        {this.props.choices.map((choice, index) => {
          return (
            <div key={index}
              onClick={() => this.props.onChoiceSelected(choice.optionId, choice.id, choice.shortLabel)}
            >
              <img src={`http://eleanor.localtest.me/${choice.mediaUrl}`}></img>
              <ChoiceLabel choiceLabel={choice.shortLabel} isSelected={choice.isSelected} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default NullTemplate;