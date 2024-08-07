export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Resume</h1>
      
      <h2 className="text-xl font-semibold mt-6">Skills</h2>
      <p className="mb-4">
        {[
          'TypeScript', 'React', 'NodeJS', 'NextJS', 'SST', 'Haskell', 'AWS', 'REST', 'tRPC', 'PostgreSQL', 'MongoDB', 'Elm Lang', 'Python', 'JavaScript', 'HTML', 'CSS3', 'TDD methodologies', 'Agile', 'Code review',
          'Management', 'Leadership', 'Mentorship', 'Problem-solving', 'Collaboration', 'Effective communication', 'Persistent', 'Project management tools'
        ].map(skill => (
          <span key={skill} className="inline-block transition-transform transform hover:scale-110 mr-2">{skill}</span>
        ))}
      </p>
      
      <h2 className="text-xl font-semibold mt-6">Education</h2>
      <p className="mb-4">
        University of Florida — Bachelor of Computer Science, 2016<br />
        EXIN Agile Scrum Master, 2020
      </p>
      
      <h2 className="text-xl font-semibold mt-6">Experience</h2>
      
      <h3 className="text-lg font-semibold mt-4">Mosaic Building Group, Remote</h3>
      <div className="flex justify-between font-semibold">
        <p className="mb-2">Engineering Manager</p>
        <p className="mb-2 text-right">June 2022 - July 2024</p>
      </div>
      <ul className="list-disc list-inside mb-4">
        <li>Pioneered ERP system development in a startup, driving innovation in elastic general contracting and swiftly adapting to dynamic environments.</li>
        <li>Unified and led multiple small engineering teams, overseeing 10+ professionals, fostering a mini-startup culture and aligning with broader engineering goals.</li>
        <li>Directed full-stack software projects with a focus on SQL schema design and performance, ensuring robust and efficient solutions.</li>
        <li>Evaluated and optimized development processes with a keen eye for detail and risk, prioritizing features to define and deliver reliable MVPs.</li>
        <li>Orchestrated company-wide town halls and leadership panels, promoting open communication and a realistic approach to project uncertainties and challenges.</li>
      </ul>
      
      <h3 className="text-lg font-semibold mt-4">Caribou Financial, Remote</h3>
      <div className="flex justify-between font-semibold">
        <p className="mb-2">Engineering Manager, Integrations Enablement</p>
        <p className="mb-2 text-right">February 2022 - June 2022</p>
      </div>
      <ul className="list-disc list-inside mb-4">
        <li>Facilitated Agile ceremonies for my team and third-party contractors to align on project goals.</li>
        <li>Collaborated with the product team to balance projects and set the roadmap.</li>
        <li>Invested deeply in relationships with team members to help them achieve their career goals.</li>
        <li>Experimented with new tools and technologies to enhance the developer experience.</li>
      </ul>
      
      <div className="flex justify-between font-semibold">
        <p className="mb-2">Senior Software Engineer, Full Stack</p>
        <p className="mb-2 text-right">September 2021 - February 2022</p>
      </div>
      <ul className="list-disc list-inside mb-4">
        <li>Mentored engineers in Haskell and Elm to elevate team proficiency through pairing.</li>
        <li>Acted as tech lead, collaborating closely with product to gather technical requirements for key initiatives.</li>
        <li>Championed event-driven architecture discussions, where the team deliberated data models and long-term vision for our product.</li>
        <li>Engineered systems and tools to support a microservice architecture.</li>
      </ul>
      
      <h3 className="text-lg font-semibold mt-4">ITPro.TV, Gainesville, FL</h3>
      <div className="flex justify-between font-semibold">
        <p className="mb-2">Technical Product Manager</p>
        <p className="mb-2 text-right">July 2021 - September 2021</p>
      </div>
      <ul className="list-disc list-inside mb-4">
        <li>Mentored engineers in Haskell and Elm to elevate team proficiency through pairing.</li>
        <li>Collaborated with stakeholders to balance projects and set the roadmap.</li>
        <li>Engaged with other departments to clarify requests and clear blockers.</li>
        <li>Partnered with team members to help them lead large-scale projects.</li>
      </ul>
      
      <div className="flex justify-between font-semibold">
        <p className="mb-2">Software Engineering Lead</p>
        <p className="mb-2 text-right">February 2021 - June 2021</p>
      </div>
      <ul className="list-disc list-inside mb-4">
        <li>Managed and facilitated growth for a team of 2 engineers, training a team member for promotion.</li>
        <li>Reviewed the team’s pull requests for correctness and scalability.</li>
        <li>Architected and enhanced ITProTV's 1600 module large-scale Haskell API.</li>
        <li>Collaborated closely with the Product Lead and Director of Engineering to schedule priorities and prepare for large multi-month projects.</li>
      </ul>
      
      <div className="flex justify-between font-semibold">
        <p className="mb-2">Software Engineer</p>
        <p className="mb-2 text-right">May 2016 - January 2021</p>
      </div>
      <ul className="list-disc list-inside mb-4">
        <li>Collaborated with other team members to implement API design patterns.</li>
        <li>Developed readable, correct, and efficient code.</li>
        <li>Mastered multiple programming languages and infrastructure technologies.</li>
        <li>Cohosted over 30 episodes of the Haskell Weekly Podcast.</li>
      </ul>
    </section>
  )
}
