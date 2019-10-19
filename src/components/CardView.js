import React, { Component } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class CardView extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <div className="box" style={{ display: 'inline-flex' }}>
            <span className="card-title-custom">{item.seriesName}</span>
            <span className="right-arrow-icon">
              <ArrowForwardIosIcon />
            </span>
          </div>
        </div>
        <div
          className="box"
          style={{ padding: '15px', height: 'calc(100% - 44px' }}
        >
          <h6 style={{ fontSize: '15px' }}> Match10 . Al Amarat</h6>
          <div className="box" style={{ marginBottom: '10px' }}>
            <img
              className="img-custom"
              src="https://img.icons8.com/office/16/000000/philippines.png"
              alt="Card cap"
              data-holder-rendered="true"
            />
            <p className="contry-name">Match10 . Al Amarat</p>
          </div>
          <div className="box" style={{ marginBottom: '10px' }}>
            <img
              className="img-custom"
              src="https://img.icons8.com/office/16/000000/togo.png"
              alt="Card cap"
              data-holder-rendered="true"
            />
            <p className="contry-name">Match10 . Al Amarat</p>
          </div>
          <div
            className="box"
            style={{ textAlign: 'center', marginTop: '26px' }}
          >
            <button className="costum-btn"> 15 mins to toss </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardView;
