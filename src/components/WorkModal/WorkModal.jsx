import React, { useEffect, useState } from "react";
import "./WorkModal.scss";
import { client, urlFor } from "../../client";

const WorkModal = ({
  ImgURL,
  screenName,
  setShowModal,
  showModal,
  children,
}) => {
  const [screens, setScreens] = useState([]);
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  useEffect(() => {
    const query = '*[_type == "screens"]';

    client.fetch(query).then((data) => {
      setScreens(data);
      console.log("hola: ", screens);
    });
  }, []);

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}

          <button
            type="button"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Close
          </button>
        </section>
      </div>
    </>
  );
};

export default WorkModal;
