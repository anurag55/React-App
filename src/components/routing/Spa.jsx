import React from "react";
import "./Spa.css";

export default function Spa() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <nav className="navbar">
        <button onClick={() => handleScroll('article1')}>Article 1</button>
        <button onClick={() => handleScroll('article2')}>Article 2</button>
        <button onClick={() => handleScroll('article3')}>Article 3</button>
        <button onClick={() => handleScroll('article4')}>Article 4</button>
      </nav>
      <div className="content">
        <div id="article1" className="article">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div id="article2" className="article">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
          literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
          of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
        <div id="article3" className="article">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which don't look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
          tend to repeat predefined chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
          structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
          always free from repetition, injected humour, or non-characteristic words etc.
        </div>
        <div id="article4" className="article">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
          in their exact original form, accompanied by English versions from the 1914 translation by H.
          Rackham.
        </div>
      </div>
    </div>
  );
}
