import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import API from "../../Services/MovieService.js";
import Pagination from "../../components/Pagination/Pagination.js";

export const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.getTrendingContent(currentPage).then((res) => {
      setTrending(res.results);
      setLoading(false);
    });
  }, [currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (loading) {
    return <h2 style={{ textAlign: "center", color: "#fff" }}>Loading...</h2>;
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Pagination paginate={paginate} totalPage="10" />
      </div>
      <Container>
        <Row>
          <h2 style={{ color: "#fff", marginTop: "10px", textAlign: "center" }}>
            Trending TV Shows
          </h2>
          {trending.map(function (trending, i) {
            return (
              <Col md={2}>
                <div className="show_wrapper" key={i}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w300/" +
                      trending.backdrop_path
                    }
                    width={165}
                  ></img>
                  <div class="show_title">
                    <span>{trending.name}</span>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
