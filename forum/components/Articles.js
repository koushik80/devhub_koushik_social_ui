import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Article from "./Article";

export default function Articles(props) {
  return (
    <Row>
      <Col xs={12}>
        <h1 style={{ fontWeight: "bold", color: "#cc2b5e" }}>Latest Articles</h1>
      </Col>
      {props.articles &&
        props.articles.map(article => (
          <Col key={article._id} xs={12} sm={6} md={4} lg={3}>
            <Article article={article} />
          </Col>
        ))}
      {!props.articles && <Col xs={12}>Loading...</Col>}
    </Row>
  );
}
