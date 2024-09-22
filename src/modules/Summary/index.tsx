import { Card } from "@components/Card";

import { Typography } from "@ui/Typography";

export const Summary = () => (
  <Card title="Summary">
    <Typography>
      <strong>JavaScript</strong> - strong skills. Proficient in ES6+ syntax.
      Understanding of asynchronous code. Understanding cross-browser
      compatibility and optimizing applications for different browsers.
      Manipulating DOM elements. Understanding the event loop in JavaScript
    </Typography>
    <Typography>
      <strong>Frameworks</strong> - Key framework is React.js and{" "}
      <mark>React ecosystem</mark>. Working with global state managers like{" "}
      <mark>Redux\Flux\MobX</mark> and asynchronously tools{" "}
      <mark>Thunk\Saga</mark>. Understanding the module architecture of a React
      application. Experience in creation mobile and desktop applications with{" "}
      <mark>React Native</mark>, <mark>Electron</mark>. Also have basic
      knowledge of Vue.js.
    </Typography>
    <Typography>
      <strong>Markup</strong> - Wide experience of HTML/CSS.
      Cross-Browser/Cross-Platform development knowledge of best practices for
      performance. Using preprocessor and postprocessor languages. Also
      understand all modern methodology and using them with JS frameworks
    </Typography>
    <Typography>
      <strong>Backend</strong> - Good knowledge of Node.js. Basic knowledge of
      Python\PHP languages. Understanding the construction of REST API
      applications and client-server communication. Integration with 3th-part
      applications. Experience with Django, NextJS, Laravel frameworks.
    </Typography>
    <Typography>
      <strong>Databases</strong> - Experience with SQL/NoSQL Databases like
      MSSQL\MySQL\MongoDB\Postgres etc.
    </Typography>
    <Typography>
      <strong>Graphic</strong> - Experience in raster and vector
      graphics(Canvas, SVG). Graphic Frameworks (GSAP, Snap.svg, D3). Basic
      understanding of web design.
    </Typography>
    <Typography>
      <strong>Other</strong> - OOP\Functionalmethodology understanding, MV*,
      Design Patterns, SOLID\GRASP principles.
    </Typography>
  </Card>
);
