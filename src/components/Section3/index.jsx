import { Col, Divider, Image, Row } from "antd";
import React from "react";
import { Card, Container } from "react-bootstrap";
import Placeholder from "/images/placeholder.png";
import CustomCard from "./CustomCard";
function Section3(props) {
  return (
    <section className="section3">
      <Row gutter={[0, 48]} justify={"center"}>
        <CustomCard
          date={"20-08-2019"}
          icon={Placeholder}
          color="#9150AC"
          title={"Breakfast"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus ducimus modi fugiat quisquam sequi maiores ea velit quo earum accusamus ut ab molestias nostrum, necessitatibus impedit reprehenderit culpa nam."
          }
        />

        <CustomCard
          date={"20-08-2019"}
          icon={Placeholder}
          color="#555AC0"
          title={"Lunch"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus ducimus modi fugiat quisquam sequi maiores ea velit quo earum accusamus ut ab molestias nostrum, necessitatibus impedit reprehenderit culpa nam."
          }
        />
        <CustomCard
          date={"20-08-2019"}
          icon={Placeholder}
          color="#25B37D"
          title={"Exercise"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus ducimus modi fugiat quisquam sequi maiores ea velit quo earum accusamus ut ab molestias nostrum, necessitatibus impedit reprehenderit culpa nam."
          }
        />
        <CustomCard
          date={"20-08-2019"}
          icon={Placeholder}
          color="#9150AC"
          title={"Breakfast"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus ducimus modi fugiat quisquam sequi maiores ea velit quo earum accusamus ut ab molestias nostrum, necessitatibus impedit reprehenderit culpa nam."
          }
          last
        />
      </Row>
    </section>
  );
}

export default Section3;
