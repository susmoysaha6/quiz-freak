import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topic></Topic>
      },
      {
        path: '/topic',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topic></Topic>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

function App() {
  return (
    <div className="App bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
