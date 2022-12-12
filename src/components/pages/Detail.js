import React from 'react';
import PropTypes from 'prop-types';
import { BiChevronRight } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import './styles/details.scss';
import muliticolor from './images/multicolor.png';

function Detail(props) {
  const {
    id, hometeam, awayteam, location, stadium, price, photo, date,
  } = props;

  const fixture = `${hometeam} vs ${awayteam}`;
  const navigate = useNavigate;

  const handleClick = () => {
    navigate('/', { replace: true });
  };
  return (
    <div id={id}>
      <div className="details-div">
        <div className="img-wrapper">
          <img src={photo} alt="stadium" className="stadium" />
        </div>
        <div className="wrapper">
          <div className="header">
            {' '}
            {fixture}
          </div>
          <div className="details">
            <ul className="details-body">
              <div className="details-header">More details</div>
              <li className="details-body-item">
                Date:
                <span>{date}</span>
              </li>
              <li className="details-body-item">
                Ticket Price:
                <span>
                  $
                  {price}
                </span>
              </li>
              <li className="details-body-item">
                Location:
                <span>
                  {location}
                </span>
              </li>
              <li className="details-body-item">
                Venue:
                <span>
                  {stadium}
                </span>
              </li>
            </ul>
          </div>
          <div
            className="discover"
            onClick={handleClick}
            onKeyDown={handleClick}
            role="presentation"
          >
            discover more matches
            <span
              onClick={handleClick}
              onKeyDown={handleClick}
              role="presentation"
            >
              <BiChevronRight />
            </span>
          </div>
          <img src={muliticolor} alt="multicolor" className="multicolor" />
          <button type="button" className="buy">
            <span><CiSettings className="sett" /></span>
            {' '}
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  hometeam: PropTypes.string.isRequired,
  awayteam: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stadium: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Detail;
