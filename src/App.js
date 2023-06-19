import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
import AuthProvider from "./provider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
