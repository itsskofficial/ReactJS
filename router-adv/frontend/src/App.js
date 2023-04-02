import EditEvent from "./components/pages/EditEvent";
import ErrorPage from "./components/pages/ErrorPage";
import EventDetails, { deleteEventAction, eventItemLoader } from "./components/pages/EventDetails";
import EventRoot from "./components/pages/EventRoot";
import Events, { eventLoader } from "./components/pages/Events";
import NewEvent from "./components/pages/NewEvent";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import { eventAction } from "./components/EventForm";
import NewsletterPage, { newsletterAction } from "./components/pages/Newsletter";

const router = createBrowserRouter({
    path: '/',
    element: '<Root/>',
    errorElement: <ErrorPage/>,
    children: [
        { index: true, element: <Home /> },
        {
          path: '/events', element: <EventRoot />, children: [
            {
              index: true,
              element: <Events />,
              loader: eventLoader
            },
            {
              path: '/events/:id', id:'event-item', loader: eventItemLoader, children: [
                { index: true, element: <EventDetails /> , action: deleteEventAction},
                { path : 'edit', element: <EditEvent/> , action : eventAction}

            ]},
            { path: '/events/new', element: <NewEvent/>, action : eventAction},
        ]
      },
      {
          
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
        ],
      
})

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
