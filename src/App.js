import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/NoPage";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers/rootReducer";
import { incremented, decremented } from "./reducers/counterReducer";

function App() {
  const store = configureStore({
    reducer: rootReducer
  })

  // Still pass action objects to `dispatch`, but they're created for us
  store.dispatch(incremented())
  // {value: 1}
  store.dispatch(incremented())
  // {value: 2}
  store.dispatch(decremented())
  // {value: 1}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
