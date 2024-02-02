import PropTypes from "prop-types";
import { ReactNode, RefObject } from "react";

const ResponsiveBox = (props: {
  children: ReactNode,
  classNames: string,
  id: string,
  elementRef?: RefObject<HTMLDivElement>
}) => {
  const { children, classNames, id, elementRef } = props;

  return (
    <div
      id={id}
      ref={elementRef}
      className={`relative flex flex-col justify-start items-start w-full h-auto p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out ${classNames}`}
    >
      {children}
    </div>
  );
};

ResponsiveBox.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
  id: PropTypes.string,
  elementRef: PropTypes.any,
};

export default ResponsiveBox;
