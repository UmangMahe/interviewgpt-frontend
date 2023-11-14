/* eslint-disable react/prop-types */
import { Col, Divider, Image, Row } from "antd";
import React from "react";
import { Card } from "react-bootstrap";
import Placeholder from "/images/placeholder.png";

const CustomCard = ({
  color = "#fff",
  date,
  title,
  description,
  icon,
  last = false,
  ...props
}) => {
  return (
    <Col span={18}>
      <Row gutter={12} align={"middle"}>
        <Col span={2} className="d-flex justify-content-center">
          <div
            style={{ backgroundColor: color, borderColor: color }}
            className="object"
          >
            <Image preview={false} src={icon} />
          </div>
          {!last && (
            <div className="line">
              <Divider
                style={{ height: 130, borderColor: color }}
                type="vertical"
              />
            </div>
          )}
        </Col>
        <Col span={22}>
          <Card className="card">
            <Card.Body>
              <Row className="h-100">
                <Col
                  className="card-left"
                  style={{ backgroundColor: color }}
                  span={5}
                >
                  <Card.Text>{date}</Card.Text>
                </Col>
                <Col className="card-right" span={19}>
                  <Card.Title style={{ color }} className="mb-3 mt-1">
                    {title}
                  </Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default CustomCard;
