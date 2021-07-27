import React, { useState, useEffect } from 'react';

function Series() {
  return (
    <>
      <div className="product__asider_total_box">
        <nav className="product__navbox">
          <ul>
            <li className="product__asidetext">
              <div>
                <button>全系列</button>
              </div>
            </li>
            <div className="product__boxinborder"></div>
            <li className="product__asidetext">
              <div>
                <button>大自然系列</button>
              </div>
            </li>
            <div className="product__boxinborder"></div>
            <li className="product__asidetext">
              <div>
                <button>調酒系列</button>
              </div>
            </li>
            <div className="product__boxinborder"></div>
            <li className="product__asidetext">
              <div>
                <button>茗茶系列</button>
              </div>
            </li>
            <div className="product__boxinborder"></div>
            <li className="product__asidetext">
              <div>
                <button>動物系列</button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Series;
