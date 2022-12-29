import * as Btns from './Button.style';

function Button({ children = '', type = 'Button' }) {
  const Btn = Btns[type];

  return <Btn>{children}</Btn>;
}

export default Button;
