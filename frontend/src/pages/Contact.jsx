export default function Contact() {
  return (
    <div>
      <div className="flex flex-col  text-slate-300 ml-[35%] md:ml-[50%] py-[18%] lg:py-[8%]">
        <h3 className="text-4xl lg:text-5xl">Energies cosmiques</h3>
        <h4 className="text-3xl my-4 lg:text-4xl">Marion Patou</h4>

        <div className="lg:mt-4">
          <a
            href="https://www.instagram.com/_energies_cosmiques_/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
          >
            <i className="fa-brands fa-instagram text-4xl mb-4 mr-4"></i>
            <span className="text-lg lg:text-2xl">_energies_cosmiques_</span>
          </a>
        </div>

        <div className="lg:mt-4">
          <a
            href="https://www.facebook.com/energiescosmiques"
            target="_blank"
            className="link link-underline"
          >
            <i className="fa-brands fa-facebook text-4xl mb-4 mr-4"></i>
            <span className="text-lg lg:text-2xl">_energies_cosmiques_</span>
          </a>
        </div>

        <div className="lg:mt-4">
          <a
            href="mailto:contact@en_cosmiques.fr"
            target="_blank"
            className="link link-underline"
          >
            <i className="fa-solid fa-envelope text-4xl mb-4 mr-4"></i>
            <span className="text-lg lg:text-2xl">contact@en_cosmiques.fr</span>
          </a>
        </div>

        <div className="lg:mt-4">
          <a href="tel:0601020304">
            <i className="fa-solid fa-phone text-4xl mb-4 mr-4"></i>
            <span className="text-lg lg:text-2xl">06 01 02 03 04</span>
          </a>
        </div>
      </div>
    </div>
  );
}
