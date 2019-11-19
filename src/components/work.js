import React, { Component } from "react";
import Bakery from "../images/BakeryScreen.png";
import Clicky from "../images/ClickyGameScreen.png";
import Scraper from "../images/ScraperScreen.png";
import Flight from "../images/TakeFlightScreen.png";
import WebLogo from "../images/logos/WebWhite.png";
import GitLogo from "../images/logos/GitHubWhite.png";

class Work extends Component {
  render() {
    return (
      <div className="container workSection works">
        <div className="row card-deck">
          <div className="card text-white">
            <img src={Bakery} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Taste and See Bakery</h5>
              <p className="card-text">Website designed for a local bakery.</p>
            </div>
            <div className="card-footer text-right">
              <a
                href="https://agile-savannah-42839.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={WebLogo}
                  height="25"
                  width="25"
                  alt="Web Logo"
                  className="cardFooterLogo"
                />
              </a>
              <a
                href="https://github.com/rsteinkopfjr/thebakery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitLogo}
                  height="25"
                  width="25"
                  alt="Github Logo"
                  className="cardFooterLogo"
                />
              </a>
            </div>
          </div>
          <div className="card text-white">
            <img src={Clicky} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Clicky Game</h5>
              <p className="card-text">
                Bob's Burger themed game to test recollection and memory
              </p>
            </div>
            <div className="card-footer text-right">
              <a
                href="https://frozen-sands-45483.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={WebLogo}
                  height="25"
                  width="25"
                  alt="Web Logo"
                  className="cardFooterLogo"
                />
              </a>
              <a
                href="https://github.com/rsteinkopfjr/clickygame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitLogo}
                  height="25"
                  width="25"
                  alt="Github Logo"
                  className="cardFooterLogo"
                />
              </a>
            </div>
          </div>
          <div className="card text-white">
            <img src={Scraper} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">News Scraper</h5>
              <p className="card-text">
                All fantasy football news from BleacherReport.com in one
                location.
              </p>
            </div>
            <div className="card-footer text-right">
              <a
                href="https://nameless-cliffs-39314.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={WebLogo}
                  height="25"
                  width="25"
                  alt="Web Logo"
                  className="cardFooterLogo"
                />
              </a>
              <a
                href="https://github.com/rsteinkopfjr/scraper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitLogo}
                  height="25"
                  width="25"
                  alt="Github Logo"
                  className="cardFooterLogo"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row card-deck">
          <div className="card text-white">
            <img src={Flight} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Take Flight</h5>
              <p className="card-text">Website designed for drone app.</p>
            </div>
            <div className="card-footer text-right">
              <a
                href="https://ancient-eyrie-50147.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={WebLogo}
                  height="25"
                  width="25"
                  alt="Web Logo"
                  className="cardFooterLogo"
                />
              </a>
              <a
                href="https://github.com/rsteinkopfjr/TakeFlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitLogo}
                  height="25"
                  width="25"
                  alt="Github Logo"
                  className="cardFooterLogo"
                />
              </a>
            </div>
          </div>
          <div className="card cardEmpty text-white"></div>
          <div className="card cardEmpty text-white"></div>
        </div>
      </div>
    );
  }
}

export default Work;
