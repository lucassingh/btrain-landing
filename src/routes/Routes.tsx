import { Routes, Route } from "react-router-dom";

import { HomeScreen, AboutScreen, NotFoundScreen, FeaturesScreen } from '../pages';

const RouteSystem = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/features" element={<FeaturesScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    );
};

export default RouteSystem;