import { useState, useEffect } from "react";

const Completion = ({
  completion,
  color,
}) => {
  const [percentData, setPercentData] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPercentData(isNaN(completion) ? (0).toFixed(1) : completion);
    }, 500);
  }, [completion]);

   let radius = 30;
  let circumference = radius * 2 * Math.PI;


  return (
    <div
      className="mr-4 relative"
    >
      <svg className="relative z-10" width="70" height="70">
        <g>
          <circle
            stroke={color}
            strokeWidth="5"
            fill="transparent"
            r={radius}
            cx="35"
            cy="35"
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset:
                circumference - (percentData / 100) * circumference,
              transition: "all 1s ease-in-out",
              transformOrigin: "center",
              transform: "rotate(-90deg)",
            }}
            strokeLinecap="round"
            className="origin-center"
          ></circle>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            stroke={color}
            strokeWidth="0.5"
            dy=".3em"
            fontSize="16"
            fontWeight={600}
          >
            {percentData}%
          </text>
        </g>
      </svg>
      <svg className="absolute top-0" width="70" height="70">
        <circle
          stroke="#efefef"
          strokeWidth="5"
          fill="transparent"
          r={radius}
          cx="35"
          cy="35"
        />
      </svg>
    </div>
  );
};

export default Completion;
