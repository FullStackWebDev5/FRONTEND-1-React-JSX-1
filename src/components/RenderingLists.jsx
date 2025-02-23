const RenderingLists = () => {
  // const students = ['Vishnu', 'Suraj', 'Sarita', 'Sanchay', 'Omkar']
  // const students = [
  //   {
  //     rollNo: 5,
  //     name: 'Soham Patil',
  //     course: 'Full Stack Web Development',
  //     techStack: 'MERN Stack',
  //     batch: 'April',
  //     marks: [98, 87, 75, 89, 76],
  //     avatar: 'https://reqres.in/img/faces/1-image.jpg',
  //     currentCompany: null
  //   },
  //   {
  //     rollNo: 10,
  //     name: 'Sarita',
  //     course: 'DSA',
  //     techStack: 'Java',
  //     batch: 'May',
  //     marks: [93, 76, 87, 82, 78],
  //     avatar: 'https://reqres.in/img/faces/2-image.jpg',
  //     currentCompany: null
  //   }
  // ]

  return (
    <>
      <h1>Students of Full Stack Batch</h1>
      {/* <ul>
        {students.map(student => {
          return <li>{student}</li>
        })}
      </ul> */}
      {/* <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul> */}

      {/* {students.map((student, index) => (
        <div key={index}>
          <h3>{student.name}</h3>
          <img src={student.avatar} alt='user-avatar' />
          <ul>
            <li>Course: {student.course}</li>
            <li>Tech Stack: {student.techStack}</li>
            <li>Batch: {student.batch}</li>
            <li>Total marks: {student.marks.reduce((a, m) => a + m)}</li>
            {student.currentCompany &&
              <li>Current company: {student.currentCompany}</li>}
          </ul>
        </div>
      ))} */}
    </>
  )
}

export default RenderingLists