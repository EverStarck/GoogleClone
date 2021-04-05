import { useContext } from "react";
import styled from "@emotion/styled";

import { ApiDataContext } from "../../../context/ApiDataContext";

import { useRouter } from "next/router";

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
        date: "",
        desc: "The official home of the <em>Python</em> Programming Language.",
      },
      id: 1,
      table: [
        {
          desc:
            "Python 3.7.10\u00a0- Python 3.9.1\u00a0- Python 3.8.6\u00a0- Python 3.7.8\u00a0- ...",
          id: "table1",
          tittle: "Downloads",
          url: "https://www.python.org/downloads/",
        },
        {
          desc:
            "Python 3.9.2. Release Date: Feb. 19, 2021. This is the second ...",
          id: "table2",
          tittle: "Python 3.9.2",
          url: "https://www.python.org/downloads/release/python-392/",
        },
      ],
      tittle: "Welcome to Python.org",
      url: "https://www.python.org/",
    },
    {
      cite: {
        big: "https://es.wikipedia.org",
        small: " \u203a wiki \u203a Python",
      },
      description: {
        date: "",
        desc:
          "<em>Python</em> es un lenguaje de programaci\u00f3n interpretado cuya filosof\u00eda hace hincapi\u00e9 en la legibilidad de su c\u00f3digo.\u200b Se trata de un lenguaje de programaci\u00f3n\u00a0...",
      },
      id: 2,
      table: [],
      tittle: "Python - Wikipedia, la enciclopedia libre",
      url: "https://es.wikipedia.org/wiki/Python",
    },
    {
      cite: {
        big: "https://www.crehana.com",
        small: " \u203a ... \u203a {{ article.title }}",
      },
      description: {
        date: "",
        desc:
          "Multiplataforma: el lenguaje <em>Python</em> puede ejecutarse en diferentes sistemas operativos como Unix, Linux ...",
      },
      id: 3,
      table: [],
      tittle:
        "Python: El lenguaje de programaci\u00f3n m\u00e1s popular para ...",
      url: "https://www.crehana.com/mx/blog/web/que-es-python/",
    },
    {
      cite: {
        big: "https://www.esic.edu",
        small: " \u203a rethink \u203a tecnologia \u203a para-que-...",
      },
      description: {
        date: "kekekeke ",
        desc:
          "Las funciones de este lenguaje de programaci\u00f3n pueden ser variadas, pero \u00bf<wbr/>Para qu\u00e9 sirve concretamente <em>Python</em>? Conoce esta respuesta y m\u00e1s aqu\u00ed.",
      },
      id: 4,
      table: [],
      tittle:
        "\u00bfPara qu\u00e9 sirve Python? Razones para utilizarlo | ESIC",
      url: "https://www.esic.edu/rethink/tecnologia/para-que-sirve-python",
    },
    {
      cite: {
        big: "https://www.akademus.es",
        small: " \u203a principales-usos-python",
      },
      description: {
        date: "19 oct. 2018 \u2014 ",
        desc:
          "<em>Python</em> es uno de los lenguajes de programaci\u00f3n m\u00e1s usados en los \u00faltimos a\u00f1os. Descubre con este post las aplicaciones que tiene en\u00a0...",
      },
      id: 5,
      table: [],
      tittle: "Python, los 5 usos m\u00e1s importantes de este lenguaje de ...",
      url: "https://www.akademus.es/blog/programacion/principales-usos-python/",
    },
    {
      cite: {
        big: "https://entrenamiento-python-basico.readthedocs.io",
        small: " \u203a lat...",
      },
      description: {
        date: "",
        desc:
          "Un entrenamiento de nivel b\u00e1sico (2 a 3 d\u00edas) que cubre los diez (10) cap\u00edtulos. Tabla de contenidos: 1. Introducci\u00f3n al lenguaje <em>Python</em> \u00b7 1.1. Acerca de <em>Python</em>\u00a0...",
      },
      id: 6,
      table: [],
      tittle:
        "Programaci\u00f3n en Python - Nivel b\u00e1sico \u2014 Materiales del ...",
      url: "https://entrenamiento-python-basico.readthedocs.io/es/latest/",
    },
    {
      cite: {
        big: "https://python.uptodown.com",
        small: " \u203a ... \u203a Desarrollo \u203a General",
      },
      description: {
        date: "",
        desc:
          "Descargar la \u00faltima versi\u00f3n de <em>Python</em> para Windows. Asequible lenguaje de programaci\u00f3n multiparadigma. <em>Python</em> es un lenguaje de programaci\u00f3n\u00a0...",
      },
      id: 7,
      table: [],
      tittle: "Python 3.9.3 (64-bit) para Windows - Descargar",
      url: "https://python.uptodown.com/windows",
    },
    {
      cite: {
        big: "https://www.edx.org",
        small: " \u203a aprende \u203a programacion-python",
      },
      description: {
        date: "",
        desc:
          "Encuentra cursos en l\u00ednea gratis para aprender a programar en <em>python</em>, uno de los lenguajes de programaci\u00f3n para el desarrollo web y ciencia de datos m\u00e1s\u00a0...",
      },
      id: 8,
      table: [],
      tittle:
        "Aprende sobre programaci\u00f3n con Python con cursos online ...",
      url: "https://www.edx.org/es/aprende/programacion-python",
    },
  ],
  ready: true,
  loading: false,
};

const ResultsFrame = ({seconds}) => {
  // Context
  // const { data } = useContext(ApiDataContext);

  const router = useRouter();
  return (
    <StyledResultsFrame>
      <TimeResults seconds={seconds}/>

      {!router.query.q == "" ? (
        <>
          {data.gData.map((dataItem) => (
            <ResultFrame dataItem={dataItem} key={dataItem.id} />
          ))}
        </>
      ) : null}
    </StyledResultsFrame>
  );
};

export default ResultsFrame;
