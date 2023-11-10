import { useEffect } from "react";
import lottie from "lottie-web";
import loadingAnimationData from "../assets/skeleton.json";

export default function Loading() {
  useEffect(() => {
    const animationContainer = document.getElementById("lottie-loading");
    lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingAnimationData,
    });
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        id="lottie-loading"
        style={{ width: "50rem" }}
      ></div>
    </div>
  );
}
