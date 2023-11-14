import { Col, Divider, Row } from "antd";
import React from "react";
import { Container } from "react-bootstrap";

function Footer(props) {
  return (
    <div className="footer">
      <div className="divider">
        <Divider />
      </div>
      <div className="footer-body">
        <Row>
          <Col span={10}>
            <div className="socials">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-instagram"></i>
              {/* <i className="fa fa-threads"></i> */}
              <i className="fa fa-twitter"></i>
              <i className="fa fa-linkedin"></i>
              <i className="fa fa-quora"></i>
            </div>
          </Col>
          <Col span={14}>
            <div className="copyright">
              {new Date().getUTCFullYear()} <i className="fa fa-copyright"></i>{" "}
              All rights reserved by Bluetick Consultants LLP
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
