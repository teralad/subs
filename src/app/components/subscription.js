import React, { useState } from "react";
import { Switch } from "antd";
import Toast from "react-bootstrap/Toast";
import PropTypes from "prop-types";

let Subscription = (props) => {
  const [title, setTitle] = useState(props.msg.title);
  const [body, setBody] = useState(props.msg.body);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  function toggleChange(changed) {
    setToggle(changed);
    setShow(true);
  }

  return (
    <div>
      <div className="sub">
        <div className="sub-titlebar">
          <div className="sub-title">{title}</div>
          <div className="sub-toggle">
            <Switch onClick={toggleChange} />
          </div>
        </div>
        <div className="sub-body">{body}</div>
      </div>
      <div className="footer">
        <Toast
          style={{
            height: "60px",
            lineHeight: "60px",
          }}
          onClose={() => setShow(false)}
          show={show}
          delay={1000}
          autohide
        >
          <Toast.Body>Your changes have been saved!</Toast.Body>
        </Toast>
      </div>
    </div>
  );
};

Subscription.propTypes = {
  msg: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default Subscription;
