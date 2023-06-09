import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  
  const navigation = useNavigation()
  const isSubmitting = navigation.state==='submitting'
  const data=useActionData()
  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === 'login'
  
  return (
    <>
      <Form method="post" className={classes.form}>
        {data && data.erros && (<ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>))}
        </ul>
        )}
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin?'login':'signup'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
