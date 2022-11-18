const useDebounce = (callback: any, delay: number = 1000) => {
  let timeOut: any;
  return (args?: string) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callback(args);
    }, delay);
  };
};

export default useDebounce;
