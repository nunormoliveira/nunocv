import React from "react";
import SkillBar from "react-skillbars";
import { SocialIcon } from "react-social-icons";

export default class PicPlusSkills extends React.Component {
  render() {
    const skill = [
      { type: "Javascript", level: 50 },
      { type: "C", level: 70 },
      { type: "C++", level: 60 },
      { type: "Java", level: 70 }
    ];

    const colors = {
      bar: "green",
      title: {
        text: "#abc123",
        background: "#ffe"
      }
    };
    return (
      <div class="leftpane">
        <section>
          <figure>
            <img
              id="myPic"
              src="/20181022_172746.jpg"
              width="200"
              heigth="200"
              align="middle"
              alt="myPic"
            />
            <figcaption size="8px">Nuno Ricardo Mendes Oliveira</figcaption>
          </figure>
          Programming Skills:
          <div class="skillBarWidth">
            <SkillBar skills={skill} colors={colors} height={15} />
          </div>
        </section>
        <section>
          <SocialIcon
            color="#D8D8D8"
            url="https://www.facebook.com/nuno.oliveira.3591"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            color="#D8D8D8"
            url="https://www.linkedin.com/in/nuno-oliveira-b90a5910b/"
            style={{ height: 25, width: 25 }}
          />
        </section>
      </div>
    );
  }
}
