import React from 'react';
import axios from 'axios';
import './index.css'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { input: '', searchData: [], filteredData: [] };
  }

  componentDidMount() {
    axios.get(`http://www.mocky.io/v2/5ba8efb23100007200c2750c`)
      .then(res => {
        const searchData = res.data;
        this.setState({ searchData });
      })
  }

  searchList = (e) => {
    this.setState({ input: e })
    let filteredData = [];
    e.length && this.state.searchData.forEach((ele) => {
      for (let key in ele)
        if (ele[key].toString().toLowerCase().includes(e.toLowerCase())) {
          filteredData.push(ele);
          break;
        }
    })
    console.log(filteredData);
    this.setState({ filteredData: filteredData })
  }

  render() {
    return (
      <div className="search-bar">
        <input placeholder="Search users by ID, address, name" className="" type="text" id="ee" value={this.state.input} onChange={e => this.searchList(e.target.value)}></input>
        <div className="records-list">
          {
            this.state.filteredData && this.state.filteredData.map((data, index) => {
              return (
                <div className="record-card" tabIndex="index">
                  <div>
                    {data.id}
                  </div>
                  <div>
                    {data.name}
                  </div>
                  <div>
                    {data.address}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
