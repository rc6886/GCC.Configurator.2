import axios from 'axios';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as optionActions from '../../actions/optionActions';
import * as choiceActions from '../../actions/choiceActions';
import Summary from './Summary';
import { options } from '../../templates';
import NullTemplate from '../../templates/common/NullTemplate';

const RenderOptionGroup = ({ groupTemplate, optionTemplates}) => {
  const optionTemplatesForGroup = '';
};

class ConfiguratorPage extends React.Component {
  constructor(props,context) {
    super(props, context);

    this.choiceChanged = this.choiceChanged.bind(this);
  }

  choiceChanged(optionId, choiceId, choiceValue) {
    this.props.actions.updateChoice(optionId, choiceId, choiceValue);
  }

  render() {
    return (
      <div>
        This is the GCC.Configurator.
        {
          this.props.configurator.groups
          .sort((a, b) => a.sequenceNumber - b.sequenceNumber)
          .map((g, i) => {
            const OptionGroup = this.props.templates.groups.find((fg) => fg.name === g.name).template;
            
            return (
              <OptionGroup key={i}>
                {
                  g.options.map((optionId, index) => {
                    const optionTemplates = options;

                    const option = this.props.configurator.options
                      .find(option => option.id === optionId);

                    const OptionTemplate = optionTemplates.find(t => t.name === option.internalName);

                    const props = {
                      optionLabel: option.shortLabel,
                      choices: option.choices.map(choice => {
                        const isSelected = this.props.configurator.choices
                          .find(c => c.id === choice.id)
                          .isSelected;

                        return {
                          id: choice.id,
                          optionId,
                          mediaUrl: choice.mediaUrl,
                          shortLabel: choice.shortLabel,
                          isSelected,
                        };
                      }),
                      onChoiceSelected: this.choiceChanged,
                    };
                    
                    if (!OptionTemplate) {
                      return <NullTemplate key={index} {...props} />;
                    }
                  })
                }
              </OptionGroup>
            );
          })
        }
      </div>
    );
  }
}

ConfiguratorPage.propTypes = {
  configurator: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  templates: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    configurator: state.configurator,
    templates: state.templates
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(choiceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguratorPage);
