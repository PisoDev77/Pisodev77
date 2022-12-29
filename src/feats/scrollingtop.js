// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
export default () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
