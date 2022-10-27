import { RouterProvider } from 'react-router-dom';
import './App.css';
import ThemeProvider from './contexts/ThemeProvider/ThemeProvider';
import { router } from './routes/Routes/Routes';

function App() {
  return (
    <div>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
