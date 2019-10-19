import React, { Component } from 'react';
import NoData from './NoData';
import CardView from './CardView';
class Wizard extends Component {
  constructor(props) {
    super(props);
    this.setActiveBottomTab = this.setActiveBottomTab.bind(this);
    this.setActiveTopTab = this.setActiveTopTab.bind(this);
    this.tabs = document.getElementsByClassName('Tab');
    this.tablinks = document.getElementsByClassName('tablinks');
  }

  setActiveTopTab = (name, evt) => {
    const TemObj = {
      type: this.props.object.type,
      status: name,
      page: this.props.object.page
    };
    Array.prototype.forEach.call(this.tablinks, function(tab) {
      tab.classList.remove('active');
    });
    evt.currentTarget.classList.add('active');
    this.props.getDataBasedOnQuery(TemObj);
  };

  setActiveBottomTab = (name, evt) => {
    const TemObj = {
      type: name,
      status: this.props.object.status,
      page: this.props.object.page
    };
    Array.prototype.forEach.call(this.tabs, function(tab) {
      tab.classList.remove('active');
    });
    evt.currentTarget.classList.add('active');
    this.props.getDataBasedOnQuery(TemObj);
  };

  navigetionTopTab = () => {
    return (
      <div className="tab">
        <button
          className="tablinks"
          onClick={evt => this.setActiveTopTab('upcoming', evt)}
        >
          UPCOMING
        </button>
        <button
          className="tablinks"
          onClick={evt => this.setActiveTopTab('running', evt)}
          style={{
            borderLeft: '1px solid rgb(204, 204, 204)',
            borderRight: '1px solid rgb(204, 204, 204)'
          }}
        >
          RUNNING
        </button>
        <button
          className="tablinks"
          onClick={evt => this.setActiveTopTab('complited', evt)}
        >
          COMPLITED
        </button>
        {/* { USED FROM https://bootsnipp.com/snippets/0eW3G} */}
      </div>
    );
  };

  navigetionBottomTab = () => {
    return (
      <nav>
        <ul className="Tabs">
          <li
            className="Tabs__tab Tab"
            onClick={evt => this.setActiveBottomTab('All', evt)}
          >
            <p>All</p>
          </li>
          <li
            className="Tabs__tab Tab"
            onClick={evt => this.setActiveBottomTab('International', evt)}
          >
            <p>International</p>
          </li>
          <li
            className="Tabs__tab Tab"
            onClick={evt => this.setActiveBottomTab('Domestic', evt)}
          >
            <p>Domestic</p>
          </li>
          <li className="Tabs__presentation-slider" role="presentation"></li>
        </ul>
      </nav>
    );
  };

  listOfObject = data => {
    return (
      <div className="box" style={{ backgroundColor: 'lavenderblush' }}>
        {data.map((item, idx) => {
          return <CardView key={idx} item={item} />;
        })}
      </div>
    );
  };

  render() {
    const { chailLoading, err, data } = this.props;
    return (
      <div className="box top-container">
        <div className="box top-tab-container">{this.navigetionTopTab()}</div>
        <div className="box bottom-tab-container">
          {this.navigetionBottomTab()}
        </div>
        {chailLoading ? (
          <NoData msg="Loading..." />
        ) : err || data.length <= 0 ? (
          <NoData msg="No Data " />
        ) : (
          this.listOfObject(data)
        )}
      </div>
    );
  }
}

export default Wizard;
