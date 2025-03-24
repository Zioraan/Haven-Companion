import React from "react";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { number } from "prop-types";
import { Statuses } from "../assets/Statuses.jsx";

export const PlayerCard = ({ player }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div
      className="d-flex border border-success"
      style={{ width: "22rem", height: "20vh" }}
    >
      <div className="w-100">
        <div className="d-flex border justify-content-between">
          <div className="border border-danger d-flex w-100">
            <h1 className="mx-auto">{player.hp}</h1>
          </div>
        </div>
        <div className="border border-primary d-flex justify-content-between">
          <input
            type="button"
            className="btn btn-danger w-100 my-auto"
            value="Hit"
          />
          <input
            type="button"
            className="btn btn-success w-100 my-auto"
            value="Heal"
          />
        </div>
        <div className="h-25">
          <h3>Statuses</h3>
          <div className="d-flex justify-content-between">
            {player.statuses.map((s, index) =>
              s.active ? (
                <div key={index} className="status">
                  {s.name}
                </div>
              ) : null
            )}
          </div>
        </div>
        <input
          type="button"
          className="btn btn-primary w-100 mt-auto"
          value="Draw Loot"
        />
      </div>
      <div className="w-50">
        <div className="border border-danger w-100">
          <h2 className="text-center w-100">{player.name}</h2>
        </div>
        <div className="border border-primary w-100">
          <div className="d-flex justify-content-between">
            <p className="mb-1 ms-2">Gold:</p>
            <p className="mb-1 me-2">{player.gold}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="mb-1 ms-2">Wood:</p>
            <p className="mb-1 me-2">{player.wood}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="mb-1 ms-2">Iron:</p>
            <p className="mb-1 me-2">{player.iron}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="mb-1 ms-2">Hide:</p>
            <p className="mb-1 me-2">{player.hide}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PlayerCardMinimized = ({ player }) => {
  return (
    <div
      className="d-flex border border-success mt-5"
      style={{ width: "18vh", height: "10vh" }}
    >
      <div className="w-100">
        <div className="border border-danger">
          <h2 className="mx-auto">{player.name}</h2>
          <div className="row d-flex">
            <div className="col-6">
              <h3>{player.hp}</h3>
            </div>
            <div className="col-6">
              <input
                type="button"
                className="btn btn-success w-100"
                value="Expand"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
