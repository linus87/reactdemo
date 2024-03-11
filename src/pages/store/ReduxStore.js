import { Provider } from 'react-redux'
import './ReduxStore.css';
import store from "../../app/store";
import Counter from "../../features/counter/Counter";

const ReduxStore = () => {

  // return (
  //   <Provider store={store}>
  //     <Counter />
  //   </Provider>
  // )
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
};

export default ReduxStore;