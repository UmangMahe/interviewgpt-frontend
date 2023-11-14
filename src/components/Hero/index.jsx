import { Button, Col, Image, Row } from "antd";
import React from "react";
import Placeholder from "/images/placeholder.png";

function Hero(props) {
  return (
    <section className="hero">
      <Row align={"middle"} gutter={12} justify={"center"} className="pt-0 h-100">
        <Col lg={12} md={24} className="">
          <div className="d-flex flex-column">
            <div className="hero-heading">
              <h1 className="primary">InterviewGPT</h1>
              <h1>Empowering Recruiters with AI-Driven Interviews</h1>
            </div>
            <div className="hero-text">
              <p>Revolutionize Your Hiring Process with InterviewGPT</p>
              <p>
                AI-Powered Question Generation for Accurate Candidate Assessment
              </p>
            </div>
            <Row>
              <Col span={7}>
                <Button type="primary" block>
                  Try Now
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={12} md={24} className="d-flex align-items-center pt-5">
          <div className="hero-image">
            <Image height={300} width={550} preview={false} src={Placeholder} />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Hero;
