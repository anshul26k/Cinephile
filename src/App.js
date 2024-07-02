import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from './utils/appStore'
function App() {
  // console.log(process.env.REACT_APP_API_KEY)
  return (
     <Provider store={appStore}>
      <Body/>
     </Provider>
  )
}

export default App;
