'use strict';

var React = require('react');
var Input = require('../common/textInput.jsx');
var PropTypes = React.PropTypes;

var AuthorForm = React.createClass({
  propTypes: {
    author: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
  },
  render: function() {
    return (
      <form>
        <h1>Manage Authors</h1>
        <Input
          name="firstName"
          label="First Name"
          value={this.props.author.firstName}
          onChange={this.props.onChange}
          error={this.props.errors.firstName} />

          <Input
            name="lastName"
            label="Last Name"
            value={this.props.author.lastName}
            onChange={this.props.onChange}
            error={this.props.errors.lastName} />

          <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = AuthorForm;
