import { StyledFooterHeading } from "../../_styled";

const FooterColumn = ({ title, items }) => {
  return (
    <ul className="col-md-2 col-6 list-unstyled">
      <StyledFooterHeading className=" mb-3 text-uppercase">
        {title}
      </StyledFooterHeading>
      {items.map((item, index) => (
        <li key={index} className=" mb-2">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FooterColumn;
