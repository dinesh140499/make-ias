import { Navigate } from "react-router-dom";

import MakeIASPremium from "../pages/MakeIASPremium";
import PrelimsFacts from "../pages/prelims-facts/PrelimsFacts";
import OfflineTestSeriesResult from "../pages/OfflineTestSeriesResult";
import ProtectedLayout from '../auth/ProtectedLayout'

import Layout from "../common/layout/Layout";

import homeRoutes from "./homeRoutes";
import pagePerTestRoutes from "./pagePerTestRoutes";
import coursesRoutes from "./coursesRoutes";
import testsRoutes from "./testsRoutes";
import BooksNotes from "../pages/BooksNotes";
import currentAffairsRoutes from './currentAffairsRoutes'
import QuestionPaper from "../pages/resources/QuestionPaper";
import CurrentAffairs from "../pages/resources/CurrentAffairs";
import TopStudents from "../pages/resources/TopStudents";
import ShortNotes from "../pages/resources/ShortNotes";
import MCQ from "../pages/resources/MCQ";
import Contact from "../pages/Contact";
import SubscriptionPlans from "../pages/subscription-plans/SubscriptionPlans";
import Login from "../pages/login/Login";
import Register from "../components/login/Register";
import Forgot from "../components/login/Forgot";
import VerifyCode from "../components/login/VerifyCode";
// import SetPassword from "../components/login/SetPassword";
import ChoosePlan from "../pages/login/ChoosePlan";



// Lms Routes
import LMSRoutes from '../lms/routes/routes'
import AuthProvider from "../auth/AuthProvider";
import SetPassword from "../components/login/SetPassword";



const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            ...homeRoutes,
            ...pagePerTestRoutes,
            ...coursesRoutes,
            ...testsRoutes,
            ...currentAffairsRoutes,
            { path: "makeias-premium", element: <MakeIASPremium /> },
            { path: "offline-test-series-result", element: <OfflineTestSeriesResult /> },
            { path: "books-and-notes", element: <BooksNotes /> },
            { path: "prelims-facts", element: <PrelimsFacts /> },

            // Resources
            { path: "previous-year-question-paper", element: <QuestionPaper /> },
            { path: "current-affair-monthly-base", element: <CurrentAffairs /> },
            { path: "toppers-answer-copies", element: <TopStudents /> },
            { path: "short-notes", element: <ShortNotes /> },
            { path: "mcqs", element: <MCQ /> },

            {
                path: "subscription-plans", element: <ProtectedLayout>
                    <SubscriptionPlans />
                </ProtectedLayout>
            },
            { path: "contact-us", element: <Contact /> },

            { path: "login", element: <Login /> },
            { path: "signup", element: <Register /> },
            { path: "forgot-password", element: <Forgot /> },
            { path: "verify-code", element: <VerifyCode /> },
            { path: "set-password", element: <SetPassword /> },
            {
                path: "choose-plan", element: <ProtectedLayout>
                    <ChoosePlan />
                </ProtectedLayout>
            },

            { path: "*", element: <Navigate to="/" replace /> }
        ],
    },

    ...LMSRoutes
];

export default routes;
