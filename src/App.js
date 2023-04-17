import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./screens/homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  }
]);


function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
