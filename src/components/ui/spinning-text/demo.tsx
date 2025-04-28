
import React from "react";
import { SpinningText } from "./component";

function SpinningTextBasic() {
  return (
    <SpinningText
      radius={5}
      fontSize={1.2}
      className="font-medium leading-none"
    >
      {`pre-order • pre-order • pre-order • `}
    </SpinningText>
  );
}

function SpinningTextCustomTransition() {
  return (
    <SpinningText
      radius={7}
      fontSize={1}
      duration={6}
      transition={{ ease: "easeInOut", repeat: Infinity }}
      className="font-mono"
    >
      {`motion-primitives • motion-primitives • `}
    </SpinningText>
  );
}

function SpinningTextCustomVariants() {
  return (
    <SpinningText
      radius={5.5}
      fontSize={1}
      variants={{
        container: {
          hidden: {
            opacity: 1,
          },
          visible: {
            opacity: 1,
            rotate: 360,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 6,
              repeat: Infinity,
              staggerChildren: 0.03,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
          },
        },
      }}
      className="font-[450]"
    >
      {`pre-order • pre-order • pre-order • `}
    </SpinningText>
  );
}

export { SpinningTextBasic, SpinningTextCustomTransition, SpinningTextCustomVariants };
