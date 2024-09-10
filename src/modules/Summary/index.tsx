import { Card } from "@components/Card";

import styles from "./style.module.scss";

export const Summary = () => (
  <>
    <Card title="Summary">
      <p>JS - strong skills. Excellent understanding</p>
      <p>
        Frameworks - Key framework is React.js and React ecosystem. Working with
        global state managers like Redux\Flux\MobX and asynchronously tools
        (Thunk\Saga). Understanding the module architecture of a React
        application. Experience in creation mobile and desktop applications with
        React Native, Electron. Also have basic knowledge of Vue.js.
      </p>
      <p>
        Markup - Wide experience of HTML/CSS. Cross-Browser/Cross-Platform
        development knowledge of best practices for performance. Using
        preprocessor and postprocessor languages. Also understand all modern
        methodology and using them with JS frameworks
      </p>
      <p>
        Backend - Good knowledge of Node.js. Basic knowledge of Python\PHP
        languages. Understanding the construction of REST API applications and
        client-server communication. Integration with 3th-part applications.
        Experience with Django, NextJS, Laravel frameworks.
      </p>
      <p>
        Databases - Experience with SQL/NoSQL Databases like
        MSSQL\MySQL\MongoDB\Postgres etc.
      </p>
      <p>
        Graphic - experience in raster and vector graphics(Canvas, SVG). Graphic
        Frameworks (GSAP, Snap.svg, D3). Basic understanding of web design.
      </p>
      <p>
        Other - OOP\Functionalmethodology understanding, MV*, Design Patterns,
        SOLID\GRASP principles.
      </p>
    </Card>
  </>
);
