export function SampleNextArrow(props) {
  //mudar cor da Arrow do Slider
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        backgroundColor: '#4E3B31',
        borderRadius: '100%',
      }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  //mudar cor da Arrow do Slider
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#4E3B31',
        borderRadius: '100%',
      }}
      onClick={onClick}
    />
  );
}


export function HandleScroll() {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  });
}