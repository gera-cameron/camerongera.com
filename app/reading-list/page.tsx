"use client";
import React, { useState } from "react";

type BookType 
  = "Design"
  | "Engineering Leadership"
  | "Engineering Management"
  | "Functional Programming"
  | "Leadership"
  | "Management"
  | "Organizational"
  | "Philosophy"
  | "Product"
  | "Product Management"
  | "Software Craftsmanship"
  | "Systems Thinking"
  | "Technical";

type Book = {
  title: string;
  author: string;
  dateRead: string;
  description?: string;
  tags: BookType[];
};

const books: Book[] = [
  {
    title: "The Geek Way",
    author: "Andrew McAfee",
    dateRead: "2025-02",
    tags: ["Organizational", "Philosophy"],
    description:
      "This book inspired me to embrace unconventional thinking and challenge the status quo, both in business and in life. I learned that building an organization with a strong, positive culture can be a force for good, and that being different is often a strength. The 'geek way' encourages curiosity, experimentation, and a willingness to break from tradition.",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    dateRead: "2024-04",
    tags: ["Product", "Product Management", "Organizational"],
    description:
      "I learned the value of building products iteratively and validating ideas early with real users. The book emphasizes the importance of learning from feedback, measuring progress, and being willing to pivot when necessary. It changed how I approach product development, focusing on outcomes and continuous improvement.",
  },
  { 
    title: "Creative Confidence",
    author: "Tom Kelley and David Kelley",
    dateRead: "2023-10",
    tags: ["Design", "Philosophy", "Leadership"],
    description:
      "This book helped me realize that creativity is a skill anyone can develop, not just a talent for a select few. I learned practical ways to build confidence in my design decisions and to approach problems with a designer's mindset. It also deepened my empathy for designers and encouraged me to collaborate more effectively across disciplines.",
  },
  { 
    title: "Daring Greatly",
    author: "Brene Brown",
    dateRead: "2023-10",
    tags: ["Philosophy", "Leadership"],
    description:
      "I learned that vulnerability is not a weakness, but a source of strength and connection. The book taught me that being open about struggles and uncertainties can foster trust and authenticity, both in leadership and personal relationships. It encouraged me to lead with courage and empathy.",
  },
  { 
    title: "The Gift of Imperfection",
    author: "Brene Brown",
    dateRead: "2023-09",
    tags: ["Philosophy", "Leadership"],
    description:
      "This book helped me accept that perfection is unattainable and that embracing my imperfections leads to growth and resilience. I learned that making mistakes is part of the journey, and that leading with authenticity and vulnerability can be a true superpower.",
  },
  // {
  //   title: "Build",
  //   author: "Tony Fadell",
  //   dateRead: "2023-08",
  //   tags: ["Product", "Product Management", "Organizational"],
  //   description: "",
  // },
  {
    title: "The 6 Types of Working Genius",
    author: "Patrick Lencioni",
    dateRead: "2023-06",
    tags: ["Organizational", "Management"],
    description:
      "I discovered a practical framework for understanding team dynamics and individual strengths. The book helped me identify my own working genius and appreciate the diverse talents within my team. It sparked valuable conversations about how we can better support each other and maximize our collective potential.",
  },
  {
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    dateRead: "2023-05",
    description:
      "This book introduced me to the fundamentals of systems thinking. I learned to recognize feedback loops, leverage points, and the interconnectedness of complex systems—skills that apply to both software and organizations. It changed how I approach problem-solving and design.",
    tags: ["Systems Thinking", "Philosophy", "Organizational"],
  },
  {
    title: "Turn the Ship Around",
    author: "L. David Marquet",
    dateRead: "2023-04",
    tags: ["Leadership", "Organizational", "Management"],
    description:
      "I learned that great leadership is about empowering others, not controlling them. The book's 'leader-leader' model showed me the value of giving people ownership and responsibility, fostering a culture of trust and continuous learning. It challenged my assumptions about authority and management.",
  },
  {
    title: "Switch",
    author: "Chip and Dan Heath",
    dateRead: "2023-03",
    tags: ["Organizational", "Leadership", "Philosophy"],
    description:
      "This book taught me how to lead and manage change by appealing to both rational and emotional sides. The metaphor of the rider and the elephant helped me understand why change is hard and how to make it easier for myself and others. I learned practical strategies for motivating change in teams and organizations.",
  },
  {
    title: "Never Split the Difference",
    author: "Chris Voss",
    dateRead: "2023-03",
    tags: ["Leadership", "Management"],
    description:
      "I gained valuable negotiation skills from this book, especially the importance of active listening and empathy. Chris Voss's real-world stories made the techniques memorable. I now approach difficult conversations with more confidence and a focus on understanding the other person's perspective.",
  },
  {
    title: "Lean UX",
    author: "Jeff Gothelf and Josh Seiden",
    dateRead: "2023-02",
    tags: ["Design", "Product", "Product Management"],
    description:
      "I learned how to integrate user feedback into the design process and focus on outcomes rather than outputs. The book reinforced the importance of collaboration and experimentation in building products. I also picked up practical tips for organizing teams around shared goals.",
  },
  {
    title: "Creativity, Inc.",
    author: "Ed Catmull",
    dateRead: "2023-01",
    tags: ["Organizational", "Leadership", "Design"],
    description:
      "The story of Pixar taught me about the power of creative culture and the importance of embracing failure as part of innovation. I learned that a strong vision, open communication, and trust are essential for building successful teams and organizations.",
  },
  {
    title: "Start with Why",
    author: "Simon Sinek",
    dateRead: "2022-12",
    tags: ["Leadership", "Philosophy"],
    description:
      "This book emphasized the importance of purpose in leadership and business. I learned that starting with 'why'—the deeper reason behind what we do—can inspire others and drive meaningful action. It encouraged me to clarify my own motivations and communicate them clearly.",
  },
  { 
    title: "Everybody, Always",
    author: "Bob Goff",
    dateRead: "2022-09",
    tags: ["Philosophy", "Leadership"],
    description:
      "I learned about the power of unconditional love and kindness. The book encouraged me to be more open, generous, and accepting of others, regardless of their background or beliefs. It reinforced the idea that leadership is about serving and uplifting those around us.",
  },
  { 
    title: "The Power of Full Engagement",
    author: "Jim Loehr and Tony Schwartz",
    dateRead: "2022-07",
    tags: ["Philosophy", "Leadership"],
    description:
      "This book taught me that managing energy—not just time—is key to high performance and well-being. I learned practical strategies for balancing work and rest, building positive habits, and sustaining motivation over the long term.",
  },
  {
    title: "An Elegant Puzzle: Systems of Engineering Management",
    author: "Will Larson",
    dateRead: "2022-06",
    tags: ["Engineering Management", "Systems Thinking", "Organizational"],
    description:
      "I gained insights into the complexities of engineering management, from team structure to scaling organizations. The book provided practical frameworks for solving common challenges and helped me appreciate the value of systems thinking in leadership.",
  },
  {
    title: "The Manager's Path",
    author: "Camille Fournier",
    dateRead: "2022-02",
    tags: ["Engineering Management", "Engineering Leadership", "Management"],
    description:
      "This book guided me through the different stages of a technical management career, from tech lead to CTO. I learned about the challenges and responsibilities at each level, and picked up actionable advice for mentoring, communication, and building effective teams.",
  },
  { 
    title: "The Five Dysfunctions of a Team",
    author: "Patrick Lencioni",
    dateRead: "2021-03",
    tags: ["Organizational", "Leadership", "Management"],
    description:
      "I learned to recognize and address the five key dysfunctions that can undermine teams: absence of trust, fear of conflict, lack of commitment, avoidance of accountability, and inattention to results. The book gave me practical tools for building healthier, more effective teams.",
  },
  {
    title: "Radical Candor",
    author: "Kim Scott",
    dateRead: "2020-06",
    tags: ["Leadership", "Management"],
    description:
      "This book taught me how to give feedback that is both direct and caring. I learned the importance of challenging directly while showing personal care, and how this approach can build trust and drive better performance. It's a must-read for anyone in a leadership role.",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    dateRead: "2020-02",
    tags: ["Leadership", "Philosophy"],
    description:
      "A timeless guide to building strong relationships and influencing others positively. I learned practical techniques for effective communication, active listening, and making people feel valued—skills that are essential in both personal and professional life.",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    dateRead: "2019-04",
    tags: ["Philosophy", "Leadership"],
    description:
      "This classic taught me the importance of personal responsibility, proactive behavior, and aligning actions with core values. The seven habits provide a framework for continuous self-improvement and effective leadership.",
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    dateRead: "2018-10",
    tags: ["Philosophy", "Leadership"],
    description:
      "I learned how habits are formed and how they can be changed. The concept of the habit loop—cue, routine, reward—helped me understand my own behaviors and gave me tools to build better habits in both my personal and professional life.",
  },
  {
    title: "Purely Functional Data Structures",
    author: "Chris Okasaki",
    dateRead: "2018-06",
    description:
      "A foundational book for anyone interested in functional programming. I learned about persistent data structures and how immutability can lead to elegant and efficient solutions. The book inspired me to implement these concepts in Haskell and PureScript.",
    tags: ["Technical", "Functional Programming"],
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    dateRead: "2017-09",
    tags: ["Technical", "Software Craftsmanship", "Philosophy"],
    description:
      "This book reinforced the importance of designing software with clear boundaries and separation of concerns. I learned principles for building maintainable, flexible systems, and the value of keeping codebase architecture independent of frameworks and details.",
  },
  { // Earliest
    title: "Chess Not Checkers",
    author: "Mark Miller",
    dateRead: "2017-03",
    tags: ["Organizational", "Leadership"],
    description:
      "This book used a fictional story to illustrate key leadership lessons. I learned that leading an organization requires strategic thinking, adaptability, and a focus on developing people. The narrative made the concepts memorable and easy to apply.",
  },
];

