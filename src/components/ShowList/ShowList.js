import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import API from "../../Services/ShowService.js";
import "./show.css";

const ShowList = ({ show, setShows }) => {
  useEffect(() => {
    API.getShows().then((res) => {
      setShows(res.results);
    });
  }, []);

  return (
    <Container>
      <Row>
        {show.map(function (show, i) {
          return (
            <Col md={2}>
              <div className="show_wrapper" key={i}>
                <img
                  src={"https://image.tmdb.org/t/p/w300/" + show.poster_path}
                  width={165}
                ></img>
                <div class="show_title">
                  <span>{show.name}</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ShowList;
