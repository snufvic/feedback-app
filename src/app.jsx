import FeedbackForm from "./components/feedbackForm";
import FeedbackList from "./components/feedbackList";
import FeedbackStats from "./components/feedbackStats";
import Header from "./components/header";
import About from "./components/pages/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/aboutIconLink";
import { FeedbackProvider } from "./context/feedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
