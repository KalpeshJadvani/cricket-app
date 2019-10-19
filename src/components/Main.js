import React, { Component } from 'react';
import Wizard from './Wizard';
import NoData from './NoData';
import Axios from 'axios';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chailLoading: true,
      loding: true,
      err: false,
      data: '',
      object: {
        type: 'all',
        status: 'upcoming',
        page: 0
      }
    };
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  excuteQuery = () => {
    const { type, status, page } = this.state.object;
    const query = `query getMatchSchedule {
        schedule(type:"${type}", status:"${status}", page:${page}){
            matchID
            seriesName
            matchResult
        }
    }`;

    Axios({
      url: 'https://api.devcdc.com/cricket',
      method: 'post',
      data: {
        query: query
      }
    }).then(result => {
      this.setState({
        data: result.data,
        loding: false,
        chailLoading: false
      });
    });
  };
  componentDidMount() {
    this.excuteQuery();
  }

  getDataBasedOnQuery = object => {
    this.setState(
      {
        object: object,
        chailLoading: true
      },
      () => {
        this.excuteQuery();
      }
    );
  };

  previousPage = () => {
    const { object } = this.state;
    if (object.page > 0) {
      object.page = object.page - 1;
      this.getDataBasedOnQuery(object);
    }
  };
  nextPage = () => {
    const { object } = this.state;
    object.page = object.page + 1;
    this.getDataBasedOnQuery(object);
  };

  render() {
    const { loding, err, data, object, chailLoading } = this.state;
    return (
      <div className="container">
        {loding ? (
          <NoData msg="Loading..." />
        ) : err ? (
          <NoData msg="Data Not Found" />
        ) : (
          <div className="main">
            <h1 className="display-5 hading"> Schedule </h1>
            <Wizard
              chailLoading={chailLoading}
              object={object}
              data={data.data.schedule}
              getDataBasedOnQuery={this.getDataBasedOnQuery}
            />
            <div className="box bottm-pagination">
              <span className="previous" onClick={this.previousPage}>
                &#8249;
              </span>
              <span className="next" onClick={this.nextPage}>
                &#8250;
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Main;
