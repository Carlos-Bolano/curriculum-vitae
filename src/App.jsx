
function App() {
  

  return (
    <article className="cv max-w-[1100px] mx-auto p-4 md:p-8">
    {/* <!-- Profile --> */}
    <div className="grid grid-cols-12 gap-4 mb-4">
      <section className="col-span-12 md:col-span-4 xl:col-span-3">
        <img
          src="yo2.jpg"
          className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl mb-4"
        />
      </section>
      <section className="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-8">
        {/* <!-- About --> */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold">Carlos Bolaño</h1>
          <p className="md:text-2xl text-gray-500">Front-end Developer</p>
        </div>
        <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2">
          Perfil
        </h3>
        <p className="text-gray-500">
        Desarrollador web front-end con 1 año de experiencia desarrollando proyectos con tecnologias como html, css, JavaScript, React js, Node js y flask. Uso de herramientas como git, githud, visual studio code y la terminal. Tengo conocimientos basicos de Back-end, bases de datos (no relacionales), creacion de API REST y el consumo de Apis del lado del cliente
        </p>
       
      </section>
    </div>
  
    <div className="grid grid-cols-12 gap-4 mb-4">
      <section className="col-span-12 md:col-span-4 xl:col-span-3">
        {/* <!-- Education --> */}
        <div className="bg-[#fbede0] rounded-tl-3xl p-8 mb-4">
          <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
            Educación
          </h3>
          <div className="mb-6">
            <p className="text-gray-500 text-sm">2021 - 2022</p>
            <h4 className="font-medium">Desarrollador Web </h4>
            <p className="text-gray-500 text-sm">
              Universidad del Norte
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">2012 - 2014</p>
            <h4 className="font-medium">Nombre del titulo</h4>
            <p className="text-gray-500 text-sm">
              Nombre de la universidad
            </p>
          </div>
        </div>
        {/* <!-- Contact --> */}
        <div className="bg-[#fbebeb] rounded-tr-3xl p-8">
          <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
            Contacto
          </h3>
          <div className="mb-6">
            <h4 className="font-medium">Celular</h4>
            <p className="text-gray-500 text-sm">+57 3219750842</p>
          </div>
          <div className="mb-6">
            <h4 className="font-medium">Email</h4>
            <p className="text-gray-500 text-sm">bolanoscarlos899@gmail.com</p>
          </div>
          <div className="mb-6">
            <h4 className="font-medium">Dirección</h4>
            <p className="text-gray-500 text-sm">Magangue-Bolivar</p>
            <p className="text-gray-500 text-sm">Colombia</p>
          </div>
          <div>
            <h4 className="font-medium">Sitio Web</h4>
            <p className="text-gray-500 text-sm">https://carlosbolaño.com</p>
          </div>
        </div>
      </section>
      <section className="col-span-12 md:col-span-8 xl:col-span-9">
        {/* <!-- Experience --> */}
        <div className="bg-[#f8f3ef] rounded-tl-3xl rounded-br-3xl p-8 mb-4">
          <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
            Experiencia
          </h3>
          <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
            <div className="text-gray-500 text-sm w-full md:w-[30%]">
            <p>2021 - 2022</p>
              <p>Universidad del norte</p>
            </div>
            <div className="w-full md:w-[70%]">
              <h4 className="font-semibold mb-2">Desarrollador Front-end</h4>
              <p className="text-gray-500 text-sm mb-2">
                Desarrolle en colaboracion de 3 grandes personas una aplicacion de recogidas de paquetes usando el stack MERN, donde llevamos el proyecto desde cero a despliegue bajo la metodologia scrum
              </p>
              <p className="text-gray-500 text-sm ">
                Trabaje en colaboracion de 3 grandes personas una aplicacion de mensajeria electronica usando flask (framework de python) donde llevamos el proyecto desde cero a despliegue bajo la metodologia scrum
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
            <div className="text-gray-500 text-sm w-full md:w-[30%]">
              <p>2020 - 2021</p>
              <p>universidad del norte </p>
            </div>
            <div className="w-full md:w-[70%]">
              <h4 className="font-semibold">Desarrollador Web</h4>
              
              <p className="text-gray-500 text-sm">
                * Desarrolle 2 sitios web usando HTML, CSS y JavaScript bajo la metodologia scrum donde semanalmente presentaba un sprint con el avance del proyecto
              </p>
            </div>
          </div>
          
        </div>
        {/* <!-- Skills --> */}
        <div className="bg-[#fbede0] rounded-tr-3xl rounded-bl-3xl p-8 mb-4">
          <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
            Habilidades
          </h3>
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10 mb-4">
            <div className="flex items-center justify-between lg:justify-start gap-4">
              <span>HTML</span>{" "}
              <div className="flex items-center gap-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
              </div>
            </div>
            <div className="flex items-center justify-between lg:justify-start gap-4">
              <span>CSS</span>{" "}
              <div className="flex items-center gap-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
              </div>
            </div>
            <div className="flex items-center justify-between lg:justify-start gap-4">
              <span>JavaScript</span>{" "}
              <div className="flex items-center gap-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" 
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row :items-center gap-2 lg:gap-10">
            <div className="flex items-center justify-between lg:justify-start gap-4">
              <span>React js</span>{" "}
              <div className="flex items-center gap-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
              </div>
            </div>
            <div className="flex items-center justify-between lg:justify-start gap-4">
              <span>Git - Githud</span>{" "}
              <div className="flex items-center gap-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="opacity-[.2]"height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
              </div>
            </div>
            <div className="flex items-center justify-between lg:justify-start gap-4">
              <span>Dribbble</span>{" "}
              <div className="flex items-center gap-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                      </g>
                  </svg>
              </div>
            </div>
          </div>
        </div>
         <section className="bg-[#fbede0] rounded-tr-3xl rounded-bl-3xl p-8">
              <h5> links:</h5>
              <p>https://github.com/Carlos-Bolano - https://web.whatsapp.com/ </p>
          </section>
      </section>
      {/* links */}
     
    </div>
  </article>
  )
}

export default App
