import { Link } from "react-router-dom";
import { createContext, useContext, useState } from "react";

const DropDownContext = createContext();

const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="relative">{children}</div>
    </DropDownContext.Provider>
  );
};

const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);

  return (
    <>
      <div onClick={toggleOpen}>{children}</div>

      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

const Content = ({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white",
  children,
}) => {
  const { open, setOpen } = useContext(DropDownContext);

  let alignmentClasses = "origin-top";

  if (align === "left") {
    alignmentClasses = "origin-top-left start-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right end-0";
  }

  let widthClasses = width === "48" ? "w-48" : "";

  return (
    <>
      {open && (
        <div
          className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
          onClick={() => setOpen(false)}
          style={{
            transition: "all 0.2s ease-out",
            opacity: open ? 1 : 0,
            transform: open ? "scale(1)" : "scale(0.95)",
          }}
        >
          <div
            className={`rounded-md ring-1 ring-black ring-opacity-5 ${contentClasses}`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

const DropdownLink = ({ className = "", children, ...props }) => {
  return (
    <Link
      {...props}
      className={
        "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none " +
        className
      }
    >
      {children}
    </Link>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
