import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hello! I’m Cameron, a seasoned software engineer and technical leader with a rich background in developing scalable, high-performance software solutions and leading dynamic engineering teams. My career is driven by a passion for leveraging technology to solve complex problems and enhance user experiences, particularly in high-impact industries like education and finance.`}
      </p>
      <h2 className="text-xl font-semibold mt-6">What I Do:</h2>
      <h3 className="text-lg font-semibold mt-4">Technical Leadership</h3>
      <p className="mb-4">
        {`I thrive in roles where I can lead projects and mentor teams. With expertise in full-stack development and a strong foundation in technologies like TypeScript, React, NodeJS, and PostgreSQL, I guide teams through complex project landscapes from conception to deployment.`}
      </p>
      <h3 className="text-lg font-semibold mt-4">Strategic Innovation</h3>
      <p className="mb-4">
        {`At the heart of my approach is a focus on strategic innovation and efficiency. Whether architecting robust ERP systems or enhancing software workflows, I aim to drive operations that scale seamlessly and deliver tangible results.`}
      </p>
      <h3 className="text-lg font-semibold mt-4">Mentorship & Growth</h3>
      <p className="mb-4">
        {`I believe in the power of mentorship and actively invest in the professional growth of my colleagues. By fostering a collaborative and inclusive environment, I help engineers advance their skills and take on new challenges.`}
      </p>
      <h3 className="text-lg font-semibold mt-4">Mission-Driven Development</h3>
      <p className="mb-4">
        {`I am particularly drawn to opportunities that allow me to contribute to meaningful change. My work is not just about technical execution but about making a positive impact on the communities and industries we serve.`}
      </p>
      <h2 className="text-xl font-semibold mt-6">Achievements</h2>
      <ul className="list-disc list-inside mb-4">
        <li>{`Led the development of a full-scale ERP system, managing projects up to $250 million in revenue.`}</li>
        <li>{`Directed and enhanced full-stack software projects with a focus on performance and maintainability.`}</li>
        <li>{`Championed agile methodologies and continuous improvement, significantly boosting team productivity and project output.`}</li>
      </ul>
      <p className="mb-4">
        {`I'm currently interested in opportunities where I can both lead and learn, contributing to projects that are at the forefront of technology and user experience. Let’s connect to explore how we can drive technological advancement together!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
