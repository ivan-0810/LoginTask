const transition01 ={ duration: 0.1,ease: 'easeInOut'}
const transition02 ={ duration: 0.2,ease: 'easeInOut'}
const transition03 ={ duration: 0.3,ease: 'easeInOut'}
const transition04 ={ duration: 0.4,ease: 'easeInOut'}

export const bottomToTopVariants = {
  initial: { y: "100%",  },
  enter: { y: "0",transition: transition03 },
  exit: { y: '100%', transition: transition03 }
};
export const topToBottomVariants = {
    initial: { y: "-100%",  },
    enter: { y: "0",transition: transition03 },
    exit: { y: '-100%', transition: transition03 }
  };

  export const enter_Y_exit_OP = {
    initial: { y: "100%", opacity:1 },
    enter: { y: "0",opacity:1,transition: transition01 },
    exit: {y: '-100%', opacity: 0, transition: transition04}
  };