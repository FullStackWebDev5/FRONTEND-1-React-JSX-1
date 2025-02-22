const Students = () => {
  const headingJSX = <h1>Students</h1>

  // let student1Name = 'Soham Patil'
  // let student1Course = 'Full Stack Web Development'
  // let student1TechStack = 'MERN Stack'
  // let student1Batch = 'April'
  // let student1Marks = [98, 87, 75, 89, 76]

  // let student2Name = 'Sarita'
  // let student2Course = 'DSA'
  // let student2TechStack = 'Java'
  // let student2Batch = 'May'
  // let student2Marks = [93, 76, 87, 82, 78]

  // const sum = (num1, num2) => {
  //   return num1 + num2
  // }
  // const arr = [1, 2, 3, 4, 5, 6, 7]
  // const obj = {
  //   a: 5,
  //   b: 10
  // }

  const student1 = {
    name: 'Soham Patil',
    course: 'Full Stack Web Development',
    techStack: 'MERN Stack',
    batch: 'April',
    marks: [98, 87, 75, 89, 76],
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  }

  const student2 = {
    name: 'Sarita',
    course: 'DSA',
    techStack: 'Java',
    batch: 'May',
    marks: [93, 76, 87, 82, 78],
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  }

  return (
    <>
      {headingJSX}
      <div>
        <h3>{student1.name}</h3>
        <img src={student1.avatar} alt='user-avatar' />
        <ul>
          <li>Course: {student1.course}</li>
          <li>Tech Stack: {student1.techStack}</li>
          <li>Batch: {student1.batch}</li>
          <li>Total marks: {student1.marks.reduce((a, m) => a + m)}</li>
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
        </ul>
      </div>

      {/* <div>
        <h3>{String(true)}</h3>
        <h3>{String(false)}</h3>
        <h3>{String(null)}</h3>
        <h3>{String(undefined)}</h3>
      </div> */}

      {/* <div>
        <div>{sum(5, 10)}</div>
        <div>{sum(25, 15)}</div>
        <div>{arr.join(', ')}</div>
        <div>{JSON.stringify(obj)}</div>
      </div> */}
    </>
  )
}

export default Students