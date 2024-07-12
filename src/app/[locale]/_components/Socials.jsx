import Image from "next/image";
import { StyledIcon } from "../_styled";

const Socials = () => {
  const socials = ["twitter", "facebook", "instagram", "github"];
  return (
    <ul className="list-unstyled d-flex gap-3">
      {socials.map((social, index) => (
        <li key={index}>
          <StyledIcon
            className={`${
              social === "facebook" ? "bg-black" : "bg-white"
            } rounded-circle border border-secondary-subtle p-3 d-flex justify-content-center align-items-center`}
          >
            <Image
              src={`/icons/${social}-icon.png`}
              alt={social}
              width={20}
              height={20}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </StyledIcon>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
