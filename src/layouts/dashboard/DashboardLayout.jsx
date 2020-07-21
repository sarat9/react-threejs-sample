import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Icon from '@material-ui/core/Icon';
import './Dashboard.scss'
import SoldierMachineAnimation from '../../animations/SoldierMachineAnimation'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "50px 15px 20px 15px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bannerImage: {
    width: '100%'
  }
}));

function DashboardLayout() {
  const classes = useStyles();

  return (
    <div className='dashboard-layout-page'>
      <br />
      <Paper>
        <div>
          {/* <img className={classes.bannerImage} src='https://onlinegamesat.weebly.com/uploads/9/0/7/1/90711115/banner_orig.png' /> */}
        </div>
      </Paper>
      <br />
      <div>
        <div>
            <SoldierMachineAnimation />
        </div>

        <Grid container spacing={2}>
          {[...Array(6)].map((game, index) => {
            return (<Grid item md={6} sm={6} xs={12}>
              sample
            </Grid>)
          })}
        </Grid>
      </div>
      <div />
    </div>
  )
}

export default DashboardLayout
