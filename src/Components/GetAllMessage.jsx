import React from "react";

const GetAllMessage = (props) => {
  const { contactDet } = props;
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="card-body">
          <div className="cardContent">
            <div className="card-title">
              <p className="ghead">
                <strong className="str"> Message : </strong>
                {contactDet.message}
              </p>
              {/* <p className="headValue"></p> */}
            </div>
            <div className="card-text ">
              <p className="gplayer">
                <strong className="str"> Sender : </strong>
                {contactDet.name}
              </p>
            </div>
            <p className="card-text ">
              <p className="gplayer">
                <strong className="str"> Email : </strong>
                {contactDet.email}
              </p>
            </p>
            <div className="card-text ">
              <p className="gdate">
                <strong className="str">Messaged On : </strong>
                {contactDet.messagedOn.toLocaleString("en-US", {
                  timeZone: "Asia/Kolkata",
                })}
              </p>

              <p className="dateValue"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetAllMessage;
