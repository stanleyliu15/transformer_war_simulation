import React from 'react';
import PropTypes from 'prop-types';

import common_styles from '../../CommonStyles.module.css';
import styles from './EditingActionButtons.module.css';

const EditingActionButtons = ({ onSave, onCancel }) => {
  return (
    <div>
      <button className={`${common_styles.action_button} ${styles.save_button}`} onClick={onSave}>
        Save Changes
      </button>
      <button className={common_styles.action_button} onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

EditingActionButtons.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default EditingActionButtons;
