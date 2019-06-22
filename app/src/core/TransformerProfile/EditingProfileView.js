import React from 'react';
import PropTypes from 'prop-types';

import styles from './EditingProfileView.module.css';
import common_styles from '../../CommonStyles.module.css';
import {
  TransformerStatsSliderFormFieldList,
  AllegianceFormField,
  TextFormField
} from '../../components';
import EditingActionButtons from './EditingActionButtons';

const EditingProfileView = ({
  onSave,
  onCancel,
  onInputChange,
  nameInput,
  allegianceInput,
  transformerStats,
  transformerStatInputs
}) => {
  return (
    <div className={styles.editing_profile_view_wrapper}>
      <form className={common_styles.form_fields_container}>
        <div className={styles.editing_profile_actions_wrapper}>
          <EditingActionButtons onSave={onSave} onCancel={onCancel} />
        </div>
        <TextFormField name="name" value={nameInput} onInputChange={onInputChange} />
        <AllegianceFormField value={allegianceInput} onInputChange={onInputChange} />
        <TransformerStatsSliderFormFieldList
          statInputs={transformerStatInputs}
          defaultStatInputs={transformerStats}
          onInputChange={onInputChange}
        />
      </form>
    </div>
  );
};

EditingProfileView.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  nameInput: PropTypes.string.isRequired,
  allegianceInput: PropTypes.string.isRequired,
  transformerStatInputs: PropTypes.object.isRequired,
  transformerStats: PropTypes.object.isRequired
};

export default EditingProfileView;
