import "./desarrollo.css";

const desarrollo = () => {
  return (
    <div className="container-desarrollo">
      <div className="presentacion text-white text-center p-8 " id="home">
        <div className="titulo ">
          <h1 className="typing_effect font-bold  text-4xl ">
            Hi! I am Hazel Guerra.
          </h1>
        </div>
        <div className="descripcion">
          <p>
            I am a Full Stack developer <br />
            focused on the Frontend area{" "}
            <i className="fa-regular fa-face-smile-wink"></i>
          </p>
        </div>
      </div>
      <div className="sobreMi bg-stone-100" id="sobre-mi">
        <div className="imagen w-full max-w-80 shadow-sm ">
          <img src="./img/yo.jpg" className="rounded-md " alt="yo" />
        </div>
        <div className="infoYo m-8">
          <div className="infoYo2">
            <h1 className="titulos2 font-bold whitespace-pre-line text-center text-zinc-600 text-4xl">
              About me
            </h1>
            <div className="contenido text-center mx-8">
              <p>
                Hello! I'm 21 years old and currently seeking new challenges and
                job experiences. I am a nutrition student and have also
                completed a 2-year bootcamp, acquiring extensive knowledge in
                programming. I enjoy constantly learning about new technologies
                and languages. I am an animal lover and have a deep appreciation
                for good music. I thrive in both team and individual work
                settings, and I can easily adapt to various circumstances. My
                native language is Spanish, and I also have a communicative
                level of English. I am looking for a job that provides the
                opportunity to showcase my skills and grow alongside them!
              </p>
            </div>
          </div>
          <div className="contacto  m-8 " id="links">
            <h1 className="titulos2 font-bold whitespace-pre-line text-center text-zinc-600 text-4xl">
              Contact Links
            </h1>
            <div className="botones">
              <button
                type="button "
                className="boton text-white bg-stone-700 rounded-md"
              >
                <a
                  href="https://w.app/itW8XQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp text-3xl"></i>
                </a>
              </button>
              <button
                type="button"
                className="boton text-white bg-stone-700 rounded-md"
              >
                <a
                  href="https://github.com/HazelGuerra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github text-3xl"></i>
                </a>
              </button>
              <button
                type="button"
                className="boton text-white bg-stone-700 rounded-md"
              >
                <a
                  href="https://www.linkedin.com/in/hazel-guerra-alcaraz-7139a122a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin text-3xl"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="skills bg-zinc-300 flex justify-center items-center "
        id="skills"
      >
        <div className="infoSkills">
          <h1 className="titulos2 font-bold whitespace-pre-line text-center text-stone-100 text-4xl">
            {" "}
            Skills
          </h1>
          <div className="grillaskill grid grid-cols-3 gap-3  text-center">
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p className="jolines">
                React <i className="fa-brands fa-react"></i>
              </p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>
                JavaScript <i className="fa-brands fa-js"></i>
              </p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>
                Html <i className="fa-brands fa-html5"></i>
              </p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>
                Css <i className="fa-brands fa-css3-alt"></i>
              </p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>
                Sql <i className="fa-solid fa-database"></i>
              </p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>
                Node <i className="fa-brands fa-node"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="infoSkills">
          <h1 className="titulos2 font-bold whitespace-pre-line text-center text-stone-100 text-4xl">
            {" "}
            Soft Skills
          </h1>
          <div className="grillaskill grid grid-cols-3 gap-3  text-center">
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>Responsibility</p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>Leadership</p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>Teamwork</p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>Creativity</p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>Self-taught</p>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              <p>Organization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default desarrollo;
