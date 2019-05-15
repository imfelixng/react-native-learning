import React from 'react';

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
    onRemove
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
    />
  );
}

export default EditableTimer;