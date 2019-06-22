import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProfileView.module.css';
import UserActionButtons from './UserActionButtons';
import TransformerAllegiance from './TransformerAllegiance';
import TransformerStatList from './TransformerStatList';

const ProfileView = ({
  onEdit,
  onDelete,
  transformerName,
  transformerAllegiance,
  transformerRating,
  transformerStats
}) => {
  return (
    <div className={styles.profile_view_container}>
      <div className={styles.profile_view_actions_wrapper}>
        <UserActionButtons onEdit={onEdit} onDelete={onDelete} />
      </div>
      <h1>{transformerName}</h1>
      <TransformerAllegiance allegiance={transformerAllegiance} />
      <TransformerStatList
        transformerRating={transformerRating}
        transformerStats={transformerStats}
      />
    </div>
  );
};

ProfileView.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  transformerName: PropTypes.string.isRequired,
  transformerAllegiance: PropTypes.string.isRequired,
  transformerRating: PropTypes.number.isRequired,
  transformerStats: PropTypes.object.isRequired
};

export default ProfileView;
