import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import node from "../assets/img/nodejs.png";
import spring from "../assets/img/spring.png";
import colorSharp from "../assets/img/color-sharp.png";
import java from "../assets/img/java.png";
import react from "../assets/img/react.png";
import javascript from "../assets/img/java-script.png";
import php from "../assets/img/php.png";
import mysql from "../assets/img/mysql.png";
import postgres from "../assets/img/postgre.png";
import firebase from "../assets/img/firebase.png";
import html from "../assets/img/html-5.png";
import css from "../assets/img/css-3.png";
import aws from "../assets/img/aws-logo-2.png";
import flutter from "../assets/img/flutter2-removebg-preview.png";
import jira from "../assets/img/jira.png";
import trello from "../assets/img/trelo.png";
import jenkins from "../assets/img/jenkins.png";
import github from "../assets/img/github-4.png";
import gitlab from "../assets/img/gitlab.png";
import bitbucket from "../assets/img/bitbucket.png";
import swagger from "../assets/img/swagger.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
  };

  const technologies = [
    { id: 1, image: react, title: 'React JS' },
    { id: 2, image: node, title: 'Node JS' },
    { id: 3, image: spring, title: 'Spring Boot' },
    { id: 4, image: java, title: 'Java' },
    { id: 5, image: php, title: 'PHP' },
    { id: 6, image: javascript, title: 'JavaScript' },
    { id: 7, image: html, title: 'HTML' },
    { id: 8, image: css, title: 'CSS' },
    { id: 9, image: mysql, title: 'MySQL' },
    { id: 10, image: postgres, title: 'PostgreSQL' },
    { id: 11, image: firebase, title: 'Firebase' },
    // Add more technologies as needed
  ];

  const skills = [
    { id: 1, image: github, title: 'GitHub' },
    { id: 2, image: gitlab, title: 'GitLab' },
    { id: 3, image: bitbucket, title: 'Bitbucket' },
    { id: 4, image: swagger, title: 'Swagger UI' },
    { id: 6, image: jira, title: 'Jira' },
    { id: 7, image: trello, title: 'Trello' },
    // Add more technologies as needed
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{marginBottom:'20px'}}>Web Development Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay={true} interval={1000}>
                        {technologies.map(tech => (
                            <div key={tech.id} className="item">
                              <img src={tech.image} alt={tech.title} />
                              <h5>{tech.title}</h5>
                            </div>
                          ))}
                          <div key={13} className="item">
                              <img src={aws} style={{height:'120px'}} alt={'aws'} />
                              <h5>{'AWS Services'}</h5>
                            </div>
                            <div key={14} className="item">
                              <img src={flutter} style={{height:'120px'}} alt={'Flutter'} />
                              <h5>{'Flutter'}</h5>
                            </div>
                        </Carousel>
                    </div>
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{marginBottom:'20px'}}>Other Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay={true} interval={2000}>
                        {skills.map(tech => (
                            <div key={tech.id} className="item">
                              <img src={tech.image} alt={tech.title} />
                              <h5>{tech.title}</h5>
                            </div>
                          ))}
                          <div key={14} className="item">
                              <img src={jenkins} style={{height:'120px'}} alt={'Jenkins'} />
                              <h5>{'Jenkins'}</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
