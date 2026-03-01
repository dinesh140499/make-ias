import CurrentAffairs from "../pages/current-affairs/CurrentAffairs";
import DetailsCurrentAffair from "../pages/current-affairs/DetailsCurrentAffair";
import CurrentAffairsOverview from "../pages/current-affairs/CurrentAffairsOverview";

const currentAffairsRoutes = [
  { path: "current-affairs", element: <CurrentAffairs /> },
  { path: "current-affairs/material", element: <DetailsCurrentAffair /> },
  { path: "current-affairs/:details", element: <CurrentAffairsOverview /> },
];

export default currentAffairsRoutes;
