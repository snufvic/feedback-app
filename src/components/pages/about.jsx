import Card from "../shared/card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a project to leave feedbacks</p>
        <Link to={"/"}>Back Home</Link>
      </div>
    </Card>
  );
}

export default About;
