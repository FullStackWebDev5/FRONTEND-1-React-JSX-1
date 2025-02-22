const Students = () => {
  const student1 = {
    name: 'Soham Patil',
    course: 'Full Stack Web Development',
    techStack: 'MERN Stack',
    batch: 'April',
    marks: [98, 87, 75, 89, 76],
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
    currentCompany: null
  }

  const student2 = {
    name: 'Sarita',
    course: 'DSA',
    techStack: 'Java',
    batch: 'May',
    marks: [93, 76, 87, 82, 78],
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
    currentCompany: null
  }

  return (
    <>
      <div>
        <h3>{student1.name}</h3>
        <img src={student1.avatar} alt='user-avatar' />
        <ul>
          <li>Course: {student1.course}</li>
          <li>Tech Stack: {student1.techStack}</li>
          <li>Batch: {student1.batch}</li>
          <li>Total marks: {student1.marks.reduce((a, m) => a + m)}</li>
          {student1.currentCompany &&
            <li>Current company: {student2.currentCompany}</li>}
        </ul>
      </div>
      <div>
        <h3>{student2.name}</h3>
        <img src={student2.avatar} alt='user-avatar' />
        <ul>
          <li>Course: {student2.course}</li>
          <li>Tech Stack: {student2.techStack}</li>
          <li>Batch: {student2.batch}</li>
          <li>Total marks: {student2.marks.reduce((a, m) => a + m)}</li>
          {student2.currentCompany &&
            <li>Current company: {student2.currentCompany}</li>}
        </ul>
      </div>
    </>
  )
}

export default Students