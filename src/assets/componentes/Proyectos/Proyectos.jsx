import "./Proyectos.css";

const proyectos = () => {
  return (
    <div className="proyectos h-100 bg-stone-500 " id="proyectos">
      <div className="infoProyectos  text-center">
        <h1 className="titulos2  font-bold whitespace-pre-line text-center text-zinc-200 text-4xl">
          Recent Projects
        </h1>
        <div className="lates text-white">
          <p>
            These are the latest projects I've been working on{" "}
            <i className="fa-regular fa-heart"></i>
          </p>
        </div>
      </div>
      <div className="misProyectos  flex justify-around ">
        <div className="proyecto shadow-md bg-white m-4 rounded-md box-content h-50 w-45 p-4 border-2 text-center">
          <a
            href="https://retro-groove.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/retrogrove.JPG"
              className="rounded-md"
              alt="E-commerce"
            />
          </a>

          <h2 className="font-medium text-2xl">Retro Groove</h2>
          <p>
            Explore our e-commerce where music becomes a sensory experience.
            Discover vinyl records, CDs, and cassettes, each with a unique story
            and a sound that will transport you. From classics to used
            treasures, each piece is chosen with care. A frontend and backend
            built from scratch.
          </p>
        </div>
        <div className="proyecto bg-white m-4 rounded-md box-content h-50 w-45 p-4 border-2 text-center">
          <a
            href="https://github.com/HazelGuerra/softjobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/softjobs.JPG"
              className="rounded-md"
              alt="E-commerce"
            />
          </a>
          <h2 className="font-medium text-2xl">Softjobs</h2>
          <p>
            Here, trainees find opportunities and showcase their talent. Each
            profile is a story ready to take off in the professional world.
            Discover, connect, and progress with Softjobs. Welcome to your
            window into the job market! Worked on everything related to the
            backend and the database of this project.
          </p>
        </div>
        <div className="proyecto bg-white m-4 rounded-md box-content h-50 w-45 p-4 border-2 text-center">
          <a
            href="https://github.com/HazelGuerra/softjobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/pizza.JPG" className="rounded-md" alt="E-commerce" />
          </a>
          <h2 className="font-medium text-2xl">Pizzeria</h2>
          <p>
            Enjoy a hassle-free online shopping experience, exploring authentic
            flavors and enjoying fast deliveries. Welcome to Mi Rincón Pizzero,
            where customer satisfaction is the priority! Worked on the frontend
            of this project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default proyectos;
