import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsBound } from "@fortawesome/free-solid-svg-icons";
import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";

export const Home = () => {
  const { store, actions } = useContext(Context);

  // Hard-coded hexagon coordinates for the first grid
  const hexagons = [
    { q: 0, r: 0, s: 0 },
    { q: 1, r: 0, s: -1 },
    { q: 1, r: -1, s: 0 },
    { q: 0, r: -1, s: 1 },
    { q: -1, r: 0, s: 1 },
    { q: -1, r: 1, s: 0 },
    { q: 0, r: 1, s: -1 },
  ];

  // Hard-coded hexagon coordinates for the second grid
  const secondGridHexagons = [
    { q: 2, r: -1, s: -1 }, // Top row
    { q: 0, r: 1, s: -1 },
    { q: 1, r: -1, s: 0 },
    { q: 0, r: 0, s: 0 }, // Second row
    { q: 0, r: -1, s: 1 },
    { q: 1, r: 0, s: -1 }, // Bottom row
  ];

  // Hard-coded hexagon coordinates for the third grid
  const thirdGridHexagons = [
    { q: 0, r: 0, s: 0 }, // Center
    { q: 0, r: -1, s: 1 }, // Up
    { q: -1, r: 1, s: 0 }, // Bottom-left
    { q: 1, r: 0, s: -1 }, // Bottom-right
    { q: 0, r: -2, s: 2 }, // Up 2
    { q: -2, r: 2, s: 0 }, // Top-left
    { q: 2, r: 0, s: -2 }, // Top-right
  ];

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        <FontAwesomeIcon icon={faHandsBound} style={{ color: "#198de6" }} />
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>

      <HexGrid width={800} height={600} viewBox="-50 -50 100 100">
        <Layout
          size={{ x: 10, y: 10 }}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {hexagons.map((hex, index) => (
            <Hexagon
              key={index}
              q={hex.q}
              r={hex.r}
              s={hex.s}
              className="hexagon"
            >
              <Text dy="0.3em">{`(${hex.q}, ${hex.r}, ${hex.s})`}</Text>
            </Hexagon>
          ))}
        </Layout>
      </HexGrid>

      <HexGrid width={800} height={600} viewBox="-50 -50 100 100">
        <Layout
          size={{ x: 10, y: 10 }}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {secondGridHexagons.map((hex, index) => {
            const s = -hex.q - hex.r; // Calculate s dynamically
            const isGreyHex = hex.q === -1 && hex.r === 2 && s === -1;
            return (
              <Hexagon
                key={index}
                q={hex.q}
                r={hex.r}
                s={s}
                className={`hexagon ${isGreyHex ? "grey" : "red"}`}
              >
                <Text dy="0.3em">{`(${hex.q}, ${hex.r}, ${s})`}</Text>
              </Hexagon>
            );
          })}
        </Layout>
      </HexGrid>

      <HexGrid width={800} height={600} viewBox="-50 -50 100 100">
        <Layout
          size={{ x: 10, y: 10 }}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {thirdGridHexagons.map((hex, index) => {
            const s = -hex.q - hex.r; // Calculate s dynamically
            const isGreyHex = hex.q === 0 && hex.r === 0 && s === 0;
            const isRedHex =
              (hex.q === 0 && hex.r === 1 && s === -1) ||
              (hex.q === -1 && hex.r === 1 && s === 0) ||
              (hex.q === 1 && hex.r === 0 && s === -1);
            return (
              <Hexagon
                key={index}
                q={hex.q}
                r={hex.r}
                s={s}
                className={`hexagon ${
                  isGreyHex ? "grey" : isRedHex ? "red" : ""
                }`}
              >
                <Text dy="0.3em">{`(${hex.q}, ${hex.r}, ${s})`}</Text>
              </Hexagon>
            );
          })}
        </Layout>
      </HexGrid>
    </div>
  );
};
