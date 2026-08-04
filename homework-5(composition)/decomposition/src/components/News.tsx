/** Одна новость: иконка, текст и ссылка. */
type NewsProps = {
  icon: string;
  text: string;
  link: string;
};

function News({ icon, text, link }: NewsProps) {
  return (
    <li>
      <img src={icon} alt="" />
      <a href={link}>{text}</a>
    </li>
  );
}

export default News;
