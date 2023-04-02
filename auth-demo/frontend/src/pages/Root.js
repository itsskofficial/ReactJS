import { useEffect } from 'react';
import { Outlet, useRouteLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();

  const token = useRouteLoaderData('root')
  const submit = useSubmit()

  useEffect(()=> {
    if (!token){
      return
    }
    if (token==='EXPIRED'){
     
    }

    const duration = getTokenDuration()

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' })
    }, duration)
    
  }, [token, submit])
  
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
