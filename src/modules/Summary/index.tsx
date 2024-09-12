import { Card } from "@components/Card";

import styles from "./style.module.scss";

export const Summary = () => (
  <>
    <Card title="Summary">
      <p>
        <strong>JS</strong> - strong skills. Understanding of the principles of
        operation of the V8 engine.
      </p>
      <p>
        <strong>Frameworks</strong> - Key framework is React.js and{" "}
        <mark>React ecosystem</mark>. Working with global state managers like{" "}
        <mark>Redux\Flux\MobX</mark> and asynchronously tools{" "}
        <mark>Thunk\Saga</mark>. Understanding the module architecture of a
        React application. Experience in creation mobile and desktop
        applications with <mark>React Native</mark>, <mark>Electron</mark>. Also
        have basic knowledge of Vue.js.
      </p>
      <p>
        <strong>Markup</strong> - Wide experience of HTML/CSS.
        Cross-Browser/Cross-Platform development knowledge of best practices for
        performance. Using preprocessor and postprocessor languages. Also
        understand all modern methodology and using them with JS frameworks
      </p>
      <p>
        <strong>Backend</strong> - Good knowledge of Node.js. Basic knowledge of
        Python\PHP languages. Understanding the construction of REST API
        applications and client-server communication. Integration with 3th-part
        applications. Experience with Django, NextJS, Laravel frameworks.
      </p>
      <p>
        <strong>Databases</strong> - Experience with SQL/NoSQL Databases like
        MSSQL\MySQL\MongoDB\Postgres etc.
      </p>
      <p>
        <strong>Graphic</strong> - experience in raster and vector
        graphics(Canvas, SVG). Graphic Frameworks (GSAP, Snap.svg, D3). Basic
        understanding of web design.
      </p>
      <p>
        <strong>Other</strong> - OOP\Functionalmethodology understanding, MV*,
        Design Patterns, SOLID\GRASP principles.
      </p>
    </Card>
  </>
);