// Get all unique tags from books
const allTags: BookType[] = Array.from(
  books.reduce((acc, book) => {
    book.tags.forEach(tag => acc.add(tag));
    return acc;
  }, new Set<BookType>())
).sort();

export default function ReadingListPage() {
  const [selectedTag, setSelectedTag] = useState<BookType | "All">("All");

  const filteredBooks =
    selectedTag === "All"
      ? books
      : books.filter(book => book.tags.includes(selectedTag as BookType));

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
          Reading List
        </h1>
        <div className="mb-8">
          <label htmlFor="tag-filter" className="mr-2 font-medium">
            Filter:
          </label>
          <select
            id="tag-filter"
            value={selectedTag}
            onChange={e => setSelectedTag(e.target.value as BookType | "All")}
            className="border rounded px-2 py-1 dark:bg-neutral-900 dark:text-neutral-100"
          >
            <option value="All">All types</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
     
      <p className="mb-6 text-neutral-700 dark:text-neutral-300">
        A growing list of books I've read, along with notes and takeaways. I love learning from a mix of technical, organizational, and philosophical works.
      </p>
      <ul className="space-y-8">
        {filteredBooks.map((book, idx) => (
          <li key={idx} className="border-b pb-8">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              <span className="italic">{book.author}</span>
              {" · "}
              <span className="text-sm">Read: {book.dateRead}</span>
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {book.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-block bg-neutral-200 dark:bg-neutral-700 text-xs px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            {book.description && (
              <p className="mt-2 text-neutral-800 dark:text-neutral-200">
                {book.description}
              </p>
            )}
          </li>
        ))}
        {filteredBooks.length === 0 && (
          <li className="text-neutral-500 dark:text-neutral-400">No books found for this type.</li>
        )}
      </ul>
    </section>
  );
}
