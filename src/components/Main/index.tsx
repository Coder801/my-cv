import React from "react";

type MainProps = {
  className: string;
};

export const Main = ({ className }: MainProps) => {
  return (
    <main className={className}>
      <section>
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at
          officiis sunt totam tempora voluptatum sit exercitationem eveniet
          nostrum illum, nesciunt aperiam! Similique, voluptates repellat
          accusamus sint vitae eius nisi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at
          officiis sunt totam tempora voluptatum sit exercitationem eveniet
          nostrum illum, nesciunt aperiam!
        </p>
      </section>
      <section>
        <h3>Work Experience</h3>
        <article>
          <h4>Frontend Developer</h4>
          <h5>Company</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at
            officiis sunt totam tempora voluptatum sit exercitationem eveniet
            nostrum illum, nesciunt aperiam! Similique, voluptates repellat
            accusamus sint vitae eius nisi!
          </p>
        </article>
      </section>
    </main>
  );
};
