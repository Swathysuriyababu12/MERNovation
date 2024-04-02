import React from "react";
import GitHubList from "./Components/GithubList";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DatePage from "./Components/DatePage";
/* @vite-ignore */

const App = () => {
  // Replace 'your_username' and 'your_token' with your GitHub username and personal access token
  const username = "guvimernstack";
  const token = "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";

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/:date" element={<DatePage />} />
      </Routes>

      {/* <GitHubList username={username} type="repos" token={token} />
      <GitHubList username={username} type="gists" token={token} /> */}
    </BrowserRouter>
  );
};

export default App;
