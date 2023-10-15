import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import Home from "./components/Home"
import News from "./components/News";
import OurPlatform from "./components/OurPlatform";
import WhoWeAre from "./components/WhoWeAre";
import GoFund from "./components/GoFund";
import LoginForm from "./components/LoginForm";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<p>Gabim djalë!</p>} element={<App />}>
      <Route index element={<Home />} />
      <Route path="news" element={<News />}  />
      <Route path="ourplatform" element={<OurPlatform />}  />
      <Route path="whoweare" element={<WhoWeAre />}  />
      <Route path="gofund" element={<GoFund />}  />
      <Route path="donate" element={<LoginForm />} />
    </Route>

  )
) 


