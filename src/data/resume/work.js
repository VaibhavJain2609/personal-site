/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Kendriya Karamchari Sehkari Grih Nirman Samiti Ltd',
    position: 'Web Developer',
    url: 'https://kksociety.com',
    startDate: '2023-05-29',
    endDate: '2023-08-22',
    summary: `
Kendriya Karamchari Sehkari Grih Nirman Samiti Ltd, a housing society in Noida, India, is in the process of obtaining
 land for its members after winning a Supreme Court battle against the Noida Authority. As a web developer, I managed
  the society's website, ensuring it was up-to-date and user-friendly. I trained the management, who were not tech-savvy,
   on using the site. Additionally, I developed filters and search functionality to streamline information retrieval,
    eliminating the need for creating extensive Excel sheets. I also migrated the website to a more cost-effective hosting
     service and customized the database to store users' historical payment information, enabling easy access to previous bills online.
    `,
    highlights: [
      'Managed end-to-end process of migrating existing website to a more cost-effective web hosting service, reducing annual expenditure by 40%.',
      'Accurately mapped data for 1,000 members, enabling leadership to retrieve member information 80% faster through development of custom filters with PHP.',
      'Reduced member travel time by average of 2 hours by upgrading database to store historical payment information, facilitating user access to previous bills online.',
    ],
  },
  {
    name: 'Hoonar Tekwurks',
    position: 'Software Engineering Intern',
    url: 'http://https://hoonartek.com/',
    startDate: '2022-06-15',
    endDate: '2022-08-23',
    summary: `Hoonar Tekwurks, a software development company based in Pune, India, collaborates with clients to create 
    software solutions for their business goals. As a Software Engineering Intern, I developed an authentication system
     for an internal project using Java Spring Boot and Keycloak. Additionally, I created a REST API to enable front-end
      and back-end interaction, enhancing functionality with Keycloak.
     I also presented various technologies to the team, aiding their understanding and implementation in future projects.`,
    highlights: [
      'Increased OWASP security to level 2 for an internal tool by developing an authentication API with Java Spring Boot and Keycloak.',
      'Delivered internal knowledge-sharing sessions on Log4J and debugging to a team of 8 engineers, successfully integrating logging into team’s coding standard.',
    ],
  },
  {
    name: 'Woodstock School',
    position: 'Information Technology Department Intern',
    url: 'https://woodstockschool.in',
    startDate: '2018-02-07',
    endDate: '2019-05-25',
    // summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
    // <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
    // We develop quantitative strategies to predict the value of fine art and build investment prod
    // I ran a 20-person product and engineering org for 8 years. We were acquired by
    // <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
    summary: `Woodstock School, an international school in Mussoorie, India, was where I studied from 2010 to 2019. During my internship in the Information Technology Department, I
     developed various solutions using the Microsoft Power Platform. I created PowerApps
      and Power Automate solutions for the Maintenance, Counseling, and Security Departments. 
      For the Maintenance Department, I developed a system to track utilities billing and generate reports.
       In the Counseling Department, I implemented a PowerBI system to monitor student progress and support
        data-driven decisions. For the Security Department, I introduced a biometric system at three key locations
         on campus to track entry and exit, enhancing campus security. As Head of Media in the Student Council,
          I also managed IT requests, ensuring they were addressed appropriately.`,
    highlights: [
      'Saved 50 hours of manual labour quarterly by developing an invoice management system through Microsoft PowerApps and SharePoint.',
      'Consolidated 7 manual steps to 1 automated process for student laptop-loaning by using Microsoft Power-Automate, saving 12 manual hours weekly.',
      'Enhanced student security as measured by increased student attendance, by proposing and implementing a bio-metric check-in system in dormitories.',
      'Generated 20% increase in student counseling sessions by developing a PowerBi dashboard for the counseling department, enabling data-driven decision-making.',
      'Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.',
      'Researched and presenetd end-point management solutions to streamline OS deployment and reduce bandwidth comsumption',
      'Set up an emergency notification system for the school, which would allow the school to send out emergency notifications to the students, staffs, and parents in case of an emergency.',
    ],
  },
  {
    name: 'Woodstock School',
    position: 'Web Development Intern',
    url: 'http://woodstockschool.in',
    startDate: '2018-09-01',
    endDate: '2019-05-25',
    summary: `As a Web Development Intern in the Communication Department at Woodstock School, I was responsible for developing the school's website, and ensuring 
    that it is up-to-date and user-friendly. I was the lead intern for a team of 3 interns, and was responsible for managing the team's tasks
    and ensuring that the tasks were completed on time. I was also responsible for teaching the interns how to use the website's CMS, and how to
    update the website. I also deployed a staged website, to remove redundant code and plugins to improve the website's performance. The key project,
    however, was the development of the school's internal sports management system, which would allow the school's sports department to manage the
    sports events, and track the students' progress in the sports events. The system was developed using WordPress, and was integrated with the school's
    website, to ensure that the students and staff could access the system easily.`,
    highlights: [
      'Improved School\'s website performance by 30% by deploying a staged website, removing redundant code and plugins.',
      'Developed a sports management system for the school\'s sports department, enabling them to manage sports events and track student progress.',
      'Led and taught a team of 3 interns on how to use the website\'s CMS and update the website, decreasing the workload on communication department by 50%.',
    ],
  },
  {
    name: 'Woodstock School',
    position: 'Math Department Intern',
    url: 'https://woodstockschool.in',
    startDate: '2018-09-01',
    endDate: '2019-05-25',
    summary: `As a Math Department Intern at Woodstock School, I was responsible for assisting the Math Department in providing
    head of department assistance with grading, lesson planning, and teaching the students in course levels lower than AP Calculus.`,

    highlights: [
      'Graded 100+ student assignments and tests for Non-AP level math courses, providing detailed feedback to students and teachers.',
      'Assisted in teaching lower level math courses during dorm level study halls, increasing student understanding of math concepts.',
      'Provided head of department assistance with lesson planning and grading, reducing workload by 20%.',
    ],
  },

];

export default work;
