import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import BookShow from "./components/BookShow";



function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout/>
      },
        {
          path:"/showbook/:id",
          element: <BookShow/>
        },
    ]
  }
])

export default App;
