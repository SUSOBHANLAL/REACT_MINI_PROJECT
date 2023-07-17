// import { configureStore } from "@reduxjs/toolkit";

// // import comments reducer function here and include it inside of the store
// export const store = configureStore({
//   reducer: {}
// });

import { configureStore } from "@reduxjs/toolkit";

const { commentsReducer } = require("./redux/reducers/commentsReducer");
export const store = configureStore({
  reducer: { commentsReducer }
});