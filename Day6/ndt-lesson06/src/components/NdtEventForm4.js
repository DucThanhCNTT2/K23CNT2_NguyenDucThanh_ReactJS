import React, { Component } from 'react'

class NdtEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndtSelectCheckBox:"Cam"
        }
    }
    // Hàm xử lý khi chọn checkbox
    ndtHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.ndtSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
       
        this.setState({
            ndtSelectCheckBox:selectedOptions
        });
    }
    //Hàm xử lí khi submit
    ndtHandleSubmit = (event)=>{
        alert('Bạn đã chọn:' + this.state.ndtSelectCheckBox);
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>From inptu - checkbox</h2>
        <form>
            <h3>Chọn hoa quả bạn yêu thích</h3>
            <div>
            <input
              type="checkbox"
              id="Táo"
              value="Táo"
              checked={this.state.ndtSelectCheckBox.includes("Táo")}
              onChange={this.ndtHandleCheckboxChange}
            />
            <label htmlFor="Táo">Táo</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Chuối"
              value="Chuối"
              checked={this.state.ndtSelectCheckBox.includes("Chuối")}
              onChange={this.ndtHandleCheckboxChange}
            />
            <label htmlFor="Chuối">Chuối</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Cam"
              value="Cam"
              checked={this.state.ndtSelectCheckBox.includes("Cam")}
              onChange={this.ndtHandleCheckboxChange}
            />
            <label htmlFor="Cam">Cam</label>
          </div>
          <button type="submit" onClick={this.ndtHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default NdtEventForm4;