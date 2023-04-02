import { useState } from 'react';
import useHttp from '../../hooks/useHttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  
  const createTasks = (taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  const response = useHttp(createTasks)

  const enterTaskHandler = async (taskText) => {
    response.sendRequest({url: 'https://react-http-6b4a6.firebaseio.com/tasks.json' },
    {
      method: 'POST',
      body: JSON.stringify({ text: taskText }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    );
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={response.isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
}

export default NewTask;
