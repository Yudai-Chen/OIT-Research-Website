import React, { useState } from "react";
import QueryBuilder from "../components/QueryBuilder";

import { Layout, Row, Col, Divider } from "antd";

import Visualizer from "./Visualizer";
import PropertySelector from "../components/PropertySelector";
import TemplateSelector from "../components/TemplateSelector";

const Explorer = (props) => {
  const [availableProperties, setAvailableProperties] = useState();
  const [activeProperties, setActiveProperties] = useState([]);

  const { Header, Footer, Sider, Content } = Layout;

  const HORIZONTAL_GUTTER = 48;
  const VERTICAL_GUTTER = 8;
  const LEFT_SPAN = 4;
  const RIGHT_SPAN = 20;

  return (
    <>
      <Row gutter={[HORIZONTAL_GUTTER, VERTICAL_GUTTER]}>
        <Col span={LEFT_SPAN}>
          <TemplateSelector setAvailableProperties={setAvailableProperties} />
        </Col>
        <Col span={RIGHT_SPAN}>
          <PropertySelector
            availableProperties={availableProperties}
            setActiveProperties={setActiveProperties}
          />
        </Col>
      </Row>

      <Row gutter={[HORIZONTAL_GUTTER, VERTICAL_GUTTER]}>
        <Col span={LEFT_SPAN}>
          <QueryBuilder activeProperties={activeProperties} />{" "}
        </Col>
        <Col span={RIGHT_SPAN}>
          <Visualizer activeProperties={activeProperties} />
        </Col>
      </Row>
    </>
  );
};

export default Explorer;
