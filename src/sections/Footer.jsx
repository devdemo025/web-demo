import { contactList } from "../constants";
import Reveal from "../components/Reveal";
import ContactBackground from "../components/Background/ContactBackground";
const Footer = () => {
  return (
    <div
      className="max-container w-full h-[300px] xl:bg-white md:bg-white max-md:bg-white max-sm:bg-transparent xl:relative md:relative max-md:relative max-sm:relative
       "
      id="contact"
    >
      <ContactBackground /*Line and dot background */ />
      <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative top-[48px] left-[16px]" />
      <div className="w-full pt-[70px] max-sm:pt-[10px] flex flex-1 flex-row max-sm:flex-col ">
        <div className="w-[30%] max-md:w-[50%] max-sm:w-full ">
          <Reveal>
            <h3
              className="font-monserrat text-4xl font-extrabold text-black-gray px-10
             max-sm:px-2 pt-1 max-sm:pt-10 max-sm:text-xl max-sm:pb-2"
            >
              LET'S CONNECT
            </h3>
          </Reveal>
        </div>

        <div
          className="bg-white  pt-1 w-[60%] max-sm:w-full flex flex-col flex-1 gap-10  
        max-sm:gap-4 max-sm:pt-10 max-sm:pb-[30px] max-sm:pl-5 relative"
        >
          <Reveal>
            <div>
              <h4 className="font-montserrat font-extrabold text-sm text-black-gray ">
                CONTACT
              </h4>
              {contactList.length > 0 && ( // Check if contactList is not empty
                <a href={contactList[0]?.href} target="_blank">
                  <p className="font-montserrat text-sm py-1">
                    {contactList[0]?.title}
                  </p>
                </a>
              )}
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h4 className="font-montserrat font-extrabold text-sm text-black-gray">
                ON THE WEB
              </h4>
              {contactList.slice(1, 4).map(
                (
                  contact,
                  index // Display elements 1 and 2
                ) => (
                  <a href={contact.href} target="_blank" key={index}>
                    <p className="font-montserrat text-sm py-1">
                      {contact.title}
                    </p>
                  </a>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
      <div className="flex justify-center mt-4 max-sm:mt-0 max-sm:bg-white relative">
        <p className="font-montserrat text-[12px] font-semibold text-black-gray ">
          © 2023 reyniel mahinay
        </p>
      </div>
    </div>
  );
};

export default Footer;
