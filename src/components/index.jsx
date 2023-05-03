import { lazy } from "react";

const Navbar = lazy(() => import("./header/Navbar"));
const Footer = lazy(() => import("./footer/Footer"));

// const NewsCard = lazy(() => import("./news_card/NewsCard"));
const SkeletonPost = lazy(() => import("./skeleton_loader/SkeletonPost"));
const Layout = lazy(() => import("./layout/Layout"));
const RecommendContent = lazy(() => import("./recommend_content/RecommendContent"));

export {
    Navbar,
    Footer,
    // NewsCard,
    RecommendContent,
    SkeletonPost,
    Layout,
}