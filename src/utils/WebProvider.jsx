import React, { Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./i18n";
import LoadingMain from "../components/utilsSection/LoadingMain";
const Modal = lazy(() => import("../components/ui/Modal"));
// const LoadingMain = lazy(() =>
//   import("../components/utilsSections/LoadingMain")
// );

const WebProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { loading, ui_modal_show, ui_modal_body } = useSelector((s) => s);
  const closeModal = () => {
    dispatch({ type: "SET_CLOSE_MADAL" });
  };
  return (
    <>
      <div>
        {children}
        <Suspense>{loading && <LoadingMain />}</Suspense>
        <Suspense>
          <Modal
            is_open={ui_modal_show}
            onClose={closeModal}
            body={ui_modal_body}
          />
        </Suspense>
      </div>
    </>
  );
};
export default WebProvider;
