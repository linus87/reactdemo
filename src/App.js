import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Profile from "./pages/profile/Profile";
import PageWithUseState from "./pages/hooks/PageWithUseState";
import PageWithUseCallback from "./pages/hooks/PageWithUseCallback";
import NoPage from "./pages/NoPage";
import { incremented, decremented, incrementByAmount } from "./reducers/counterReducer";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="hooks">
            <Route path="useState" index element={<PageWithUseState />} />
            <Route path="useCallback" index element={<PageWithUseCallback />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
store.dispatch(incrementByAmount(2))

export default App;
