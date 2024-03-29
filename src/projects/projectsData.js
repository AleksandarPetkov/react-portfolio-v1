import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "IHD",
    description: (
      <>
        <div
          style={{
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
          }}
        >
          <p>
            The project simplifies healthcare monitoring by providing a 24/7
            system to track patients' key body readings via smartwatches.
            Utilizing a microservice architecture, data is easily monitored and
            acted upon through a SalesForce application.
          </p>
          <h4>Technologies Used:</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginRight: "10px" }}>AWS Lambda</div>
            <div style={{ marginRight: "10px" }}>AWS RDS</div>
            <div style={{ marginRight: "10px" }}>AWS IAM</div>
            <div style={{ marginRight: "10px" }}>AWS API Gateway</div>
            <div style={{ marginRight: "10px" }}>DynamoDB</div>
            <div style={{ marginRight: "10px" }}>AWS S3</div>
            <div style={{ marginRight: "10px" }}>AWS CloudWatch</div>
            <div style={{ marginRight: "10px" }}>Java 17</div>
            <div style={{ marginRight: "10px" }}>Spring Boot 3</div>
            <div style={{ marginRight: "10px" }}>AWS Java SDK</div>
            <div>JDBC - low level persistence</div>
          </div>
        </div>
      </>
    ),
  },
  2: {
    title: "LIP",
    description: (
      <>
        <div
          style={{
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
          }}
        >
          <p>
            The application middleware acts as a bridge between two parties, an
            application designed to enhance the hospitality experience .
            Developing this middleware lies in implementing it using the Spring
            Boot Webflux reactive programming style.
          </p>
          <h4>Technologies Used:</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginRight: "10px" }}>Spring Boot Webflux</div>
            <div style={{ marginRight: "10px" }}>Java 8</div>
            <div style={{ marginRight: "10px" }}>AWS DynamoDB</div>
            <div style={{ marginRight: "10px" }}>AWS CloudWatch</div>
            <div>AWS Java SDK</div>
          </div>
        </div>
      </>
    ),
  },
  3: {
    title: "SR",
    image: projectThree,
    description: (
      <>
        <div
          style={{
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
          }}
        >
          <p>
            SR is a mobile platform where users complete daily tasks to earn
            rewards. It tracks profits, sets task targets, and allows
            withdrawals, encouraging team collaboration for additional rewards
          </p>
          <h4>Technologies Used:</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginRight: "10px" }}>Java</div>
            <div style={{ marginRight: "10px" }}>Spring Boot</div>
            <div style={{ marginRight: "10px" }}>Spring Data</div>
            <div style={{ marginRight: "10px" }}>Hibernate</div>
            <div style={{ marginRight: "10px" }}>React</div>
            <div style={{ marginRight: "10px" }}>PostgreSQL</div>
            <div>Python</div>
          </div>
        </div>
      </>
    ),
  },
  4: {
    title: "Previous Projects Overview",
    image: projectThree,
    description: (
      <>
        <div
          style={{
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
          }}
        >
          <p>Previous Projects Overview</p>
          <h4>Technologies Employed in Previous Projects</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginRight: "10px" }}>Java</div>
            <div style={{ marginRight: "10px" }}>Spring Boot</div>
            <div style={{ marginRight: "10px" }}>Spring Data</div>
            <div style={{ marginRight: "10px" }}>Hibernate</div>
            <div style={{ marginRight: "10px" }}>PostgreSQL</div>
            <div style={{ marginRight: "10px" }}>MySQL</div>
            <div>Python</div>
          </div>
        </div>
      </>
    ),
  },
};

export default projects;
