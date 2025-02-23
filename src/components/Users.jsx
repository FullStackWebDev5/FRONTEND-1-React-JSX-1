import UserContact from './UserContact'

const Users = () => {
  const users = [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg",
      isPremium: false
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg",
      isPremium: true
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg",
      isPremium: true
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg",
      isPremium: false
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg",
      isPremium: false
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg",
      isPremium: true
    }
  ]

  const styles = {
    flexContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    container: {
      backgroundColor: '#eee',
      margin: '10px auto',
      padding: '10px',
      width: 'max-content',
      borderRadius: '10px',
    },
    premiumBadge: {
      width: 'max-content',
      backgroundColor: '#DAA520',
      padding: '5px 10px',
      margin: '10px auto',
      borderRadius: '5px',
      fontSize: '0.75em'
    }
  }

  return (
    <div style={styles.flexContainer}>
      {users.map(user => (
        <div 
          key={user.id} 
          style={styles.container}
        >
          <h1>{user.first_name} {user.last_name}</h1>
          {user.isPremium && (
            <div style={styles.premiumBadge}>PREMIUM USER</div>
          )}
          <img src={user.avatar} alt='user-img' />
          <p>{user.email}</p>
          <UserContact />
        </div>
      ))}
    </div>
  )
}

export default Users