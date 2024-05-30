import './App.css';
import Layout from './layout/Layout';
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import UserProvider from './users/providers/UserProvider';
import CustomThemeProvider from './providers/CustomThemeProvider';
import SnackbarProvider from './providers/SnackbarProvider';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CustomThemeProvider>
          <SnackbarProvider>
            <Layout>
              <Router />
            </Layout>
          </SnackbarProvider>
        </CustomThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
