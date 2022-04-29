import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";


  function ActiveRender({achievement}) {
    return (
        <Card>
            <CardImg src={achievement.color_picture} />
            <CardBody>
                <CardTitle>{achievement.title}</CardTitle>
                <CardText>{achievement.congratulation}</CardText>
            </CardBody>
        </Card>
      );
  }  

  function NotActiveRender({achievement}) {
    return (
        <Card>
            <CardImg src={achievement.grey_picture} />
            <CardBody>
                <CardTitle>{achievement.title}</CardTitle>
                <CardText>{achievement.description}</CardText>
            </CardBody>
        </Card>
      );
  }

  function RenderAchievement ({achievement, isAchieved, address}) {
      if (isAchieved({address})) {
        return ActiveRender(achievement = {achievement});
      } else {
        return NotActiveRender(achievement = {achievement});
      }
  }

  function RenderStats ({stat}) {
    return(
      <div className="row achivement-content">
          <div className="col-12 col-md-2 m-1">
              <Card className="card border-0">
                  <CardImg width="100%" src={stat.image} />
              </Card>
          </div>
          <div className="col-12 col-md-9 m-1">
            <div>
              <h4>{stat.name}: {stat.value} </h4>
            </div>
          </div>
      </div>

    );
  }
  

  class Result extends Component  {

    constructor(props) {
      super(props);
    }

    render() {
    const results = this.props.achievements.map((achievement) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderAchievement achievement={achievement} isAchieved={this.props.isAchieved} address = {this.props.choosenAddress}/>
            </div>
        );
    });

    const stats = this.props.stats.map((stat) => {
      return (
              <RenderStats stat={stat}/>
      );
    });
    
    return (
     
      <div className="container">
          <div className="row-content">
            <div class="d-flex justify-content-center">
                <h1>Profile</h1>
            </div>                
          </div>
          <div className="row">
              {results}
          </div>
          <div className="row-content">
            <div class="d-flex justify-content-center">
                  <h2>Stats of</h2>
            </div>
            <div class="d-flex justify-content-center">
                  <h2>{this.props.choosenAddress}</h2>
            </div>
          </div>
          <div className="achivement-content">
            <div class="d-flex justify-content-center">
                  <h1>Security level = 87%</h1>
            </div>
          </div>
          <div>{stats}</div>
      </div>
    );
    }
  }

export default Result;