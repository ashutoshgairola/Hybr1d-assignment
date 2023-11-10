import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/notfound.json";

export default function ErrorPage({ error }) {
  const effectRan = useRef(false);

  useEffect(() => {
    if (!effectRan.current) {
      const animationContainer = document.getElementById("lottie-animation");
      lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => (effectRan.current = true);
  }, []);

  let errorMessage = "The page you are looking for does not exist.";

  if (error) {
    if (error.status === 404) {
      errorMessage = "404 - Page Not Found";
    } else if (error.status === 500) {
      errorMessage = "500 - Internal Server Error";
    } else {
      errorMessage = "An unexpected error occurred.";
    }
  }

  return (
    <div className="flex flex-col mb-20 items-center justify-center">
      <div id="lottie-animation" className="w-96 h-96 mx-auto"></div>
      <div className="text-center m-4">
        <h1 className="text-4xl text-lilac font-bold mb-4">{errorMessage}</h1>

        <a
          href="/"
          className="text-persian-pink hover:text-xl text-lg inline-block mb-4"
        >
          Go back to the home page
        </a>
      </div>
    </div>
  );
}
