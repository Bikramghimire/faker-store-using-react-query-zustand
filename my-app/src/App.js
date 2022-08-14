import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AddProduct from "./components/AddProduct/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="singleproduct/:productID" element={<SingleProduct />} />
        <Route path="addproduct" element={<AddProduct />} />
        {/* <Route path=""></> */}
        {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
