import React from 'react';
import PropTypes from 'prop-types';

import common_styles from '../../CommonStyles.module.css';
import styles from './UserActionButtons.module.css';

const UserActionButtons = ({ onEdit, onDelete }) => {
  return (
    <>
      <button className={common_styles.action_button} onClick={onEdit}>
        Edit Transformer
      </button>
      <button
        className={`${common_styles.action_button} ${styles.delete_button}`}
        onClick={onDelete}
      >
        Delete Transformer
      </button>
    </>
  );
};

UserActionButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default UserActionButtons;
