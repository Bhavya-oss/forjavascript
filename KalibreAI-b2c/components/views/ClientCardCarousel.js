import React from "react";
import ClientCard from "./ClientCard";
import { Box, Typography } from "@mui/material";
import { checkArrayLength } from "../GlobalFunction";
import {
  CSS_LOGO,
  HTML_LOGO,
  VUEJS_LOGO,
  JAVASCRIPT_LOGO,
  TYPESCRIPT_LOGO,
  REACTJS_LOGO,
  ANGULAR_LOGO,
  NEXTJS_LOGO,
  BOOTSTRAP_LOGO,
  JQUERY_LOGO,
  PYTHON_LOGO,
  SWIFT_LOGO,
  KOTLIN_LOGO,
  NODEJS_LOGO,
  MYSQL_LOGO,
  PYTORCH_LOGO,
  FLUTTER_LOGO,
  SELENIUM_LOGO,
  SPRING_BOOT_LOGO,
  JAVA_LOGO,
  RUBY_ON_RAILS_LOGO,
  DJANGO_LOGO,
  LARAVEL_LOGO,
} from "../constants/ImagesLink";

function ClientCardCarousel(props) {
  const { direction } = props;

  const client = [
    {
      image: HTML_LOGO,
      skill: "HTML",
      job_count: "+100",
    },
    {
      image: CSS_LOGO,
      skill: "CSS",
      job_count: "+220",
    },
    {
      image: VUEJS_LOGO,
      skill: "VueJS",
      job_count: "+100",
    },
    {
      image: JAVASCRIPT_LOGO,
      skill: "JavaScript",
      job_count: "+220",
    },
    {
      image: TYPESCRIPT_LOGO,
      skill: "TypeScript",
      job_count: "+100",
    },
    {
      image: REACTJS_LOGO,
      skill: "ReactJS",
      job_count: "+220",
    },
    {
      image: ANGULAR_LOGO,
      skill: "Angular",
      job_count: "+100",
    },
    {
      image: NEXTJS_LOGO,
      skill: "NextJS",
      job_count: "+220",
    },
    {
      image: BOOTSTRAP_LOGO,
      skill: "BootStrap",
      job_count: "+100",
    },
    {
      image: JQUERY_LOGO,
      skill: "Jquery",
      job_count: "+220",
    },

    {
      image: PYTHON_LOGO,
      skill: "Python",
      job_count: "+100",
    },
    {
      image: SWIFT_LOGO,
      skill: "Swift",
      job_count: "+220",
    },
    {
      image: KOTLIN_LOGO,
      skill: "Kotlin",
      job_count: "+100",
    },
    {
      image: NODEJS_LOGO,
      skill: "NodeJS",
      job_count: "+220",
    },
    {
      image: MYSQL_LOGO,
      skill: "MySql",
      job_count: "+140",
    },
    {
      image: PYTORCH_LOGO,
      skill: "Pytorch",
      job_count: "+200",
    },
    {
      image: FLUTTER_LOGO,
      skill: "Flutter",
      job_count: "+250",
    },
    {
      image: SELENIUM_LOGO,
      skill: "Selenium",
      job_count: "+210",
    },
    {
      image: SPRING_BOOT_LOGO,
      skill: "Spring Boot",
      job_count: "+450",
    },
    {
      image: JAVA_LOGO,
      skill: "Java",
      job_count: "+300",
    },
    {
      image: RUBY_ON_RAILS_LOGO,
      skill: "Ruby On Rails",
      job_count: "+330",
    },
    {
      image: DJANGO_LOGO,
      skill: "Django",
      job_count: "+350",
    },
    {
      image: LARAVEL_LOGO,
      skill: "Larvel",
      job_count: "+400",
    },

    // {
    //   image: HTML_LOGO,
    //   skill: "HTML",
    //   job_count: "+100",
    // },
    // {
    //   image: CSS_LOGO,
    //   skill: "CSS",
    //   job_count: "+220",
    // },
    // {
    //   image: VUEJS_LOGO,
    //   skill: "VueJS",
    //   job_count: "+100",
    // },
    // {
    //   image: JAVASCRIPT_LOGO,
    //   skill: "JavaScript",
    //   job_count: "+220",
    // },
    // {
    //   image: TYPESCRIPT_LOGO,
    //   skill: "TypeScript",
    //   job_count: "+100",
    // },
    // {
    //   image: REACTJS_LOGO,
    //   skill: "ReactJS",
    //   job_count: "+220",
    // },
    // {
    //   image: ANGULAR_LOGO,
    //   skill: "Angular",
    //   job_count: "+100",
    // },
    // {
    //   image: NEXTJS_LOGO,
    //   skill: "NextJS",
    //   job_count: "+220",
    // },
    // {
    //   image: BOOTSTRAP_LOGO,
    //   skill: "BootStrap",
    //   job_count: "+100",
    // },
    // {
    //   image: JQUERY_LOGO,
    //   skill: "Jquery",
    //   job_count: "+220",
    // },

    // {
    //   image: PYTHON_LOGO,
    //   skill: "Python",
    //   job_count: "+100",
    // },
    // {
    //   image: SWIFT_LOGO,
    //   skill: "Swift",
    //   job_count: "+220",
    // },
    // {
    //   image: KOTLIN_LOGO,
    //   skill: "Kotlin",
    //   job_count: "+100",
    // },
    // {
    //   image: NODEJS_LOGO,
    //   skill: "NodeJS",
    //   job_count: "+220",
    // },
    // {
    //   image: MYSQL_LOGO,
    //   skill: "MySql",
    //   job_count: "+140",
    // },
    // {
    //   image: PYTORCH_LOGO,
    //   skill: "Pytorch",
    //   job_count: "+200",
    // },
    // {
    //   image: FLUTTER_LOGO,
    //   skill: "Flutter",
    //   job_count: "+250",
    // },
    // {
    //   image: SELENIUM_LOGO,
    //   skill: "Selenium",
    //   job_count: "+210",
    // },
    // {
    //   image: SPRING_BOOT_LOGO,
    //   skill: "Spring Boot",
    //   job_count: "+450",
    // },
    // {
    //   image: JAVA_LOGO,
    //   skill: "Java",
    //   job_count: "+300",
    // },
    // {
    //   image: RUBY_ON_RAILS_LOGO,
    //   skill: "Ruby On Rails",
    //   job_count: "+330",
    // },
    // {
    //   image: DJANGO_LOGO,
    //   skill: "Django",
    //   job_count: "+350",
    // },
    // {
    //   image: LARAVEL_LOGO,
    //   skill: "Larvel",
    //   job_count: "+400",
    // },
    // {
    //   image: HTML_LOGO,
    //   skill: "HTML",
    //   job_count: "+100",
    // },
    // {
    //   image: CSS_LOGO,
    //   skill: "CSS",
    //   job_count: "+220",
    // },
    // {
    //   image: VUEJS_LOGO,
    //   skill: "VueJS",
    //   job_count: "+100",
    // },
    // {
    //   image: JAVASCRIPT_LOGO,
    //   skill: "JavaScript",
    //   job_count: "+220",
    // },
    // {
    //   image: TYPESCRIPT_LOGO,
    //   skill: "TypeScript",
    //   job_count: "+100",
    // },
    // {
    //   image: REACTJS_LOGO,
    //   skill: "ReactJS",
    //   job_count: "+220",
    // },
    // {
    //   image: ANGULAR_LOGO,
    //   skill: "Angular",
    //   job_count: "+100",
    // },
    // {
    //   image: NEXTJS_LOGO,
    //   skill: "NextJS",
    //   job_count: "+220",
    // },
    // {
    //   image: BOOTSTRAP_LOGO,
    //   skill: "BootStrap",
    //   job_count: "+100",
    // },
    // {
    //   image: JQUERY_LOGO,
    //   skill: "Jquery",
    //   job_count: "+220",
    // },

    // {
    //   image: PYTHON_LOGO,
    //   skill: "Python",
    //   job_count: "+100",
    // },
    // {
    //   image: SWIFT_LOGO,
    //   skill: "Swift",
    //   job_count: "+220",
    // },
    // {
    //   image: KOTLIN_LOGO,
    //   skill: "Kotlin",
    //   job_count: "+100",
    // },
    // {
    //   image: NODEJS_LOGO,
    //   skill: "NodeJS",
    //   job_count: "+220",
    // },
    // {
    //   image: MYSQL_LOGO,
    //   skill: "MySql",
    //   job_count: "+140",
    // },
    // {
    //   image: PYTORCH_LOGO,
    //   skill: "Pytorch",
    //   job_count: "+200",
    // },
    // {
    //   image: FLUTTER_LOGO,
    //   skill: "Flutter",
    //   job_count: "+250",
    // },
    // {
    //   image: SELENIUM_LOGO,
    //   skill: "Selenium",
    //   job_count: "+210",
    // },
    // {
    //   image: SPRING_BOOT_LOGO,
    //   skill: "Spring Boot",
    //   job_count: "+450",
    // },
    // {
    //   image: JAVA_LOGO,
    //   skill: "Java",
    //   job_count: "+300",
    // },
    // {
    //   image: RUBY_ON_RAILS_LOGO,
    //   skill: "Ruby On Rails",
    //   job_count: "+330",
    // },
    // {
    //   image: DJANGO_LOGO,
    //   skill: "Django",
    //   job_count: "+350",
    // },
    // {
    //   image: LARAVEL_LOGO,
    //   skill: "Larvel",
    //   job_count: "+400",
    // },
    // {
    //   image: HTML_LOGO,
    //   skill: "HTML",
    //   job_count: "+100",
    // },
    // {
    //   image: CSS_LOGO,
    //   skill: "CSS",
    //   job_count: "+220",
    // },
    // {
    //   image: VUEJS_LOGO,
    //   skill: "VueJS",
    //   job_count: "+100",
    // },
    // {
    //   image: JAVASCRIPT_LOGO,
    //   skill: "JavaScript",
    //   job_count: "+220",
    // },
    // {
    //   image: TYPESCRIPT_LOGO,
    //   skill: "TypeScript",
    //   job_count: "+100",
    // },
    // {
    //   image: REACTJS_LOGO,
    //   skill: "ReactJS",
    //   job_count: "+220",
    // },
    // {
    //   image: ANGULAR_LOGO,
    //   skill: "Angular",
    //   job_count: "+100",
    // },
    // {
    //   image: NEXTJS_LOGO,
    //   skill: "NextJS",
    //   job_count: "+220",
    // },
    // {
    //   image: BOOTSTRAP_LOGO,
    //   skill: "BootStrap",
    //   job_count: "+100",
    // },
    // {
    //   image: JQUERY_LOGO,
    //   skill: "Jquery",
    //   job_count: "+220",
    // },

    // {
    //   image: PYTHON_LOGO,
    //   skill: "Python",
    //   job_count: "+100",
    // },
    // {
    //   image: SWIFT_LOGO,
    //   skill: "Swift",
    //   job_count: "+220",
    // },
    // {
    //   image: KOTLIN_LOGO,
    //   skill: "Kotlin",
    //   job_count: "+100",
    // },
    // {
    //   image: NODEJS_LOGO,
    //   skill: "NodeJS",
    //   job_count: "+220",
    // },
    // {
    //   image: MYSQL_LOGO,
    //   skill: "MySql",
    //   job_count: "+140",
    // },
    // {
    //   image: PYTORCH_LOGO,
    //   skill: "Pytorch",
    //   job_count: "+200",
    // },
    // {
    //   image: FLUTTER_LOGO,
    //   skill: "Flutter",
    //   job_count: "+250",
    // },
    // {
    //   image: SELENIUM_LOGO,
    //   skill: "Selenium",
    //   job_count: "+210",
    // },
    // {
    //   image: SPRING_BOOT_LOGO,
    //   skill: "Spring Boot",
    //   job_count: "+450",
    // },
    // {
    //   image: JAVA_LOGO,
    //   skill: "Java",
    //   job_count: "+300",
    // },
    // {
    //   image: RUBY_ON_RAILS_LOGO,
    //   skill: "Ruby On Rails",
    //   job_count: "+330",
    // },
    // {
    //   image: DJANGO_LOGO,
    //   skill: "Django",
    //   job_count: "+350",
    // },
    // {
    //   image: LARAVEL_LOGO,
    //   skill: "Larvel",
    //   job_count: "+400",
    // },
    // {
    //   image: HTML_LOGO,
    //   skill: "HTML",
    //   job_count: "+100",
    // },
    // {
    //   image: CSS_LOGO,
    //   skill: "CSS",
    //   job_count: "+220",
    // },
    // {
    //   image: VUEJS_LOGO,
    //   skill: "VueJS",
    //   job_count: "+100",
    // },
    // {
    //   image: JAVASCRIPT_LOGO,
    //   skill: "JavaScript",
    //   job_count: "+220",
    // },
    // {
    //   image: TYPESCRIPT_LOGO,
    //   skill: "TypeScript",
    //   job_count: "+100",
    // },
    // {
    //   image: REACTJS_LOGO,
    //   skill: "ReactJS",
    //   job_count: "+220",
    // },
    // {
    //   image: ANGULAR_LOGO,
    //   skill: "Angular",
    //   job_count: "+100",
    // },
    // {
    //   image: NEXTJS_LOGO,
    //   skill: "NextJS",
    //   job_count: "+220",
    // },
    // {
    //   image: BOOTSTRAP_LOGO,
    //   skill: "BootStrap",
    //   job_count: "+100",
    // },
    // {
    //   image: JQUERY_LOGO,
    //   skill: "Jquery",
    //   job_count: "+220",
    // },

    // {
    //   image: PYTHON_LOGO,
    //   skill: "Python",
    //   job_count: "+100",
    // },
    // {
    //   image: SWIFT_LOGO,
    //   skill: "Swift",
    //   job_count: "+220",
    // },
    // {
    //   image: KOTLIN_LOGO,
    //   skill: "Kotlin",
    //   job_count: "+100",
    // },
    // {
    //   image: NODEJS_LOGO,
    //   skill: "NodeJS",
    //   job_count: "+220",
    // },
    // {
    //   image: MYSQL_LOGO,
    //   skill: "MySql",
    //   job_count: "+140",
    // },
    // {
    //   image: PYTORCH_LOGO,
    //   skill: "Pytorch",
    //   job_count: "+200",
    // },
    // {
    //   image: FLUTTER_LOGO,
    //   skill: "Flutter",
    //   job_count: "+250",
    // },
    // {
    //   image: SELENIUM_LOGO,
    //   skill: "Selenium",
    //   job_count: "+210",
    // },
    // {
    //   image: SPRING_BOOT_LOGO,
    //   skill: "Spring Boot",
    //   job_count: "+450",
    // },
    // {
    //   image: JAVA_LOGO,
    //   skill: "Java",
    //   job_count: "+300",
    // },
    // {
    //   image: RUBY_ON_RAILS_LOGO,
    //   skill: "Ruby On Rails",
    //   job_count: "+330",
    // },
    // {
    //   image: DJANGO_LOGO,
    //   skill: "Django",
    //   job_count: "+350",
    // },
    // {
    //   image: LARAVEL_LOGO,
    //   skill: "Larvel",
    //   job_count: "+400",
    // },
    // {
    //   image: HTML_LOGO,
    //   skill: "HTML",
    //   job_count: "+100",
    // },
    // {
    //   image: CSS_LOGO,
    //   skill: "CSS",
    //   job_count: "+220",
    // },
    // {
    //   image: VUEJS_LOGO,
    //   skill: "VueJS",
    //   job_count: "+100",
    // },
    // {
    //   image: JAVASCRIPT_LOGO,
    //   skill: "JavaScript",
    //   job_count: "+220",
    // },
    // {
    //   image: TYPESCRIPT_LOGO,
    //   skill: "TypeScript",
    //   job_count: "+100",
    // },
    // {
    //   image: REACTJS_LOGO,
    //   skill: "ReactJS",
    //   job_count: "+220",
    // },
    // {
    //   image: ANGULAR_LOGO,
    //   skill: "Angular",
    //   job_count: "+100",
    // },
    // {
    //   image: NEXTJS_LOGO,
    //   skill: "NextJS",
    //   job_count: "+220",
    // },
    // {
    //   image: BOOTSTRAP_LOGO,
    //   skill: "BootStrap",
    //   job_count: "+100",
    // },
    // {
    //   image: JQUERY_LOGO,
    //   skill: "Jquery",
    //   job_count: "+220",
    // },

    // {
    //   image: PYTHON_LOGO,
    //   skill: "Python",
    //   job_count: "+100",
    // },
    // {
    //   image: SWIFT_LOGO,
    //   skill: "Swift",
    //   job_count: "+220",
    // },
    // {
    //   image: KOTLIN_LOGO,
    //   skill: "Kotlin",
    //   job_count: "+100",
    // },
    // {
    //   image: NODEJS_LOGO,
    //   skill: "NodeJS",
    //   job_count: "+220",
    // },
    // {
    //   image: MYSQL_LOGO,
    //   skill: "MySql",
    //   job_count: "+140",
    // },
    // {
    //   image: PYTORCH_LOGO,
    //   skill: "Pytorch",
    //   job_count: "+200",
    // },
    // {
    //   image: FLUTTER_LOGO,
    //   skill: "Flutter",
    //   job_count: "+250",
    // },
    // {
    //   image: SELENIUM_LOGO,
    //   skill: "Selenium",
    //   job_count: "+210",
    // },
    // {
    //   image: SPRING_BOOT_LOGO,
    //   skill: "Spring Boot",
    //   job_count: "+450",
    // },
    // {
    //   image: JAVA_LOGO,
    //   skill: "Java",
    //   job_count: "+300",
    // },
    // {
    //   image: RUBY_ON_RAILS_LOGO,
    //   skill: "Ruby On Rails",
    //   job_count: "+330",
    // },
    // {
    //   image: DJANGO_LOGO,
    //   skill: "Django",
    //   job_count: "+350",
    // },
    // {
    //   image: LARAVEL_LOGO,
    //   skill: "Larvel",
    //   job_count: "+400",
    // },
  ];

  console.log("clientcldata", client);

  return (
    <div>
      <Box className="carousel_container">
        <Box
          className={
            direction == "right"
              ? "slide_container_right"
              : "slide_container_left"
          }
          sx={{ marginBottom: "30px" }}
        >
          {checkArrayLength(client) &&
            client.map((data, idx) => {
              return (
                <Box key={idx}>
                  <ClientCard data={data} />
                </Box>
              );
            })}
        </Box>
      </Box>
    </div>
  );
}

export default ClientCardCarousel;
