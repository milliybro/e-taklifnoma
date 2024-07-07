import React from "react";
import CloseIcon from "../../svg/CloseIcon";
import Card8Radius from "./Card8Radius";
import OverflowHidden from "./OverflowHidden";

const Modal = ({ is_open, onClose, body }) => {
  return (
    <>
      {is_open ? (
        <OverflowHidden>
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-9999">
            <Card8Radius className="border-none sm:max-w-[593px] w-[calc(100%_-_30px)] min-h-32 relative max-h-[90vh] overflow-y-auto">
              <div className="w-full">
                <div
                  onClick={onClose}
                  className="absolute top-4 right-4 w-[32px] h-[32px] border border-greyMercury rounded-[7px] flex justify-center items-center cursor-pointer"
                >
                  <CloseIcon width="12px" height="12px" />
                </div>

                {body}
              </div>
            </Card8Radius>
          </div>
        </OverflowHidden>
      ) : null}
    </>
  );
};

export default Modal;
