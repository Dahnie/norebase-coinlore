import { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "./ErrorHandler.module.css";
import cancelIcon from "../../assets/svg/cancel-icon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorHandlerType } from "../../models/ToastHandlerTypes";

interface ErrorHandlerProps {
  errorHandlerObj: ErrorHandlerType;
  className?: string;
}

const ErrorHandler = function ({
  errorHandlerObj,
  className,
}: ErrorHandlerProps) {
  // Functions, States and Variables
  // Ref
  const errorHandlerRef = useRef<HTMLDivElement | null>(null);
  // States
  const [show, setShow] = useState(false);
  const [errorHandlerOffsetWidth, setErrorHandlerOffsetWidth] = useState(0);

  // Functions
  // Handle Set Error Handler Offset Width
  const handleSetErrorHandlerOffsetWidth = function () {
    if (errorHandlerRef.current) {
      setErrorHandlerOffsetWidth(errorHandlerRef.current.offsetWidth / 2);
    }
  };

  // UseEffect
  useLayoutEffect(() => {
    // Set the offset width of the error handler on screen resize
    window.addEventListener("resize", handleSetErrorHandlerOffsetWidth);

    handleSetErrorHandlerOffsetWidth();
    return () => {
      window.removeEventListener("resize", handleSetErrorHandlerOffsetWidth);
    };
  }, []);

  useEffect(() => {
    setShow(false);
    if (errorHandlerObj.hasError) {
      setShow(true);
    }
  }, [errorHandlerObj]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={errorHandlerRef}
          className={`${styles.toast_handler_container} ${className}`}
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          style={{ left: `calc(50% - ${errorHandlerOffsetWidth}px)` }}
        >
          <div className={styles.toast_handler_header}>
            {/* Left Column */}
            <div className={styles.toast__left_col}>
              <div className={styles.toast_handler_title}>
                {errorHandlerObj.message}
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.cancel_button_wrapper}>
              <button onClick={() => setShow(false)}>
                <img src={cancelIcon} alt="cancel icon" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorHandler;
