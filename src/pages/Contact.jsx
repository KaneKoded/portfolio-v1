import { useEffect, useRef, useState } from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [isSent, setIsSent] = useState({ sent: false, errMsg: "" });
  const scrollToRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("sent") !== null) {
      setIsSent({ sent: true, errMsg: "" });
    }
  }, []);

  const handleSent = (bool, errMsg) => {
    setIsSent({ sent: bool, errMsg: errMsg });
    scrollToRef.current?.scrollIntoView();
  };

  return (
    <section
      id="contact"
      data-link="#contact"
      className="border-t-[0px] min-h-screen border-transparent bg-white"
    >
      <div
        ref={scrollToRef}
        className="w-full h-full min-h-screen flex flex-col md:flex-row items-center justify-center "
      >
        <div
          className={`[transition:all_0.5s] ${
            isSent.sent ? "lg:w-full " : "md:w-1/2 lg:w-2/5 "
          } p-5 text-pretty self-stretch text-center bg-white flex flex-col items-center justify-center space-y-4`}
        >
          <h2
            className="pt-7 md:pt-0 font-RobotoCond font-semibold capitalize text-neutral-400 text-[2.8rem] leading-[3.5rem] bg-clip-text text-transparent bg-gradient-pattern"
            data-aos="zoom-in-down"
          >
            {isSent.sent
              ? "Message Sent"
              : isSent.errMsg.length > 0
              ? "Uh oh!"
              : "Get In Touch"}
          </h2>
          <p
            className={`max-w-[520px] pr-1 ${
              isSent.errMsg.length > 0 && " text-red-600"
            }`}
            data-aos="zoom-in"
          >
            {isSent.sent
              ? "Thanks again for taking the time to visit. I'm really looking forward to meeting with you."
              : isSent.errMsg.length > 0
              ? isSent.errMsg
              : "Thank you for taking the time to visit. If you like what you see, please send me a message."}
          </p>

          <p
            className="text-brand-cyan font-medium text-lg mx-auto"
            data-aos="zoom-in-up"
          >
            {isSent.sent
              ? ""
              : isSent.errMsg.length > 0
              ? "Please try again."
              : "I look forward to hearing from you."}
          </p>
        </div>

        <div
          className={`  
            ${
              isSent.sent
                ? " w-0 md:w-0 lg:w-0 [transition:width_0.5s_ease-out] "
                : " w-full md:w-1/2 lg:w-3/5 self-stretch flex flex-col justify-center bg-gradient-pattern"
            }`}
        >
          <div
            className={`${
              isSent.sent
                ? "hidden"
                : "pl-3 pr-6 sm:p-8 lg:p-14 w-full h-full flex flex-col justify-center bg-dot-pattern bg-[length:450px_450px]"
            }`}
          >
            <h1 className="pt-10 pb-5 lg:pt-0 md:pb-7 font-RobotoCond font-medium capitalize text-white text-center text-[1.8rem] leading-none">
              Contact Form
            </h1>
            <ContactForm
              iconColor="#ffffff"
              errColor="#ffffff"
              handleSent={handleSent}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
