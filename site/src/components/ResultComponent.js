import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';


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
  const Result = (props) => {

    const results = props.achievements.map((achievement) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderAchievement achievement={achievement} isAchieved={props.isAchieved} address = {props.choosenAddress}/>
            </div>
        );
    });

    return (
      <div className="container">
          <div className="row-content">
            <div class="d-flex justify-content-center">
                <h3>{props.choosenAddress} achievements:</h3>
            </div>                
          </div>
          <div className="row">
              {results}
          </div>
      </div>
    );
  }

export default Result;