import TodoList from "./components/TodoList";
import TabForm from "./components/TabForm";
import ImageCarousel from "./components/ImageCarousel";
import OtpRetrieval from "./components/OtpRetrieval";
const App = () => {
  return (
    <div className="App">
      {/* <TodoList /> */}
      {/* <TabForm /> */}
      {/* <ImageCarousel /> */}
      <OtpRetrieval otpLength={6} />
    </div>
  );
};

export default App;
