import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
// import { FontAwesomeIcon } from "font-awesome";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// import "@fontsource/amiri";
import { SiMinutemailer } from "react-icons/si";
import { HiOutlineDownload } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosMailOpen } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data: any) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      //   await emailjs.send(
      //     process.env.REACT_APP_SERVICE_ID,
      //     process.env.REACT_APP_TEMPLATE_ID,
      //     templateParams,
      //     process.env.REACT_APP_USER_ID
      //   );
      await emailjs.send(
        "service_67457x8",
        "template_g6er89i",
        templateParams,
        "V9FiYPkfj9TMFJR-e"
      );

      reset();
      // toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-[#0A182E] text-[#1EC08F] flex justify-evenly h-screen items-center p-20">
      <div className="">
        <p className=" mb-14 text-6xl font-bold ">
          <i> Contact Me </i>
        </p>
        <div className="flex items-center text-xl text-[#8892B0]  mb-6">
          {/* <i className="fa-solid fa-phone-volume"></i> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-phone" /> */}
          <BiPhoneCall />
          <p className="px-3 mb-1 font-sans font-semibold">+8801793439379</p>
        </div>
        <div className="flex text-xl text-[#8892B0] items-center mt-6">
          {/* <i className="fa-solid fa-envelope-open-text"></i> */}
          <IoIosMailOpen />
          <p className="px-3 font-sans  font-semibold">kayes.ek8@gmail.com</p>
        </div>
        <div className="flex text-xl text-[#8892B0] items-center my-6">
          {/* <i className="fa-solid fa-location-dot"></i> */}
          <FaRegAddressCard />
          <p className="px-3 font-sans  font-semibold">
            1230 Uttara, Dhaka-Bangladesh
          </p>
        </div>
        <p className="text-[#b7bccb] font-semibold text-xl">
          I’m currently looking for an opportunities.
        </p>
        <p className=" text-[#b7bccb] font-semibold text-xl">
          Feel free to contact with me or drop your valuable word.
        </p>
        <div className="mt-10">
          <a
            href="resume.pdf"
            className="btn border-2 text-[#4AB9A7] bg-[#0A182E] font-semibold border-[#7DD3FC] normal-case hover:text-black hover:bg-[#7DD3FC]"
            download
          >
            <i className="text-[16px] pr-2"> Download Resume</i>{" "}
            <HiOutlineDownload className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="ContactForm ">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <div className="contactForm rounded-2xl bg-[#1F2937]">
                {/* <div className='contactForm m-10 rounded-2xl bg-[#030f27]'> */}
                <form
                  className="p-20"
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <h1 className=" xl:text-5xl text-xl font-bold text-center py-4">
                    <i> be with me... </i>
                  </h1>
                  {/* <h1 className='text-4xl text-yellow-300 mt-8 lg:text-left  md:text-7xl kayes  font-bold mb-10 whitespace-nowrap text-center py-4'> Send Me Your Feedback  </h1> */}
                  <div className="row formRow flex">
                    <div className="col-6 py-4 mr-5 ">
                      <input
                        type="text"
                        // name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        className="border-2 py-2 px-4 rounded-lg border-[#7DD3FC] form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
                        placeholder="Name"
                      ></input>
                      {errors.name && (
                        <span className="errorMessage">
                          {/* {errors.name.message} */}
                        </span>
                      )}
                    </div>
                    <div className="col-6 py-4 ml-5">
                      <input
                        type="email"
                        // name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="border-2 py-2 px-4 rounded-lg border-[#7DD3FC] form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
                        placeholder="Email address"
                      ></input>
                      {errors.email && (
                        <span className="errorMessage">
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className="row formRow py-2">
                    <div className="col">
                      <input
                        type="text"
                        // name="subject"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Please enter a subject",
                          },
                          maxLength: {
                            value: 75,
                            message: "Subject cannot exceed 75 characters",
                          },
                        })}
                        className="border-2 w-full py-2 px-4 rounded-md border-[#7DD3FC] form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
                        placeholder="Subject"
                      ></input>
                      {errors.subject && (
                        <span className="errorMessage">
                          {/* {errors.subject.message} */}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className="row formRow py-4">
                    <div className="col">
                      <textarea
                        rows={3}
                        // name="message"
                        {...register("message", {
                          required: true,
                        })}
                        className="border-2 w-full px-4 pt-4 rounded-xl border-[#7DD3FC] form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
                        placeholder="Message"
                      ></textarea>
                      {errors.message && (
                        <span className="errorMessage">
                          Please enter a message
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    className="submit-btn border-2 border-[#1EC08F] rounded-lg hover:bg-[#7DD3FC] hover:border-[#7DD3FC] hover:text-black hover:font-bold"
                    type="submit"
                  >
                    {/* <i className="fa-solid fa-envelope-circle-check pr-2"></i> */}
                    <div className="flex justify-evenly items-center w-[150px]  py-2">
                      {/* <img className="w-8 h-7" src="email-svg.svg" alt="" /> */}
                      <SiMinutemailer className="text-lg" />
                      <h1 className="font-bold uppercase"> Drop </h1>
                    </div>
                  </button>
                </form>
              </div>

              {/* <ToastContainer /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
