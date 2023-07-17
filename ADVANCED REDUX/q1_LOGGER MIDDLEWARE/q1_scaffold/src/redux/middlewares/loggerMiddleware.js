// create and export middleware function here
export const loggerMiddleware = (store) => (next) => (action) => {
    console.log(store.getState());
    next(action);
  };