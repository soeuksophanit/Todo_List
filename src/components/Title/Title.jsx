const Title = ({ title, isBig }) => {
  return (
    <p className={isBig ? "big-title color-black" : "small-title color-black"}>
      {title}
    </p>
  );
};

export default Title;
