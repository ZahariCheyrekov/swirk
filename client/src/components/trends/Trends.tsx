import { Link } from "react-router-dom";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./Trends.scss";

const Trends = () => {
  return (
    <section className="trends__section">
      <article className="trends__article">
        <h2 className="trends__heading heading">Trends for you</h2>
        <ul className="trends__list">
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Business & finance · Trending <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">#100x</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              14.1K Swirks
            </h5>
          </li>
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Trending in Bulgaria <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">ChatGPT</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              6,247 Swirks
            </h5>
          </li>
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Business & finance · Trending <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">Binance USD</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              4,577 Swirks
            </h5>
          </li>
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Shanghai <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">Binance USD</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              10K Swirks
            </h5>
          </li>
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Trending <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">#pawswap</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              11.4K Swirks
            </h5>
          </li>
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Trending in Bulgaria <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">Bulgarian</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              1,127 Swirks
            </h5>
          </li>
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Business & finance · Trending <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">Gary Gensler</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              3,204 Swirks
            </h5>
          </li>
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Business & finance · Trending <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">#BUSD</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              10.3K Swirks
            </h5>
          </li>
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Trending in Bulgaria <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">Bulgarian</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              1,127 Swirks
            </h5>
          </li>
          <li className="trends__li--item list__item trend">
            <h5 className="trends__heading--tag trend__type heading__gray">
              Trending in Bulgaria <MoreHorizIcon />
            </h5>
            <h4 className="trends__heading--name trend__name">Africa</h4>
            <h5 className="trends__heading--swirks trend__swirks heading__gray">
              147K Swirks
            </h5>
          </li>
          <Link to={"/trends"}>
            <li className="trends__li--item list__item trend">Show more</li>
          </Link>
        </ul>
      </article>
    </section>
  );
};

export default Trends;
