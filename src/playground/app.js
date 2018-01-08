// Grab the add function from the add.js file in the utils folder
// Grab React from the react npm module
// add(2, 4)
import React from 'react';
import ReactDOM from 'react-dom';
class Appinventive extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleList = this.handleList.bind(this);
    this.state = {
      options: [],
      displayList : false,
      displayAdd : false
    };
  } 
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleAdd() {
    this.setState(() => ({displayList:false}));
  }
  handleList() {
   
    this.setState(() => ({displayList:true}));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
 
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  render() {
    const subtitle = 'Make some Crazy App';
    const footerTitle = 'This is a footer Section'
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handleAdd={this.handleAdd}
          handleList={this.handleList}

        />
        {
          this.state.displayList
            ?  <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
            : <AddOption
              handleAddOption={this.handleAddOption}
            />
        }
        <Footer footerTitle ={footerTitle} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
const Footer = (props) => {
  return (
    <h3>{props.footerTitle}</h3>
  );
};
Header.defaultProps = {
  title: 'App Inventive'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handleAdd}
      >
        Add data
      </button>
      <button
        onClick={props.handleList}
      >
        List
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div style={{display : `${ this.state.displayAdd }`}}>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<Appinventive />, document.getElementById('app'));
