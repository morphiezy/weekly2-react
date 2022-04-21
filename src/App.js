import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "./store/ArticleSlice";

import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import Article from "./components/Article";
import NoMatch from "./components/NoMatch";

import "./App.css";



const App = () => {
  
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticle("https://api.jsonbin.io/b/626096edc5284e3115502a6e"));
  },[]);

  return (
    <div>
      <Navbar title="M Yardan Aqiella / React / A" />
      <div className="custom-container">
        <div className="container-fluid">
          <div className="row p-0">
            <div className="col-12 col-lg-3 p-0 border-end ">
              <SideBar/>
            </div>
            <div className="col-12 col-lg-8 px-4 py-4 p-lg-5">
              {
                data.length > 0 ? 

                <Routes>
                  <Route path="/" element={<Navigate to="page/html"/>} />
                  <Route path="page">
                    {
                      data.map((item) => {
                        const initPath = item.name.replace(" ","-").toLowerCase();
                        return (
                          <Route
                            key={item.id}
                            path={initPath}
                            element={<Article source={item.content} />}
                          />
                        )
                      })
                    }
                  </Route>
                  <Route path="*" element={<NoMatch source={data} />} />
                </Routes>

                : false
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
