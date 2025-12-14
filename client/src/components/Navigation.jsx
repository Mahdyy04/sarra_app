/* eslint-disable react/prop-types */
import { Link } from "react-router";
import "../assets/styles/navigation.css";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export default function Navigation({ links }) {
  return (
    <div className="navigation">
      {links.previous && (
        <Link to={links.previous.path} className="previous">
          {<BsChevronDoubleLeft />} {links.previous.title}
        </Link>
      )}
      {links.next && (
        <Link to={links.next.path} className="next">
          {links.next.title} {<BsChevronDoubleRight/>}
        </Link>
      )}
    </div>
  );
}
