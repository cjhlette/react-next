import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

import Link from 'next/link';

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>테스트 Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              내용!!!!!!!!!!!!!!!!!!!!!!!!!!<br/>
              내용!!!!!!!!!!!!!!!!!!!!!!!!!!<br/>
              내용!!!!!!!!!!!!!!!!!!!!!!!!!!<br/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
        >
          테스트 메세지 레이어
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default Index;
