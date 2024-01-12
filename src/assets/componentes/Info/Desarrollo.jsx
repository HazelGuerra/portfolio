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
          <img
            src="./../../../../public/img/yo.jpg"
            className="rounded-md "
            alt="yo"
          />
        </div>
        <div className="infoYo m-8">
          <div className="infoYo2">
            <h1 className="titulos2 font-bold whitespace-pre-line text-center text-zinc-600 text-4xl">
              About me
            </h1>
            <div className="contenido text-center mx-8">
              <p>
                Hello! I'm Hazel, 21 years old. I am someone in search of new
                challenges and work experiences. I am a nutrition student with
                extensive knowledge (and still learning) in programming. I
                constantly enjoy learning new technologies. I am an animal lover
                and appreciate good music. I like working both in teams and
                individually, and I can handle various circumstances, including
                languages, without any problem. I am seeking the opportunity to
                showcase my skills!
              </p>
            </div>
          </div>
          <div className="contacto  m-8 " id="links">
            <h1 className="titulos2 font-bold whitespace-pre-line text-center text-zinc-600 text-4xl">
              Contact and Links
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
                  Whatsapp
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
                  Github
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
                  Linkedin
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="skills bg-zinc-300  " id="skills">
        <div className="infoSkills">
          <h1 className="titulos2 font-bold whitespace-pre-line text-center text-stone-100 text-4xl">
            {" "}
            Skills
          </h1>
          <div className="grillaskill grid grid-cols-3 gap-3  text-center">
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              React <i className="fa-brands fa-react"></i>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              JavaScript <i className="fa-brands fa-js"></i>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              Html <i className="fa-brands fa-html5"></i>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              Css <i className="fa-brands fa-css3-alt"></i>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              Sql <i className="fa-solid fa-database"></i>
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              Node <i className="fa-brands fa-node"></i>
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
              Responsibility
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              Leadership
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              Teamwork
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              Creativity
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              Self-taught
            </div>
            <div className="skill border-solid hover:border-dotted rounded-md bg-sky-100">
              Organization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default desarrollo;
