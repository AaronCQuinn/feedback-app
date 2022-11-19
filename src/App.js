import Home from "./pages/Home";
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {
  return (
    <FeedbackProvider>
      <Home />
    </FeedbackProvider>
  );
}

export default App;
