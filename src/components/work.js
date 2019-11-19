import React, { Component } from "react";
import Bakery from "../images/BakeryScreen.png";
import Clicky from "../images/ClickyGameScreen.png";
import Scraper from "../images/ScraperScreen.png";
import WebLogo from "../images/logos/WebWhite.png";
import GitLogo from "../images/logos/GitHubWhite.png";

class Work extends Component {
  render() {
    return (
      <div className="container workSection">
        <div className="row works">
          <div className="card-deck">
            <div className="card text-white">
              <img src={Bakery} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Taste and See Bakery</h5>
                <p className="card-text">
                  Website designed for a local bakery.
                </p>
              </div>
              <div className="card-footer text-right">
                  <img src={WebLogo} height="25" width="25" alt="Web Logo" className="cardFooterLogo" />
                  <img src={GitLogo} height="25" width="25" alt="Github Logo" className="cardFooterLogo" />
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
                  <img src={WebLogo} height="25" width="25" alt="Web Logo" className="cardFooterLogo" />
                  <img src={GitLogo} height="25" width="25" alt="Github Logo" className="cardFooterLogo" />
              </div>
            </div>
            <div className="card text-white">
              <img src={Scraper}className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">News Scraper</h5>
                <p className="card-text">
                  All fantasy football news from BleacherReport.com in one location.
                </p>
              </div>
              <div className="card-footer text-right">
                  <img src={WebLogo} height="25" width="25" alt="Web Logo" className="cardFooterLogo" />
                  <img src={GitLogo} height="25" width="25" alt="Github Logo" className="cardFooterLogo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
