import { FC } from "react";

const LetsTalk: FC = () => {
  const text = "LET'S TALK - ";
  const letterSpacing = 5.4;

  return (
    <a
      href={"https://calendly.com/tappersstudios/30min"}
      target={"_blank"}
      className={`
        fixed right-[10px] bottom-[110px] 
        rounded-[50%] z-[19] 
        bg-center bg-no-repeat
        w-[120px] h-[120px] 
        sm:w-[150px] sm:h-[150px] 
        lg:w-[200px] lg:h-[200px]
      `}
      style={{
        background: `url("/img/logo.png") center center / 40% no-repeat`,
      }}
    >
      <div className={"animate-spin"}>
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text fill="white" fontSize="14" fontWeight="bold">
            <textPath
              href="#circlePath"
              startOffset="50%"
              textAnchor="middle"
            >
              {text
              .repeat(5)
              .split("")
              .map((char, index) => (
                <tspan key={index} dx={index > 0 ? letterSpacing : 0}>
                  {char}
                </tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>
    </a>
  );
};

export default LetsTalk;
