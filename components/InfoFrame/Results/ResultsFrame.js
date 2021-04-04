import styled from "@emotion/styled";
import TimeResults from "../TimeResults";

import ResultFrame from "./Result/ResultFrame";

const StyledResultsFrame = styled.main`
  margin-left: 180px;
  width: 652px;

  @media only screen and (max-width: 950px) {
    background-color: #f2f2f1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow-x: hidden;
    margin-left: 0px;
  }
`;

const data = {
  gData: [
    {
      cite: {
        big: "https://www.python.org",
        small: "",
      },
      description: {
        date: "4 days ago - ",
        desc: "The official home of the <em>Python</em> Programming Language.",
      },
      table: [
        {
          desc:
            "Python 3.9.2 - Mac OS X - Python 3.8.8 - Python 3.9.0 - Python 3.9.1",
          tittle: "Download",
          url: "https://www.python.org/downloads/",
        },
        {
          desc:
            "1. Whetting Your Appetite - 5. Data Structures - 6. Modules - ...",
          tittle: "Tutorial",
          url: "https://docs.python.org/3/tutorial/",
        },
        {
          desc:
            "Downloading Python - Python for Programmers - IntroductoryBooks",
          tittle: "Python For Beginners",
          url: "https://www.python.org/about/gettingstarted/",
        },
        {
          desc: "PSF Membership FAQ - About - Sponsors - Mission - Donations",
          tittle: "Python Software Foundation",
          url: "https://www.python.org/psf/",
        },
        {
          desc:
            "Python's documentation, tutorials, and guides are constantly ...",
          tittle: "Documentation",
          url: "https://www.python.org/doc/",
        },
        {
          desc:
            "Tutorial - Standard Library - Python Language - Python Module Index",
          tittle: "Python Docs",
          url: "https://docs.python.org/",
        },
      ],
      tittle: "Welcome to Python.org",
      url: "https://www.python.org/",
    },
    {
      cite: {
        big: "https://en.wikipedia.org",
        small: " › wiki › Python_(programming...",
      },
      description: {
        date: "",
        desc:
          "<em>Python</em> is an interpreted, high-level and general-purpose programming language<wbr/>. <em>Python's</em> design philosophy emphasizes code readability with its notable use ...",
      },
      table: [],
      tittle: "Python (programming language) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    },
    {
      cite: {
        big: "https://www.codecademy.com",
        small: " › catalog › language › p...",
      },
      description: {
        date: "",
        desc: "<em>Python</em>. <em>Python</em> is a general-purpose ...",
      },
      table: [],
      tittle: "Python Courses & Tutorials | Codecademy",
      url: "https://www.codecademy.com/catalog/language/python",
    },
    {
      cite: {
        big: "https://www.w3schools.com",
        small: " › python",
      },
      description: {
        date: "",
        desc:
          "<em>Python</em> Tutorial ... <em>Python</em> is a programming language. <em>Python</em> can be used on a server to create web applications. Start learning <em>Python</em> now ». Learning by ...",
      },
      table: [],
      tittle: "Python Tutorial - W3Schools",
      url: "https://www.w3schools.com/python/",
    },
    {
      cite: {
        big: "https://www.w3schools.com",
        small: " › python › python_intro",
      },
      description: {
        date: "",
        desc:
          "What is <em>Python</em>? <em>Python</em> is a popular programming language. It was created by Guido van Rossum, and released in 1991. It is used for: web development ...",
      },
      table: [],
      tittle: "Introduction to Python - W3Schools",
      url: "https://www.w3schools.com/python/python_intro.asp",
    },
  ],
  ready: true,
  loading: false,
};

const ResultsFrame = () => {

  return (
    <StyledResultsFrame>
      <TimeResults />

      {data.gData.map((dataItem) => (
        <ResultFrame dataItem={dataItem} key={dataItem.url + dataItem.tittle}/>
      ))}
    </StyledResultsFrame>
  );
};

export default ResultsFrame;
