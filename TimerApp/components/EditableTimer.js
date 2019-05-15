import React from 'react';
import PropTypes from 'prop-types';

import TimerForm from './TimerForm';
import Timer from './Timer';
const EditableTimer = (
  {
    id,
    title,
    project,
    elapsed,
    isRunning,
    onSubmitForm,
    onRemove,
    onStartPress,
    onStopPress
  }
) => {

  const [editFormOpen, setEditFormOpen] = React.useState(false);

  const handleOpenEditForm = () => {
    setEditFormOpen(true);
  }

  const handleCloseEditForm = () => {
    setEditFormOpen(false);
  }

  const handleSubmit = (timer) => {
    onSubmitForm(timer)
  }

  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        onFormClose = { handleCloseEditForm }
        onFormSubmit = { handleSubmit }
      />
    );
  }

  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      openEditForm = { handleOpenEditForm }
      onRemove = { onRemove }
      onStartPress = { onStartPress }
      onStopPress = { onStopPress }
    />
  );
}

EditableTimer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  project: PropTypes.string,
  elapsed: PropTypes.number,
  isRunning: PropTypes.bool,
  onSubmitForm: PropTypes.func,
  onRemove: PropTypes.func,
  onStartPress: PropTypes.func,
  onStopPress:  PropTypes.func,
}

export default EditableTimer;