import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/useHttp';

function App() {

  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }

    setTasks(loadedTasks);
  },[])

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  const response = useHttp(transformTasks)

  useEffect(() => {
    response.sendRequest( {url:'https://tasks-54c86-default-rtdb.firebaseio.com/tasks.json',
  });
}, [response.sendRequest]);
  
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={response.isLoading}
        error={response.error}
        onFetch={response.sendRequest}
      />
    </React.Fragment>
  );
}

export default App;