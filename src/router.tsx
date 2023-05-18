import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import TodoPage from "./pages/todo";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/register", element: <SignUpPage /> },
  { path: "/todo", element: <TodoPage /> },
]);

export default router;
