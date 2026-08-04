/** Компонент рекламы, принимает иконку, название и текст и отображает справа рекламу*/
type PromoBlockType = {
  icon: string;
  title: string;
  text: string;
};

function PromoBlock({ icon, title, text }: PromoBlockType) {
  return (
    <>
      <img src={icon} alt="..."></img>
      <h4>{title}</h4>
      <p>{text}</p>
    </>
  );
}

export default PromoBlock;
