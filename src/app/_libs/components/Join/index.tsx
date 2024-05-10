import { Button } from "../ui/button";

export default function Join() {
  return (
    <div
      className="bg-primary-darker relative my-20 flex w-full flex-col items-center justify-center gap-3 overflow-hidden py-40 font-grotesk text-4xl font-bold [clip-path:_polygon(0_25%,_100%_0%,_100%_75%,_0%_100%)]"
      id="join"
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-40 -top-20 z-[1] w-[400px]"
      >
        <path
          fill="none"
          stroke="#ffeec1"
          strokeWidth="1"
          d="M21.9,-37.4C29,-33.9,35.8,-29.2,42.2,-22.8C48.6,-16.4,54.5,-8.2,56.8,1.3C59,10.8,57.5,21.6,52.8,30.8C48.1,40.1,40.1,47.8,30.7,49.8C21.4,51.7,10.7,47.8,4.7,39.6C-1.2,31.5,-2.5,19,-9.5,15.7C-16.4,12.4,-29.1,18.3,-39.5,17.2C-49.8,16.1,-57.7,8.1,-55.9,1C-54.1,-6,-42.6,-12,-38.1,-23.1C-33.5,-34.2,-36,-50.3,-30.8,-54.9C-25.6,-59.5,-12.8,-52.5,-2.7,-47.8C7.4,-43.2,14.8,-40.8,21.9,-37.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-32 -right-20 z-[1] w-[400px]"
      >
        <path
          fill="none"
          stroke="#ffeec1"
          strokeWidth="1"
          d="M16.8,-24.5C31,-21,57.9,-35,73.8,-33.8C89.7,-32.7,94.4,-16.3,80.5,-8.1C66.5,0.2,33.9,0.5,23.9,11.7C13.8,23,26.5,45.4,26.3,53.9C26.1,62.5,13,57.3,2.1,53.6C-8.8,50,-17.6,47.8,-17.8,39.2C-18,30.7,-9.7,15.7,-14,8.1C-18.3,0.5,-35.2,0.3,-48.7,-7.8C-62.2,-15.8,-72.2,-31.7,-67.7,-38.9C-63.1,-46.1,-44,-44.6,-30.3,-48.5C-16.6,-52.3,-8.3,-61.3,-3.5,-55.3C1.3,-49.2,2.7,-28.1,16.8,-24.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="z-[2] flex flex-col items-center justify-center gap-3 lg:-rotate-6 xl:-rotate-[4deg]">
        <p className="text-primary-dark">Lets Join With Us!</p>
        <Button className="text-xl">Join Now</Button>
      </div>
    </div>
  );
}
