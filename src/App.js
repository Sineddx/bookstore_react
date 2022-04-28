import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import SearchResult from "./pages/SearchResult/SearchResult";
import Footer from "./components/Footer/Footer";
import Books from "./components/Books/Books";
import { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import ReducerContext from "./context/reducerContext";
import "react-notifications/lib/notifications.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const header = <Header />;
  const content = (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="books" element={<Books />}></Route>
      <Route path="search" element={<SearchResult />}></Route>
      <Route path="search/:term" element={<SearchResult />}></Route>
    </Routes>
  );
  const footer = <Footer />;

  return (
    <Router>
      <ReducerContext.Provider value={{ state, dispatch }}>
        <Layout header={header} content={content} footer={footer} />
        <ToastContainer />
      </ReducerContext.Provider>
    </Router>
  );
}

export default App;
