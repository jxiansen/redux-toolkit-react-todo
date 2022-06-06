import Footer from "./Footer";
import Header from "./Header";
import ListItem from "./ListItem";
import { Provider } from "react-redux";
import store from "./../slices/store";

export default function ToDo() {
  console.log("Made with Mr-j QAQ ");

  return (
    <Provider store={store}>
      {/* 连接 redux 到 react */}
      <div className="h-screen overflow-hidden flex items-center justify-center  bg-gray-100">
        <div className="h-100 w-full flex items-center justify-center font-sans  bg-[#e8fffe7e]">
          <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <Header />
            <ListItem />
            <Footer />
          </div>
        </div>
      </div>
    </Provider>
  );
}
