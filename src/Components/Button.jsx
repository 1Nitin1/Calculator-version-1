import styles from "./Button.module.css";
import gsap from "gsap";

const evaluateExpression = (expression) => {
  if (!/^[\d+\-*/.\s()]+$/.test(expression)) {
    throw new Error("Invalid expression");
  }

  const execute = new Function(`return (${expression})`);
  const result = execute();

  if (!Number.isFinite(result)) {
    throw new Error("Invalid result");
  }

  return result;
};

const Button = ({ button, setnewdisp, disp }) => {
  const isOperator = ["+", "-", "*", "/"].includes(button);
  const isEquals = button === "=";
  const isClear = button === "C";
  const isZero = button === "0";
  const isDecimal = button === ".";

  const buttonClasses = [
    styles.button,
    isOperator ? styles.operator : "",
    isEquals ? styles.equals : "",
    isClear ? styles.clear : "",
    isZero ? styles.zero : "",
    isDecimal ? styles.decimal : "",
  ]
    .join(" ")
    .trim();

  const handleClick = (event) => {
    gsap.fromTo(
      event.currentTarget,
      { scale: 1, filter: "brightness(1)" },
      {
        scale: 0.9,
        filter: "brightness(1.45)",
        duration: 0.08,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      },
    );

    if (button === "C") {
      setnewdisp("");
    } else if (button === "=") {
      try {
        const ans = evaluateExpression(disp || "0");
        setnewdisp(String(ans));
      } catch {
        setnewdisp("Error");
      }
    } else {
      const value = disp === "Error" ? button : disp + button;
      setnewdisp(value);
    }
  };

  return (
    <button className={buttonClasses} onClick={handleClick} data-calc-button>
      {button}
    </button>
  );
};
export default Button;
