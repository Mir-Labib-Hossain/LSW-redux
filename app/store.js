const { configureStore } = require("@reduxjs/toolkit");
const counterSlice = require("../features/couter");

const store = configureStore({
  reducer: { counter: counterSlice },
});

module.exports = store;
