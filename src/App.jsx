import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Container from "./Components/Container";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonConatiner";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [disp, setnewdisp] = useState("");
  const calculatorRef = useRef(null);
  const displayRef = useRef(null);
  const buttonsRef = useRef(null);
  const buttons = [
    "C",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "=",
    "1",
    "2",
    "3",
    "0",
    ".",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        calculatorRef.current,
        { autoAlpha: 0, y: 50, scale: 0.92, rotateX: -18 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "power4.out",
        },
      );

      gsap.fromTo(
        displayRef.current,
        { autoAlpha: 0, x: -16 },
        { autoAlpha: 1, x: 0, duration: 0.7, delay: 0.35, ease: "power2.out" },
      );

      gsap.fromTo(
        "[data-calc-button]",
        { autoAlpha: 0, y: 20, scale: 0.85 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "back.out(1.9)",
          stagger: { amount: 0.45, from: "start" },
          delay: 0.45,
        },
      );
    }, calculatorRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!displayRef.current) return;
    gsap.fromTo(
      displayRef.current,
      { boxShadow: "0 0 0 rgba(118, 232, 255, 0)", scale: 1 },
      {
        boxShadow: "0 0 34px rgba(118, 232, 255, 0.22)",
        scale: 1.015,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      },
    );
  }, [disp]);

  return (
    <Container containerRef={calculatorRef}>
      <Display text={disp} displayRef={displayRef}></Display>
      <ButtonContainer
        list={buttons}
        disp={disp}
        setnewdisp={setnewdisp}
        buttonsRef={buttonsRef}
      ></ButtonContainer>
      <Analytics />
    </Container>
  );
}

export default App;
