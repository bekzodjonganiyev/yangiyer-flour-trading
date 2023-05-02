import { lazy } from "react";
const Home = lazy(()=>import("./home/Home"));
// const ActualNews = lazy(() => import("./actual_news/ActualNews"));

export {
    Home,
    // ActualNews
}