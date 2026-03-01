import Tests from "../pages/tests/Tests";
import TestsPdfDownload from "../pages/tests/PdfDownload";
import OfflineTestSeriesResult from "../pages/OfflineTestSeriesResult";
import TestSeriesResult from "../pages/tests/test-series-result/TestSeriesResult";
import TestSeriesResultTwo from "../pages/tests/test-series-result/test-series-result-two/TestSeriesResultTwo";
import Result from "../pages/tests/test-series-result/test-series-result-two/result/Result";


const testsRoutes = [
  { path: "tests", element: <Tests /> },
  { path: "tests/test-series-result", element: <TestSeriesResult /> },
  { path: "tests/test-series-result/:id", element: <TestSeriesResultTwo /> },
  { path: "tests/test-series-result/:id/:result", element: <Result /> },
  { path: "tests/:id", element: <TestsPdfDownload /> },
  { path: "offline-test-series-result", element: <OfflineTestSeriesResult /> },
];

export default testsRoutes;
